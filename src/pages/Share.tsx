import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link2, Copy, Share2, Check, QrCode, Sparkles, Users, MessageCircle, Heart } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/common/Button';

export const Share: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [copied, setCopied] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full absolute top-0 left-0 animate-ping opacity-20"></div>
        </div>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Share2 className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Partagez votre lien
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Votre lien unique est prêt ! ✨ Partagez-le et commencez à recevoir des messages anonymes fascinants.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Link Card with Enhanced Design */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Votre lien magique</h2>
                  <p className="text-gray-500">Prêt à être partagé avec le monde</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-indigo-50/50 rounded-2xl p-6 mb-8 border border-gray-200/50">
                <p className="text-lg md:text-xl font-mono text-gray-800 break-all leading-relaxed">
                  {shareUrl}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={handleCopy}
                  variant={copied ? 'secondary' : 'primary'}
                  className="group relative overflow-hidden transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <div className="flex items-center justify-center relative z-10">
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 mr-2 animate-bounce" />
                        Copié avec succès !
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Copier le lien
                      </>
                    )}
                  </div>
                </Button>
                
                <Button
                  onClick={handleShare}
                  variant="secondary"
                  className="group relative overflow-hidden transition-all duration-300 hover:scale-105 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border-indigo-200"
                  size="lg"
                >
                  <Share2 className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Partager maintenant
                </Button>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">∞</div>
                  <div className="text-sm text-gray-500">Messages possibles</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Anonymat garanti</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Toujours ouvert</div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Card Enhanced */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Aperçu pour vos visiteurs</h3>
                <p className="text-gray-500">Voilà ce qu'ils verront en premier</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl p-8 border border-indigo-200/50 shadow-inner">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Envoyer un message à @{user?.username}
                </h4>
                <p className="text-gray-600 text-lg mb-4">
                  Votre message sera totalement anonyme 🤫
                </p>
                <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Sécurisé & Privé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Tips Card */}
          <div className="bg-gradient-to-br from-white/80 to-indigo-50/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Maximisez vos messages
              </h3>
              <p className="text-gray-600 text-lg">Astuces d'experts pour recevoir plus de messages fascinants</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Stories Instagram</h4>
                    <p className="text-gray-600">Ajoutez votre lien en story avec un appel à l'action accrocheur comme "Dis-moi ce que tu penses vraiment !"</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Bio des réseaux</h4>
                    <p className="text-gray-600">Intégrez le lien dans toutes vos biographies avec une phrase mystérieuse</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Partage direct</h4>
                    <p className="text-gray-600">Envoyez le lien à vos amis proches en leur disant "J'ai quelque chose de cool à vous montrer"</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-lg font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Posts réguliers</h4>
                    <p className="text-gray-600">Rappelez régulièrement l'existence du lien avec des posts créatifs et engageants</p>
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