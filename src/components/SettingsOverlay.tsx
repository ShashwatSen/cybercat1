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
  });

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingItems = [
    {
      category: 'Appearance',
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
          icon: Palette,
        },
      ]
    },
    {
      category: 'Audio & Notifications',
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
      category: 'Editor & Tools',
      items: [
        {
          key: 'autoSave' as const,
          label: 'Auto Save',
          description: 'Automatically save your work',
          icon: Shield,
        },
      ]
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto bg-background/95 backdrop-blur-sm border border-border/50">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-2xl font-bold text-primary text-glow">
            Settings
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {settingItems.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
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
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>
                  );
                })}
              </div>
              
              {category.category !== 'Editor & Tools' && (
                <Separator className="bg-border/30" />
              )}
            </div>
          ))}

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-muted-foreground">
              Settings are saved automatically
            </div>
            <Button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}