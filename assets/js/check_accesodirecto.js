document.addEventListener('DOMContentLoaded', () => {
  const novedad = document.getElementById('novedad_accesodirecto');
  const useragent = navigator.userAgent || window.opera;
  const ios = /iPad|iPhone|iPod/.test(useragent) && !window.MSStream;
  const android = /android/i.test(useragent);

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
