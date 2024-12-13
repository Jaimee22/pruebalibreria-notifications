import React from 'react';
import Swal from 'sweetalert2';  // Importamos la librería SweetAlert2

const NotificationSweetAlert = () => {
  // Función para mostrar alerta básica
  const showAlert = () => {
    Swal.fire({
      title: 'Alerta',
      text: 'Este es un mensaje de alerta',
      icon: 'info',  // icono puede ser 'success', 'error', 'warning', 'info', 'question'
      confirmButtonText: 'Aceptar',
    });
  };

  // Función para mostrar una alerta de confirmación
  const showConfirmAlert = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado', 'El archivo ha sido eliminado', 'success');
      }
    });
  };

  // Función para mostrar una alerta con campo de entrada (Input)
  const showInputAlert = () => {
    Swal.fire({
      title: '¿Cuál es tu nombre?',
      input: 'text',
      inputLabel: 'Nombre',
      inputPlaceholder: 'Escribe tu nombre',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Hola, ${result.value}!`);
      }
    });
  };

  // Función para mostrar una alerta con un "loading" animado
  const showLoadingAlert = () => {
    Swal.fire({
      title: 'Cargando...',
      text: 'Por favor espera un momento',
      imageUrl: 'https://via.placeholder.com/150', // Opcional, puedes poner una imagen
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Imagen de carga',
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Simulamos una operación que tarda 2 segundos y luego cerramos la alerta
    setTimeout(() => {
      Swal.close();
      Swal.fire('¡Listo!', 'La operación ha terminado', 'success');
    }, 2000);
  };

  // Función para mostrar una alerta con temporizador automático
  const showAutoCloseAlert = () => {
    Swal.fire({
      title: 'Alerta temporal',
      text: 'Este mensaje se cerrará automáticamente',
      icon: 'info',
      timer: 3000, // La alerta se cerrará automáticamente después de 3 segundos
      showConfirmButton: false,
    });
  };

  // Función para mostrar alerta con HTML y contenido dinámico
  const showHTMLAlert = () => {
    Swal.fire({
      title: 'Bienvenido',
      html: '<p><b>Este es un mensaje <span style="color: red;">HTML</span></b></p>',
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  };

  // Función para mostrar una alerta personalizada (con imagen y color de fondo)
  const showCustomAlert = () => {
    Swal.fire({
      title: 'Alerta personalizada',
      text: 'Esto es una alerta con una imagen y un color de fondo',
      icon: 'info',
      background: '#f0f0f0', // Color de fondo
      imageUrl: 'https://via.placeholder.com/150', // Imagen personalizada
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Imagen',
      confirmButtonText: 'Cerrar',
    });
  };

  return (
    <div>
      <h1>Notification SweetAlert</h1>
      <button onClick={showAlert}>Mostrar Alerta Básica</button>
      <button onClick={showConfirmAlert}>Mostrar Confirmación</button>
      <button onClick={showInputAlert}>Mostrar Input</button>
      <button onClick={showLoadingAlert}>Mostrar Cargando</button>
      <button onClick={showAutoCloseAlert}>Mostrar Autocierre</button>
      <button onClick={showHTMLAlert}>Mostrar HTML</button>
      <button onClick={showCustomAlert}>Mostrar Personalizada</button>
    </div>
  );
};

export default NotificationSweetAlert;
