import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link2, Copy, Share2, Check, QrCode } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/common/Button';

export const Share: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [copied, setCopied] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const shareUrl = `${window.location.origin}/u/${user?.linkCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Envoyez-moi un message anonyme !',
          text: `Envoyez-moi un message anonyme via AskMe`,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Erreur lors du partage:', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Share2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Partagez votre lien AskMe
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Votre lien unique est prêt ! Partagez-le pour commencer à recevoir des messages anonymes.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Link Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <Link2 className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Votre lien unique</h2>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-lg font-mono text-gray-800 break-all">
                {shareUrl}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button
                onClick={handleCopy}
                variant={copied ? 'secondary' : 'primary'}
                className="flex-1"
                size="lg"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copier le lien
                  </>
                )}
              </Button>
              
              <Button
                onClick={handleShare}
                variant="secondary"
                className="flex-1"
                size="lg"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Partager
              </Button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Aperçu pour vos visiteurs
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Envoyer un message à @{user?.username}
                </h4>
                <p className="text-gray-600 text-sm">
                  Votre message sera totalement anonyme
                </p>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              💡 Conseils pour plus de messages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stories Instagram</h4>
                    <p className="text-gray-600 text-sm">Ajoutez votre lien en story avec un appel à l'action</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bio des réseaux</h4>
                    <p className="text-gray-600 text-sm">Intégrez le lien dans vos biographies</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Partage direct</h4>
                    <p className="text-gray-600 text-sm">Envoyez le lien à vos amis proches</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Posts réguliers</h4>
                    <p className="text-gray-600 text-sm">Rappelez régulièrement l'existence du lien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};