import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, FileText, FileCode } from 'lucide-react';
import { FileItem } from './FileExplorer';

interface FileTabsProps {
  openFiles: FileItem[];
  activeFile: string | null;
  onTabSelect: (fileId: string) => void;
  onTabClose: (fileId: string) => void;
}

const FileTabs: React.FC<FileTabsProps> = ({
  openFiles,
  activeFile,
  onTabSelect,
  onTabClose,
}) => {
  const getFileIcon = (file: FileItem) => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
      case 'py':
      case 'cpp':
      case 'java':
      case 'go':
        return <FileCode className="w-3 h-3" />;
      default:
        return <FileText className="w-3 h-3" />;
    }
  };

  if (openFiles.length === 0) {
    return null;
  }

  return (
    <div className="border-b border-primary/20 bg-background/80">
      <ScrollArea className="w-full">
        <div className="flex">
          {openFiles.map((file) => (
            <div
              key={file.id}
              className={`flex items-center space-x-2 px-3 py-2 border-r border-primary/20 cursor-pointer group min-w-0 ${
                activeFile === file.id
                  ? 'bg-background text-primary border-b-2 border-b-primary'
                  : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => onTabSelect(file.id)}
            >
              {getFileIcon(file)}
              <span className="text-sm truncate max-w-[120px]" title={file.name}>
                {file.name}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 opacity-0 group-hover:opacity-100 hover:bg-destructive/20 hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(file.id);
                }}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FileTabs;