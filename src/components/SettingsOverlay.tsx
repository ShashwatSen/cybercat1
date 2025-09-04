import { useState } from 'react';
import { 
  X, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Bell, 
  BellOff,
  Monitor,
  Palette,
  Shield,
  Key
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SettingsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsOverlay({ isOpen, onClose }: SettingsOverlayProps) {
  const [settings, setSettings] = useState({
    darkMode: true,
    soundEffects: true,
    notifications: true,
    autoSave: true,
    animations: true,
    aiModel: 'gpt-4',
    codeCompletion: true,
    syntaxHighlighting: true,
  });

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingItems = [
    {
      category: 'Appearance',
      icon: Palette,
      items: [
        {
          key: 'darkMode' as const,
          label: 'Dark Mode',
          description: 'Use dark theme across the application',
          icon: settings.darkMode ? Moon : Sun,
        },
        {
          key: 'animations' as const,
          label: 'Animations',
          description: 'Enable UI animations and transitions',
          icon: Monitor,
        },
      ]
    },
    {
      category: 'Audio & Notifications',
      icon: Bell,
      items: [
        {
          key: 'soundEffects' as const,
          label: 'Sound Effects',
          description: 'Play sounds for UI interactions',
          icon: settings.soundEffects ? Volume2 : VolumeX,
        },
        {
          key: 'notifications' as const,
          label: 'Notifications',
          description: 'Receive system notifications',
          icon: settings.notifications ? Bell : BellOff,
        },
      ]
    },
    {
      category: 'Development & Security',
      icon: Shield,
      items: [
        {
          key: 'autoSave' as const,
          label: 'Auto Save',
          description: 'Automatically save your work',
          icon: Shield,
        },
        {
          key: 'codeCompletion' as const,
          label: 'Code Completion',
          description: 'Enable intelligent code suggestions',
          icon: Key,
        },
        {
          key: 'syntaxHighlighting' as const,
          label: 'Syntax Highlighting',
          description: 'Highlight code syntax in editor',
          icon: Monitor,
        },
      ]
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden p-0 bg-background/98 backdrop-blur-md border border-border/50 shadow-2xl">
        <DialogHeader className="px-6 py-4 border-b border-border/30 bg-gradient-to-r from-primary/5 to-primary/10">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Settings & Preferences
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 max-h-[calc(85vh-80px)]">
          <div className="p-6 space-y-8">
            {settingItems.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="space-y-4">
                  <div className="flex items-center space-x-3 pb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/25">
                      <CategoryIcon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid gap-3">
                    {category.items.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.key}
                          className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-muted/40 to-muted/20 border border-border/40 hover:from-muted/60 hover:to-muted/40 hover:border-border/60 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:from-primary/15 group-hover:to-primary/10 transition-all duration-300">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                                {item.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {item.description}
                              </div>
                            </div>
                          </div>
                          <Switch
                            checked={settings[item.key]}
                            onCheckedChange={() => handleSettingChange(item.key)}
                            className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted-foreground/20"
                          />
                        </div>
                      );
                    })}
                  </div>
                  
                  {categoryIndex < settingItems.length - 1 && (
                    <Separator className="my-6 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                  )}
                </div>
              );
            })}

            <div className="flex items-center justify-between pt-6 border-t border-border/30 bg-gradient-to-r from-muted/20 to-transparent rounded-lg p-4 -mx-2">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <div className="text-sm text-muted-foreground">
                  Settings are saved automatically and synced across devices
                </div>
              </div>
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Done
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}