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
  const handleShowToast = () => {
    showToast({
      message: 'El mensaje ha sido enviado con exito',
    });
  };

  const handleShowSuccessToast = () => {
    showToast({
      message: 'Este es un mensaje de éxito.',
      duration: 3000, // Duración en milisegundos
      position: 'top-right', // Posición del toast
      icon: 'successFino', // Tipo de ícono: 'alert', 'errorFino', etc.
      iconColor: 'green', // Color del ícono
      background: '#fff', // (Opcional) Color de fondo
      color: '#333', // (Opcional) Color del texto
      type: 'default', // Tipo (opcional): 'default', 'success', 'error', etc.
      progressBarColor: 'green'
    });
  };
  
  const handleShowErrorToast = () => {
    showToast({
      message: 'Este es un mensaje de error.',
      duration: 3000, // Duración en milisegundos
      position: 'top-right', // Posición del toast
      icon: 'errorFino', // Tipo de ícono: 'alert', 'errorFino', etc.
      iconColor: 'red', // Color del ícono
      background: '#fff', // (Opcional) Color de fondo
      color: '#333', // (Opcional) Color del texto
      type: 'default', // Tipo (opcional): 'default', 'success', 'error', etc.
      progressBarColor: 'red'
    });
  };
  
  const handleShowAlertToast = () => {
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
  

  const handleShowModalBasico = () => {
    showModal({
      title: 'Atención',
      message: 'Esto es solo un Modal Básico',
      icon: 'alert',  // Icono de alerta
      confirmText: 'Cerrar',
      onConfirm: () => console.log('Reintentando...'),
    });    
  };

  const handleShowModalBasicoTiempo = () => {
    showModal({
      title: 'Atención',
      message: 'Esto es un Modal con Tiempo',
      icon: 'alert',  // Icono de alerta
      time: 4000,  // Icono de alerta
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
      icon: 'errorFino',  // Icono de alerta
      iconColor: 'blue', // Color del icono (rojo)
      confirmText: 'Reintentar',
      cancelText: 'Cancelar',
      onConfirm: () => console.log('Reintentando...'),
      onCancel: () => console.log('Cancelado'),
    });    
    
  };

  const handleShowModalTest = () => {
    showModal({
      title: 'Testeo',
      message: 'Esto es solo un Testeo',
      icon: 'alert',  // Icono de alerta
      //iconColor: '#f7e86b', // Color del icono (rojo)
      confirmText: 'Sí, vale',
      cancelText: 'No, Cancelar',
      onConfirm: () => console.log('Reintentando...'),
      onCancel: () => console.log('Cancelado'),
    });    
  };

  return (
    <div>
      <h1>Prueba Toast</h1>
      <button onClick={handleShowToast}>Mostrar Toast</button>
      <button onClick={handleShowAlertToast}>Mostrar Alerta</button>
      <button onClick={handleShowSuccessToast}>Mostrar Exitoso</button>
      <button onClick={handleShowErrorToast}>Mostrar Error</button>
      <h1>Prueba Modal</h1>
      <button onClick={handleShowModalBasico}>Mostrar Modal Básico</button>
      <button onClick={handleShowModalBasicoTiempo}>Mostrar Modal con Tiempo</button>
      <button onClick={handleShowModal}>Mostrar Modal</button>
      <button onClick={handleShowModalTest}>Mostrar Modal Testeo</button>
    </div>
  );
};

export default NotificationTest;
