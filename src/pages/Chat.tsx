import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Zap, Shield, FileText, Bot, User, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const examplePrompts = [
    {
      icon: Shield,
      title: "Vulnerability Triage",
      prompt: "I have a Nessus scan with 200+ findings. Help me prioritize the critical vulnerabilities that need immediate attention.",
      color: "text-neon-red"
    },
    {
      icon: FileText,
      title: "Disclosure Report",
      prompt: "Create a responsible disclosure report for a SQL injection vulnerability I found in a web application's login form.",
      color: "text-neon-purple"
    },
    {
      icon: Zap,
      title: "Safe Verification",
      prompt: "Suggest safe manual verification steps for a suspected buffer overflow vulnerability without causing system damage.",
      color: "text-neon-blue"
    },
    {
      icon: Sparkles,
      title: "Remediation Guide",
      prompt: "Provide remediation strategies for a cross-site scripting (XSS) vulnerability found in user input fields.",
      color: "text-primary"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (prompt: string) => {
    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=AIzaSyAXHfPQKtTuqdix-8GeYiNOxLOIsnQpCTw',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: prompt
              }]
            }]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I apologize, but I'm currently experiencing technical difficulties. Please try again shortly.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Call Gemini API
    try {
      const response = await callGeminiAPI(input);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I encountered an error processing your request. Please try again.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (prompt: string) => {
    setInput(prompt);
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="matrix-bg">
          <div className="terminal-grid"></div>
          <div className="code-rain">
            {/* Animated code lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="code-line"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              >
                {[
                  'const vulnerabilities = await scanResults.filter(v => v.severity === "critical");',
                  'if (payload.includes("script")) { sanitizeInput(payload); }',
                  'SELECT * FROM users WHERE id = ? AND password = ?',
                  'function validateAuth(token) { return jwt.verify(token, secret); }',
                  'import { SQLInjection, XSS, CSRF } from "./vulnerabilities";',
                  'const exploit = { type: "RCE", payload: base64.decode(input) };',
                  'ssh root@target.com -p 22 -i private_key',
                  'nmap -sS -O target.com',
                  'curl -X POST -H "Content-Type: application/json" -d payload',
                  'grep -r "password" /var/log/',
                  'nc -lvp 4444',
                  'python3 exploit.py --target 192.168.1.1',
                  'cat /etc/passwd | grep root',
                  'chmod +x exploit.sh && ./exploit.sh',
                  'find / -name "*.conf" -exec grep -l "password" {} \\;'
                ][Math.floor(Math.random() * 15)]}
              </div>
            ))}
          </div>
          
          {/* Floating code snippets */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`float-${i}`}
              className="floating-code"
              style={{
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            >
              {[
                '#!/bin/bash',
                '<?php',
                'function()',
                'if($auth)',
                'SELECT',
                'POST /',
                'GET /api',
                'HTTP/1.1'
              ][Math.floor(Math.random() * 8)]}
            </div>
          ))}

          {/* Cyber particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="cyber-particles"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        <DashboardSidebar />
        
        <SidebarInset className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b border-primary/20 bg-card/50 backdrop-blur-md relative z-10">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center space-x-3">
                <SidebarTrigger className="mr-2" />
                <img 
                  src={cybercatLogo} 
                  alt="CyberCat" 
                  className="w-8 h-8 animate-glow-pulse"
                />
                <div>
                  <h1 className="text-xl font-bold animate-text-shimmer">
                    CyberCat AI Assistant
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Ethical Security Research Assistant
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 flex relative z-10">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="max-w-4xl mx-auto space-y-6">
                  {messages.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="mb-8">
                        <img 
                          src={cybercatLogo} 
                          alt="CyberCat" 
                          className="w-16 h-16 mx-auto mb-4 animate-float"
                        />
                        <h2 className="text-2xl font-bold text-primary mb-2">
                          Welcome to CyberCat
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          Your AI assistant for ethical security research. I can help with vulnerability triage, 
                          responsible disclosure reports, safe verification steps, and remediation guidance.
                        </p>
                      </div>

                      {/* Example Prompts */}
                      <div className="grid md:grid-cols-2 gap-4 mt-8">
                        {examplePrompts.map((example, index) => (
                          <Card 
                            key={index}
                            className="p-4 cursor-pointer hover:glow-red transition-all duration-300 cyber-border group"
                            onClick={() => handleExampleClick(example.prompt)}
                          >
                            <div className="flex items-start space-x-3">
                              <example.icon className={`w-6 h-6 ${example.color} group-hover:animate-glow-pulse flex-shrink-0 mt-1`} />
                              <div className="text-left">
                                <h3 className="font-semibold text-foreground mb-2">{example.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {example.prompt}
                                </p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex items-start space-x-3 ${
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-cyber-dark" />
                          </div>
                        )}
                        
                        <div className={`max-w-3xl ${
                          message.role === 'user' 
                            ? 'bg-primary/20 text-foreground' 
                            : 'bg-card/50 text-foreground'
                        } rounded-lg p-4 cyber-border`}>
                          <div className="whitespace-pre-wrap leading-relaxed">
                            {message.content}
                          </div>
                          <div className="text-xs text-muted-foreground mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>

                        {message.role === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-secondary" />
                          </div>
                        )}
                      </div>
                    ))
                  )}

                  {isLoading && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Bot className="w-5 h-5 text-cyber-dark" />
                      </div>
                      <div className="bg-card/50 rounded-lg p-4 cyber-border">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="border-t border-primary/20 bg-card/30 p-4">
                <div className="max-w-4xl mx-auto">
                  <div className="flex space-x-4">
                    <div className="flex-1 relative">
                      <Textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about vulnerability triage, responsible disclosure, or security research..."
                        className="min-h-[60px] max-h-32 cyber-border bg-input/50 resize-none pr-12"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!input.trim() || isLoading}
                        size="icon"
                        className="absolute right-2 bottom-2 bg-gradient-primary text-cyber-dark hover:animate-glow-pulse"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-3">
                    <p className="text-xs text-muted-foreground text-center">
                      CyberCat is designed for ethical security research only. Always follow responsible disclosure practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Chat;
