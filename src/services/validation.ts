export const validateUsername = (username: string): { isValid: boolean; error?: string } => {
  if (!username.trim()) {
    return { isValid: false, error: 'Le pseudo est requis' };
  }
  
  if (username.length < 3) {
    return { isValid: false, error: 'Le pseudo doit contenir au moins 3 caractères' };
  }
  
  if (username.length > 20) {
    return { isValid: false, error: 'Le pseudo ne peut pas dépasser 20 caractères' };
  }
  
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return { isValid: false, error: 'Le pseudo ne peut contenir que des lettres, chiffres, _ et -' };
  }
  
  return { isValid: true };
};

export const validateMessage = (content: string): { isValid: boolean; error?: string } => {
  if (!content.trim()) {
    return { isValid: false, error: 'Le message ne peut pas être vide' };
  }
  
  if (content.length > 500) {
    return { isValid: false, error: 'Le message ne peut pas dépasser 500 caractères' };
  }
  
  return { isValid: true };
};

export const sanitizeMessage = (content: string): string => {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const generateLinkCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};