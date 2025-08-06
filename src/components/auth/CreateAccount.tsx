import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { useAuth } from '../../hooks/useAuth';
import { createUser } from '../../services/api';
import { validateUsername } from '../../services/validation';

export const CreateAccount: React.FC = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validation = validateUsername(username);
    if (!validation.isValid) {
      setError(validation.error!);
      return;
    }

    setIsLoading(true);

    try {
      const response = await createUser({ username });
      
      if (response.success && response.user) {
        login(response.user);
        navigate('/share');
      } else {
        setError(response.error || 'Erreur lors de la création du compte');
      }
    } catch (err) {
      setError('Erreur réseau. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rejoindre AskMe
            </h1>
            <p className="text-gray-600">
              Créez votre compte et commencez à recevoir des messages anonymes
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Pseudo"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Votre pseudo unique"
              error={error}
              hint="3 à 20 caractères, lettres, chiffres, _ et - uniquement"
              autoFocus
            />

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? 'Création en cours...' : 'Créer mon compte'}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Qu'est-ce que AskMe ?
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Recevez des messages anonymes via votre lien unique</li>
              <li>• Partagez votre lien sur vos réseaux sociaux</li>
              <li>• Gérez vos messages depuis votre tableau de bord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};