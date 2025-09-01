import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ArrowLeft, Send, Bot, User, Code, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import cybercatLogo from '@/assets/cybercat-logo.jpg';
import FileExplorer, { FileItem } from '@/components/coder/FileExplorer';
import FileTabs from '@/components/coder/FileTabs';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Coder = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'src',
      type: 'folder',
      path: 'src',
      expanded: true,
      children: [
        {
          id: '2',
          name: 'main.js',
          type: 'file',
          path: 'src/main.js',
          language: 'javascript',
          content: '// Welcome to CyberCat Code Editor\n// Start coding your security tools here...\n\nfunction hackTheGibson() {\n  console.log("I\'m in!");\n}\n\nhackTheGibson();'
        },
        {
          id: '3',
          name: 'utils.py',
          type: 'file',
          path: 'src/utils.py',
          language: 'python',
          content: '# Python security utilities\n# Add your penetration testing tools here\n\ndef scan_ports(target):\n    print(f"Scanning {target}...")\n    pass\n\nif __name__ == "__main__":\n    scan_ports("localhost")'
        }
      ]
    },
    {
      id: '4',
      name: 'tools',
      type: 'folder',
      path: 'tools',
      expanded: false,
      children: []
    }
  ]);
  const [openFiles, setOpenFiles] = useState<FileItem[]>([]);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findFileById = (files: FileItem[], id: string): FileItem | null => {
    for (const file of files) {
      if (file.id === id) return file;
      if (file.children) {
        const found = findFileById(file.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const updateFileContent = (fileId: string, content: string) => {
    const updateFiles = (files: FileItem[]): FileItem[] => {
      return files.map(file => {
        if (file.id === fileId) {
          return { ...file, content };
        }
        if (file.children) {
          return { ...file, children: updateFiles(file.children) };
        }
        return file;
      });
    };
    setFiles(updateFiles(files));
    
    // Update open files
    setOpenFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, content } : file
    ));
  };

  const getFileLanguage = (filename: string): string => {
    const extension = filename.split('.').pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
      'js': 'javascript',
      'jsx': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'py': 'python',
      'cpp': 'cpp',
      'c': 'cpp',
      'java': 'java',
      'go': 'go',
      'sh': 'bash',
      'bash': 'bash',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'xml': 'xml',
      'sql': 'sql',
    };
    return languageMap[extension || ''] || 'plaintext';
  };

  const handleFileSelect = (file: FileItem) => {
    if (file.type === 'file') {
      // Add to open files if not already open
      if (!openFiles.find(f => f.id === file.id)) {
        setOpenFiles(prev => [...prev, file]);
      }
      setActiveFile(file.id);
    }
  };

  const handleTabClose = (fileId: string) => {
    setOpenFiles(prev => prev.filter(f => f.id !== fileId));
    if (activeFile === fileId) {
      const remainingFiles = openFiles.filter(f => f.id !== fileId);
      setActiveFile(remainingFiles.length > 0 ? remainingFiles[remainingFiles.length - 1].id : null);
    }
  };

  const handleFileCreate = (name: string, type: 'file' | 'folder', parentPath?: string) => {
    const newId = Date.now().toString();
    const newItem: FileItem = {
      id: newId,
      name,
      type,
      path: parentPath ? `${parentPath}/${name}` : name,
      content: type === 'file' ? '' : undefined,
      language: type === 'file' ? getFileLanguage(name) : undefined,
      children: type === 'folder' ? [] : undefined,
      expanded: type === 'folder' ? false : undefined,
    };

    const addToFiles = (files: FileItem[]): FileItem[] => {
      if (!parentPath) {
        return [...files, newItem];
      }
      return files.map(file => {
        if (file.path === parentPath && file.type === 'folder') {
          return {
            ...file,
            children: [...(file.children || []), newItem],
            expanded: true
          };
        }
        if (file.children) {
          return { ...file, children: addToFiles(file.children) };
        }
        return file;
      });
    };

    setFiles(addToFiles(files));
  };

  const handleFileRename = (id: string, newName: string) => {
    const renameInFiles = (files: FileItem[]): FileItem[] => {
      return files.map(file => {
        if (file.id === id) {
          const newPath = file.path.replace(/[^/]+$/, newName);
          return { ...file, name: newName, path: newPath };
        }
        if (file.children) {
          return { ...file, children: renameInFiles(file.children) };
        }
        return file;
      });
    };
    setFiles(renameInFiles(files));
  };

  const handleFileDelete = (id: string) => {
    const deleteFromFiles = (files: FileItem[]): FileItem[] => {
      return files.filter(file => {
        if (file.id === id) return false;
        if (file.children) {
          file.children = deleteFromFiles(file.children);
        }
        return true;
      });
    };
    setFiles(deleteFromFiles(files));
    
    // Remove from open files and close tab
    handleTabClose(id);
  };

  const handleFolderToggle = (id: string) => {
    const toggleInFiles = (files: FileItem[]): FileItem[] => {
      return files.map(file => {
        if (file.id === id && file.type === 'folder') {
          return { ...file, expanded: !file.expanded };
        }
        if (file.children) {
          return { ...file, children: toggleInFiles(file.children) };
        }
        return file;
      });
    };
    setFiles(toggleInFiles(files));
  };

  const currentFile = activeFile ? openFiles.find(f => f.id === activeFile) : null;

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate API call with context about current code
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const currentFileInfo = currentFile ? `Currently editing: ${currentFile.name} (${currentFile.language})` : 'No file selected';
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I can help you with your code! ${currentFileInfo}\n\nBased on your question, here are some suggestions:\n\n1. Add proper error handling\n2. Consider input validation\n3. Use secure coding practices\n4. Follow best practices for ${currentFile?.language || 'your language'}\n\nWould you like me to help optimize your code or explain any security concepts?`,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Navigation Header */}
      <header className="flex items-center justify-between p-4 border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <img 
              src={cybercatLogo} 
              alt="CyberCat" 
              className="w-8 h-8 animate-glow-pulse"
            />
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-xl font-bold text-primary text-glow">
                CyberCat Coder
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {currentFile && (
            <span className="text-sm text-muted-foreground">
              {currentFile.name} - {currentFile.language}
            </span>
          )}
          <Button 
            variant="outline" 
            size="sm"
            className="cyber-border"
            onClick={() => window.location.href = '/terminal'}
          >
            <Terminal className="w-4 h-4 mr-2" />
            Terminal
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* File Explorer Panel */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={35}>
            <FileExplorer
              files={files}
              selectedFile={activeFile}
              onFileSelect={handleFileSelect}
              onFileCreate={handleFileCreate}
              onFileRename={handleFileRename}
              onFileDelete={handleFileDelete}
              onFolderToggle={handleFolderToggle}
            />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Code Editor Panel */}
          <ResizablePanel defaultSize={55} minSize={30}>
            <div className="h-full flex flex-col bg-background">
              <FileTabs
                openFiles={openFiles}
                activeFile={activeFile}
                onTabSelect={setActiveFile}
                onTabClose={handleTabClose}
              />
              
              {currentFile ? (
                <Editor
                  height="100%"
                  language={currentFile.language || 'plaintext'}
                  value={currentFile.content || ''}
                  onChange={(value) => updateFileContent(currentFile.id, value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    wordWrap: 'on',
                    bracketPairColorization: { enabled: true },
                    suggestOnTriggerCharacters: true,
                    acceptSuggestionOnEnter: 'on',
                    tabCompletion: 'on',
                    formatOnPaste: true,
                    formatOnType: true,
                  }}
                />
              ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Welcome to CyberCat Coder</p>
                    <p className="text-sm">Select a file from the explorer to start coding</p>
                  </div>
                </div>
              )}
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* AI Assistant Panel */}
          <ResizablePanel defaultSize={25} minSize={20}>
            <div className="h-full flex flex-col bg-muted/20 border-l border-primary/20">
              {/* Assistant Header */}
              <div className="p-4 border-b border-primary/20 bg-background/50">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Code Assistant</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Ask me about your code or security concepts
                </p>
              </div>

              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground">
                      <Terminal className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Start a conversation with your AI coding assistant</p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex space-x-2 ${
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`flex space-x-2 max-w-[85%] ${
                            message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {message.role === 'user' ? (
                              <User className="w-6 h-6 text-primary" />
                            ) : (
                              <Bot className="w-6 h-6 text-primary animate-glow-pulse" />
                            )}
                          </div>
                          <div
                            className={`rounded-lg p-3 text-sm ${
                              message.role === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            <p className="whitespace-pre-wrap">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex space-x-2 justify-start">
                      <div className="flex space-x-2">
                        <Bot className="w-6 h-6 text-primary animate-glow-pulse" />
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t border-primary/20 bg-background/50">
                <div className="flex space-x-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about your code..."
                    className="min-h-[60px] resize-none text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    size="icon"
                    className="h-[60px] w-[60px] cyber-border glow-cyan"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  AI assistant for secure coding practices
                </p>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Coder;