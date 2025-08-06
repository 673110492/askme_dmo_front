import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from '../common/Button';
import { TextArea } from '../common/TextArea';
import { getUserByCode, sendMessage } from '../../services/api';
import { validateMessage, sanitizeMessage } from '../../services/validation';
import { useRateLimit } from '../../hooks/useRateLimit';
import { User } from '../../types/user';

export const SendMessage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState<User | null>(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { isLimited, remainingTime, checkRateLimit, recordMessage } = useRateLimit();

  useEffect(() => {
    const loadRecipient = async () => {
      if (!code) {
        navigate('/');
        return;
      }

      try {
        const response = await getUserByCode(code);
        if (response.success && response.user) {
          setRecipient(response.user);
        } else {
          setError('Utilisateur non trouvé');
        }
      } catch (err) {
        setError('Erreur lors du chargement');
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipient();
  }, [code, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!checkRateLimit()) {
      return;
    }

    const validation = validateMessage(message);
    if (!validation.isValid) {
      setError(validation.error!);
      return;
    }

    setIsSending(true);

    try {
      const sanitizedMessage = sanitizeMessage(message);
      const response = await sendMessage({
        content: sanitizedMessage,
        recipientCode: code!
      });

      if (response.success) {
        recordMessage();
        setSuccess(true);
        setMessage('');
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(response.error || 'Erreur lors de l\'envoi');
      }
    } catch (err) {
      setError('Erreur réseau. Veuillez réessayer.');
    } finally {
      setIsSending(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error && !recipient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Utilisateur non trouvé</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Envoyer un message à @{recipient?.username}
            </h1>
            <p className="text-gray-600">
              Votre message sera totalement anonyme
            </p>
          </div>

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-center font-medium">
                ✨ Message envoyé avec succès !
              </p>
            </div>
          )}

          {isLimited && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center space-x-2 text-orange-800">
                <Clock className="w-5 h-5" />
                <p className="font-medium">
                  Limite atteinte. Attendez {remainingTime}s avant le prochain message.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextArea
              label="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez votre message anonyme ici..."
              rows={6}
              maxLength={500}
              showCount
              error={error}
              disabled={isLimited}
            />

            <Button
              type="submit"
              isLoading={isSending}
              disabled={isLimited || !message.trim()}
              className="w-full"
              size="lg"
            >
              {isSending ? 'Envoi en cours...' : 'Envoyer anonymement'}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
              💡 Conseils
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Votre message est complètement anonyme</li>
              <li>• Soyez respectueux et bienveillant</li>
              <li>• Maximum 3 messages par minute</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};