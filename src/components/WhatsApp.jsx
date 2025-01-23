import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="123456" // Número de WhatsApp sin el '+'
      accountName="Cactus Tecnología" // Nombre del negocio
      avatar="/Favicon2.png" // Ruta al archivo en la carpeta public
      chatMessage="¡Hola! ¿En qué podemos ayudarte?" // Mensaje inicial en el chat
      statusMessage="En línea" // Mensaje de estado debajo del nombre
      allowClickAway={true} // Permite cerrar el chat al hacer clic fuera
      notification={true} // Muestra notificaciones de mensajes no leídos
      notificationSound={true} // Habilita el sonido para las notificaciones
      placeholder="Escribe tu mensaje aquí..." // Placeholder del input
      className="floating-whatsapp-button"
    />
  );
};
