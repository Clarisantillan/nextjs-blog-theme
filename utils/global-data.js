import React from 'react';
export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Clara Santillan';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Bienvenidos a mi portfolio';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Todos los derechos reservados.';
  const WhatsAppLink = () => {
  const phoneNumber = '542243414876'; 
  const message = 'Hola';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      Enviar mensaje por WhatsApp
    </a>
  );
};
  return {
    name,
    blogTitle,
    footerText,
    WhatsAppLink,
    
  };
};
