import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ArrowLeft, Send, Bot, User, Code, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Coder = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('// Welcome to CyberCat Code Editor\n// Start coding your security tools here...\n\nfunction hackTheGibson() {\n  console.log("I\'m in!");\n}\n\nhackTheGibson();');
  const [language, setLanguage] = useState('javascript');
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
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I can help you with your ${language} code! Based on your current editor content, I notice you're working on security-related functions. Here are some suggestions:\n\n1. Add proper error handling\n2. Consider input validation\n3. Use secure coding practices\n\nWould you like me to help optimize your code or explain any security concepts?`,
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

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'bash', label: 'Bash' },
    { value: 'cpp', label: 'C++' },
    { value: 'java', label: 'Java' },
    { value: 'go', label: 'Go' },
  ];

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
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-background border border-primary/20 rounded-md px-3 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Code Editor Panel */}
          <ResizablePanel defaultSize={75} minSize={50}>
            <div className="h-full bg-background">
              <Editor
                height="100%"
                language={language}
                value={code}
                onChange={(value) => setCode(value || '')}
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
                }}
              />
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