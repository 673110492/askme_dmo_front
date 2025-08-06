import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { BarChart3, MessageCircle, TrendingUp, Sparkles } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useStore } from '../store/useStore';
import { getMyMessages } from '../services/api';
import { MessageList } from '../components/messaging/MessageList';

export const Dashboard: React.FC = () => {
  const { isAuthenticated, user, isLoading: authLoading } = useAuth();
  const {
    messages,
    unreadCount,
    isLoading,
    setMessages,
    setUnreadCount,
    setLoading,
    setError
  } = useStore();

  useEffect(() => {
    const loadMessages = async () => {
      if (!user) return;

      setLoading(true);
      try {
        const response = await getMyMessages();
        if (response.success) {
          setMessages(response.messages);
          setUnreadCount(response.unreadCount);
        } else {
          setError('Erreur lors du chargement des messages');
        }
      } catch (err) {
        setError('Erreur réseau');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadMessages();
    }
  }, [user, setMessages, setUnreadCount, setLoading, setError]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const totalMessages = messages.length;
  const archivedCount = messages.filter(m => m.isArchived).length;
  const activeCount = totalMessages - archivedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                    Bonjour @{user?.username} 👋
                  </h1>
                </div>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                  Gérez vos messages anonymes depuis votre tableau de bord personnalisé
                </p>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Nouveau message
                </button>
                <button className="px-4 py-2 bg-white/80 text-gray-700 rounded-lg text-sm font-medium hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200">
                  Paramètres
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Unread Messages Card */}
          <div className="group relative overflow-hidden backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                {unreadCount > 0 && (
                  <div className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                    Nouveau
                  </div>
                )}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Messages non lus</p>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                {unreadCount}
              </p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-500"
                  style={{ width: `${totalMessages > 0 ? (unreadCount / totalMessages) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Active Messages Card */}
          <div className="group relative overflow-hidden backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Messages actifs</p>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                {activeCount}
              </p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 h-1 rounded-full transition-all duration-500"
                  style={{ width: `${totalMessages > 0 ? (activeCount / totalMessages) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Total Messages Card */}
          <div className="group relative overflow-hidden backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total reçus</p>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent">
                {totalMessages}
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                <span>Archivés: {archivedCount}</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span>Actifs: {activeCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="backdrop-blur-sm bg-white/90 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-200/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  Vos Messages
                </h2>
                <p className="text-gray-600 text-sm">
                  Gérez et organisez tous vos messages reçus
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                  Tous
                </button>
                <button className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  Non lus
                </button>
                <button className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  Archivés
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-8">
            <MessageList messages={messages} isLoading={isLoading} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Dashboard sécurisé • Messages chiffrés • Anonymat garanti
          </p>
        </div>
      </div>
    </div>
  );
};