import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { 
  Folder, 
  FolderOpen, 
  File, 
  FileText, 
  FileCode, 
  Plus, 
  FolderPlus,
  MoreHorizontal,
  Trash2,
  Edit3
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  content?: string;
  language?: string;
  children?: FileItem[];
  expanded?: boolean;
}

interface FileExplorerProps {
  files: FileItem[];
  selectedFile: string | null;
  onFileSelect: (file: FileItem) => void;
  onFileCreate: (name: string, type: 'file' | 'folder', parentPath?: string) => void;
  onFileRename: (id: string, newName: string) => void;
  onFileDelete: (id: string) => void;
  onFolderToggle: (id: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({
  files,
  selectedFile,
  onFileSelect,
  onFileCreate,
  onFileRename,
  onFileDelete,
  onFolderToggle,
}) => {
  const [creatingItem, setCreatingItem] = useState<{ type: 'file' | 'folder'; parentPath?: string } | null>(null);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [newItemName, setNewItemName] = useState('');

  const getFileIcon = (file: FileItem) => {
    if (file.type === 'folder') {
      return file.expanded ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />;
    }
    
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
        return <FileCode className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const handleCreateItem = () => {
    if (newItemName.trim() && creatingItem) {
      onFileCreate(newItemName.trim(), creatingItem.type, creatingItem.parentPath);
      setCreatingItem(null);
      setNewItemName('');
    }
  };

  const handleRenameItem = () => {
    if (newItemName.trim() && editingItem) {
      onFileRename(editingItem, newItemName.trim());
      setEditingItem(null);
      setNewItemName('');
    }
  };

  const renderFileTree = (items: FileItem[], depth = 0) => {
    return items.map((item) => (
      <div key={item.id}>
        <div
          className={`flex items-center space-x-2 py-1 px-2 hover:bg-muted/50 cursor-pointer group ${
            selectedFile === item.id ? 'bg-primary/10 text-primary' : ''
          }`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => {
            if (item.type === 'folder') {
              onFolderToggle(item.id);
            } else {
              onFileSelect(item);
            }
          }}
        >
          {getFileIcon(item)}
          {editingItem === item.id ? (
            <Input
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleRenameItem();
                if (e.key === 'Escape') {
                  setEditingItem(null);
                  setNewItemName('');
                }
              }}
              onBlur={handleRenameItem}
              className="h-6 text-xs"
              autoFocus
            />
          ) : (
            <span className="text-sm flex-1 truncate">{item.name}</span>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"
              >
                <MoreHorizontal className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {item.type === 'folder' && (
                <>
                  <DropdownMenuItem onClick={() => setCreatingItem({ type: 'file', parentPath: item.path })}>
                    <Plus className="w-4 h-4 mr-2" />
                    New File
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCreatingItem({ type: 'folder', parentPath: item.path })}>
                    <FolderPlus className="w-4 h-4 mr-2" />
                    New Folder
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuItem onClick={() => {
                setEditingItem(item.id);
                setNewItemName(item.name);
              }}>
                <Edit3 className="w-4 h-4 mr-2" />
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onFileDelete(item.id)}
                className="text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {item.type === 'folder' && item.expanded && item.children && (
          <div>
            {renderFileTree(item.children, depth + 1)}
          </div>
        )}
        
        {creatingItem && creatingItem.parentPath === item.path && (
          <div
            className="flex items-center space-x-2 py-1 px-2"
            style={{ paddingLeft: `${(depth + 1) * 16 + 8}px` }}
          >
            {creatingItem.type === 'folder' ? <Folder className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            <Input
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateItem();
                if (e.key === 'Escape') {
                  setCreatingItem(null);
                  setNewItemName('');
                }
              }}
              onBlur={handleCreateItem}
              placeholder={`New ${creatingItem.type}`}
              className="h-6 text-xs"
              autoFocus
            />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="h-full flex flex-col bg-muted/10 border-r border-primary/20">
      {/* Header */}
      <div className="p-3 border-b border-primary/20 bg-background/50">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">Explorer</span>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setCreatingItem({ type: 'file' })}
            >
              <Plus className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setCreatingItem({ type: 'folder' })}
            >
              <FolderPlus className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* File Tree */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {renderFileTree(files)}
          
          {creatingItem && !creatingItem.parentPath && (
            <div className="flex items-center space-x-2 py-1 px-2">
              {creatingItem.type === 'folder' ? <Folder className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <Input
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCreateItem();
                  if (e.key === 'Escape') {
                    setCreatingItem(null);
                    setNewItemName('');
                  }
                }}
                onBlur={handleCreateItem}
                placeholder={`New ${creatingItem.type}`}
                className="h-6 text-xs"
                autoFocus
              />
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FileExplorer;