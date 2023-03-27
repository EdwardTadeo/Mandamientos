function mostrar() {
    var x = document.getElementById('contenido');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      console.log("patata");
      setTimeout(function() {
        x.style.display = 'none';
      }, 10000); // 10 segundos
    } else {
      x.style.display = 'none';
    }
  }