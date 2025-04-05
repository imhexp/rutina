document.addEventListener('DOMContentLoaded', () => {
    const novedad = document.getElementById('novedad_accesodirecto');
    const useragent = navigator.userAgent || window.opera;
    const ios = /iPad|iPhone|iPod/.test(useragent) && !window.MSStream;
    const android = /android/i.test(useragent);
    let check_promptapp;
  
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      check_promptapp = event;
      if (novedad) novedad.style.display = 'block';
    });
  
    if (!check_promptapp && novedad) {
      novedad.style.display = 'none';
    }
  
    if (novedad) {
      novedad.addEventListener('click', () => {
        if (check_promptapp) {
          check_promptapp.prompt();
          check_promptapp.userChoice.then(() => {
            check_promptapp = null;
          });
        }
      });
    }
  
    if (ios) {
      if (window.navigator.standalone) {
        if (novedad) novedad.style.display = 'none';
      }
    } else if (android) {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        if (novedad) novedad.style.display = 'none';
      }
    } else {
      if (novedad) novedad.style.display = 'none';
    }
  });
  