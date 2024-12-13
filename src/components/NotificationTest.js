import React from 'react';
import { showToast } from 'jrt-notifications/src/toast';
import { showModal } from 'jrt-notifications/src/modal';
// import '../../node_modules/jrt-notifications/src/styles/toast.css';
// import '../../node_modules/jrt-notifications/src/styles/modal.css';

const NotificationTest = () => {
  // const handleShowToast = () => {
  //   showToast({
  //     message: '¡Este es un mensaje de Toast!',
  //     duration: 3000, // Duración en milisegundos
  //     position: 'top-right', // Posición: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
  //     background: '#333',
  //     color: '#fff',
  //   });
  // };
  const handleShowSuccessToast = () => {
    showToast({
      message: '¡Operación exitosa!',
      duration: 3000,
      position: 'top-right',
      type: 'success', // success, error, warning
    });
  };
  
  const handleShowErrorToast = () => {
    showToast({
      message: '¡Ocurrió un error!',
      duration: 3000,
      position: 'bottom-left',
      type: 'error', // success, error, warning
    });
  };
  
  const handleShowToast = () => {
    showToast({
      message: 'Este es un mensaje de alerta.',
      duration: 3000, // Duración en milisegundos
      position: 'top-right', // Posición del toast
      icon: 'alert', // Tipo de ícono: 'alert', 'errorFino', etc.
      iconColor: '#f39c12', // Color del ícono
      background: '#fff', // (Opcional) Color de fondo
      color: '#333', // (Opcional) Color del texto
      type: 'default', // Tipo (opcional): 'default', 'success', 'error', etc.
      progressBarColor: '#f39c12'
    });
  };
  

  const handleShowModal = () => {
    // showModal({
    //   title: 'Error',
    //   message: 'Ocurrió un problema inesperado.',
    //   icon: 'errorFino',
    //   confirmText: 'Reintentar',
    //   cancelText: 'Cancelar',
    //   onConfirm: () => console.log('Reintentando...'),
    //   onCancel: () => console.log('Cancelado')
    // });    
    showModal({
      title: 'Error',
      message: 'Ocurrió un problema inesperado.',
      icon: 'alert',  // Icono de alerta
      iconColor: 'blue', // Color del icono (rojo)
      confirmText: 'Reintentar',
      cancelText: 'Cancelar',
      onConfirm: () => console.log('Reintentando...'),
      onCancel: () => console.log('Cancelado'),
    });    
    
  };

  return (
    <div>
      <h1>Prueba de Notificaciones</h1>
      <button onClick={handleShowToast}>Mostrar Toast</button>
      <button onClick={handleShowModal}>Mostrar Modal</button>
    </div>
  );
};

export default NotificationTest;
