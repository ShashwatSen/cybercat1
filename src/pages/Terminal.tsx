import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Terminal as TerminalIcon, Play, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: Date;
}

const Terminal = () => {
  const navigate = useNavigate();
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'output',
      content: 'CyberCat Terminal v1.0.0 - Ready for commands',
      timestamp: new Date()
    }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  const executeCommand = async (command: string) => {
    if (!command.trim()) return;

    // Add command to history
    const commandLine: TerminalLine = {
      id: Date.now().toString(),
      type: 'command',
      content: `$ ${command}`,
      timestamp: new Date()
    };

    setLines(prev => [...prev, commandLine]);
    setIsRunning(true);

    // Simulate command execution
    setTimeout(() => {
      let output = '';
      let type: 'output' | 'error' = 'output';

      // Simple command simulation
      switch (command.toLowerCase().trim()) {
        case 'help':
          output = `Available commands:
  help        - Show this help message
  ls          - List files and directories
  pwd         - Print working directory
  whoami      - Display current user
  date        - Show current date and time
  clear       - Clear terminal
  echo <text> - Echo text back
  cat <file>  - Display file contents
  mkdir <dir> - Create directory
  rm <file>   - Remove file
  ps          - Show running processes
  top         - Display system processes
  ping <host> - Ping a host
  curl <url>  - Make HTTP request`;
          break;
        case 'ls':
          output = `total 8
drwxr-xr-x  2 user user 4096 Jan  1 12:00 documents
drwxr-xr-x  2 user user 4096 Jan  1 12:00 projects
-rw-r--r--  1 user user  256 Jan  1 12:00 readme.txt
-rw-r--r--  1 user user  512 Jan  1 12:00 config.json`;
          break;
        case 'pwd':
          output = '/home/user/cybercat';
          break;
        case 'whoami':
          output = 'cybercat-user';
          break;
        case 'date':
          output = new Date().toString();
          break;
        case 'clear':
          setLines([]);
          setIsRunning(false);
          return;
        case 'ps':
          output = `  PID TTY          TIME CMD
 1234 pts/0    00:00:01 cybercat
 1235 pts/0    00:00:00 terminal
 1236 pts/0    00:00:00 bash`;
          break;
        case 'top':
          output = `top - 12:00:00 up 1 day,  2:34,  1 user,  load average: 0.15, 0.05, 0.01
Tasks:   3 total,   1 running,   2 sleeping,   0 stopped,   0 zombie
%Cpu(s):  1.0 us,  0.5 sy,  0.0 ni, 98.5 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1234 user      20   0  123456   7890   1234 R   1.0   0.8   0:01.23 cybercat`;
          break;
        default:
          if (command.startsWith('echo ')) {
            output = command.substring(5);
          } else if (command.startsWith('ping ')) {
            const host = command.substring(5);
            output = `PING ${host} (192.168.1.1): 56 data bytes
64 bytes from 192.168.1.1: icmp_seq=0 ttl=64 time=1.234 ms
64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.567 ms
--- ${host} ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss`;
          } else if (command.startsWith('curl ')) {
            const url = command.substring(5);
            output = `HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": "success",
  "url": "${url}",
  "timestamp": "${new Date().toISOString()}"
}`;
          } else if (command.startsWith('cat ')) {
            const file = command.substring(4);
            output = `File: ${file}
Content of ${file} would be displayed here...
This is a simulated file system.`;
          } else if (command.startsWith('mkdir ')) {
            const dir = command.substring(6);
            output = `Directory '${dir}' created successfully.`;
          } else if (command.startsWith('rm ')) {
            const file = command.substring(3);
            output = `File '${file}' removed successfully.`;
          } else {
            output = `Command not found: ${command}. Type 'help' for available commands.`;
            type = 'error';
          }
      }

      const outputLine: TerminalLine = {
        id: (Date.now() + 1).toString(),
        type,
        content: output,
        timestamp: new Date()
      };

      setLines(prev => [...prev, outputLine]);
      setIsRunning(false);
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim() && !isRunning) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  const clearTerminal = () => {
    setLines([{
      id: Date.now().toString(),
      type: 'output',
      content: 'Terminal cleared. CyberCat Terminal v1.0.0 - Ready for commands',
      timestamp: new Date()
    }]);
  };

  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="matrix-bg"></div>
      <div className="terminal-grid"></div>
      <div className="code-rain"></div>
      <div className="floating-code"></div>
      <div className="cyber-particles"></div>

      {/* Header */}
      <header className="relative z-10 bg-background/80 backdrop-blur-md border-b border-primary/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-primary hover:bg-primary/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src={cybercatLogo} 
                alt="CyberCat" 
                className="w-8 h-8 animate-glow-pulse"
              />
              <div>
                <h1 className="text-xl font-bold text-primary text-glow">
                  CyberCat Terminal
                </h1>
                <p className="text-sm text-muted-foreground">
                  Execute commands and scripts
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearTerminal}
              className="cyber-border"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>
      </header>

      {/* Terminal Content */}
      <div className="relative z-10 flex flex-col h-[calc(100vh-80px)]">
        {/* Terminal Window */}
        <div className="flex-1 bg-background/90 backdrop-blur-sm m-4 rounded-lg border border-primary/20 cyber-border">
          <div className="flex items-center justify-between px-4 py-2 bg-muted/20 border-b border-primary/20 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <TerminalIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Terminal</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-200px)]" ref={scrollRef}>
            <div className="p-4 font-mono text-sm">
              {lines.map((line) => (
                <div key={line.id} className={`mb-2 ${
                  line.type === 'command' 
                    ? 'text-primary font-semibold' 
                    : line.type === 'error' 
                    ? 'text-destructive' 
                    : 'text-foreground'
                }`}>
                  <pre className="whitespace-pre-wrap break-words">{line.content}</pre>
                  {line.type === 'command' && isRunning && lines[lines.length - 1].id === line.id && (
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full"></div>
                      <span className="text-muted-foreground">Executing...</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Command Input */}
          <div className="border-t border-primary/20 p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <span className="text-primary font-mono">$</span>
              <Input
                ref={inputRef}
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                placeholder="Enter command..."
                disabled={isRunning}
                className="flex-1 bg-transparent border-none outline-none focus:ring-0 font-mono"
                autoFocus
              />
              <Button
                type="submit"
                size="sm"
                disabled={!currentCommand.trim() || isRunning}
                className="cyber-border"
              >
                <Play className="w-4 h-4" />
              </Button>
            </form>
            <div className="mt-2 text-xs text-muted-foreground">
              Type 'help' for available commands • Press Enter to execute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;