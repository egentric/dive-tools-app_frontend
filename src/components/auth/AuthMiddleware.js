import React from 'react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthMiddleware = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      // Vérifiez ici si le token a expiré ou si l'utilisateur est connecté
      const isLoggedIn = ... // Mettez votre logique de vérification ici

      if (!isLoggedIn) {
        navigate('/login'); // Redirige vers la page de connexion
      }
    };

    checkAuthentication();
  }, [navigate]);

  return null; // Ce composant ne rend rien, il agit uniquement comme un middleware
};

export default AuthMiddleware;