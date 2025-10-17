import React, { useState, useEffect } from 'react';
import type { Comment } from '../types';

const COMMENTS_STORAGE_KEY = 'de-todo-portalatin-comments';

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const savedComments = window.localStorage.getItem(COMMENTS_STORAGE_KEY);
      if (savedComments) {
        return JSON.parse(savedComments);
      }
    } catch (error) {
      console.error("Error reading comments from localStorage", error);
    }
    // Default comment if localStorage is empty or fails
    return [
      { id: 1, name: 'Carlos R.', message: 'Excelente servicio de lavado de auto. ¡Muy recomendado!', timestamp: 'hace 2 días' }
    ];
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
    } catch (error) {
      console.error("Error saving comments to localStorage", error);
    }
  }, [comments]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
        setError('El nombre y el mensaje son obligatorios.');
        return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      timestamp: 'justo ahora'
    };
    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    setError('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">Comentarios y Notas</h3>
      <p className="text-slate-500 mb-6">Deje sus comentarios sobre nuestro servicio. Su opinión es importante.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Mensaje</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Escribe tu comentario aquí..."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          ></textarea>
        </div>
         {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enviar Comentario
        </button>
      </form>
      <div className="mt-8 space-y-6 h-64 overflow-y-auto pr-2">
        {comments.map(comment => (
          <div key={comment.id} className="flex space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
              {comment.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <p className="font-bold text-slate-800">{comment.name}</p>
                <p className="text-xs text-slate-400">{comment.timestamp}</p>
              </div>
              <p className="text-slate-600">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;