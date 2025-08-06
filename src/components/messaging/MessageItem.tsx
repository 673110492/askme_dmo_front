import React, { useState } from 'react';
import { Eye, Archive, Trash2, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { Message } from '../../types/message';
import { markMessageAsRead, archiveMessage, deleteMessage } from '../../services/api';
import { useStore } from '../../store/useStore';

interface MessageItemProps {
  message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { markMessageAsRead: markAsRead, removeMessage } = useStore();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `Il y a ${diffInMinutes} min`;
    } else if (diffInHours < 24) {
      return `Il y a ${Math.floor(diffInHours)} h`;
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  const handleMarkAsRead = async () => {
    if (message.isRead) return;
    
    setIsLoading(true);
    try {
      await markMessageAsRead(message.id);
      markAsRead(message.id);
    } catch (err) {
      console.error('Erreur lors du marquage comme lu:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleArchive = async () => {
    setIsLoading(true);
    try {
      await archiveMessage(message.id);
      removeMessage(message.id);
    } catch (err) {
      console.error('Erreur lors de l\'archivage:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce message définitivement ?')) {
      return;
    }

    setIsLoading(true);
    try {
      await deleteMessage(message.id);
      removeMessage(message.id);
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && !message.isRead) {
      handleMarkAsRead();
    }
  };

  if (message.isArchived) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg border transition-all duration-200 ${
      !message.isRead ? 'border-blue-200 shadow-md' : 'border-gray-200 shadow-sm'
    }`}>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              !message.isRead ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <MessageCircle className={`w-5 h-5 ${
                !message.isRead ? 'text-blue-600' : 'text-gray-600'
              }`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-gray-900">
                  Message anonyme
                </span>
                {!message.isRead && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Nouveau
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4" />
                <span>{formatDate(message.sentAt)}</span>
              </div>

              <div className={`text-gray-800 ${
                isExpanded ? '' : 'line-clamp-2'
              }`}>
                {message.content}
              </div>

              {message.content.length > 100 && (
                <button
                  onClick={handleToggleExpand}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
                >
                  {isExpanded ? 'Voir moins' : 'Voir plus'}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 mt-4 pt-4 border-t border-gray-100">
          {!message.isRead && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMarkAsRead}
              isLoading={isLoading}
              className="text-blue-600 hover:text-blue-800"
            >
              <Eye className="w-4 h-4 mr-1" />
              Marquer comme lu
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleArchive}
            isLoading={isLoading}
            className="text-gray-600 hover:text-gray-800"
          >
            <Archive className="w-4 h-4 mr-1" />
            Archiver
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            isLoading={isLoading}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Supprimer
          </Button>
        </div>
      </div>
    </div>
  );
};