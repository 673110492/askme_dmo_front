import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-1 text-gray-600">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>pour des conversations anonymes</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            AskMe - Plateforme de messagerie anonyme
          </p>
        </div>
      </div>
    </footer>
  );
};