import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos predeterminados de React-Toastify

const NotificationToastify = () => {
  // Función para mostrar un toast básico
  const showToast = () => {
    toast('¡Este es un mensaje de Toast!');
  };

  // Función para mostrar un toast de éxito
  const showSuccessToast = () => {
    toast.success('¡Operación exitosa!', {
      autoClose: 5000, // Duración del toast
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Función para mostrar un toast de error
  const showErrorToast = () => {
    toast.error('¡Algo salió mal!', {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Función para mostrar un toast de advertencia
  const showWarningToast = () => {
    toast.warn('¡Cuidado con esta acción!', {
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Función para mostrar un toast de información
  const showInfoToast = () => {
    toast.info('Este es un mensaje informativo', {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Función para mostrar un toast con icono personalizado
  const showCustomIconToast = () => {
    toast('¡Este es un toast con un ícono personalizado!', {
      icon: '🎉', // Puedes usar emojis o componentes como íconos
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Función para mostrar un toast con contenido HTML
  const showHTMLToast = () => {
    toast(<div><strong>Mensaje con HTML:</strong><br />Este es un <span style={{ color: 'red' }}>mensaje personalizado</span>.</div>, {
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h1>Notification Toastify</h1>
      <button onClick={showToast}>Mostrar Toast Básico</button>
      <button onClick={showSuccessToast}>Mostrar Toast de Éxito</button>
      <button onClick={showErrorToast}>Mostrar Toast de Error</button>
      <button onClick={showWarningToast}>Mostrar Toast de Advertencia</button>
      <button onClick={showInfoToast}>Mostrar Toast de Información</button>
      <button onClick={showCustomIconToast}>Mostrar Toast con Icono</button>
      <button onClick={showHTMLToast}>Mostrar Toast con HTML</button>

      {/* El contenedor donde se mostrarán los toasts */}
      <ToastContainer
        autoClose={5000}  // Duración global
        hideProgressBar={false}  // Si mostrar la barra de progreso
        newestOnTop={false}  // Si el nuevo toast debe estar al frente
        closeOnClick={true}  // Permite cerrar el toast haciendo clic
        pauseOnHover={true}  // Pausa el timer cuando el ratón pasa por encima
        draggable={true}  // Permite arrastrar el toast
        progress={undefined}  // Progreso de la barra
      />
    </div>
  );
};

export default NotificationToastify;
