  // Função para mostrar o pop-up
  function mostrarPopup() {
    var overlay = document.getElementById('overlay');
    overlay.classList.add('visible');
  }

  // Função para fechar o pop-up
  function fecharPopup() {
    var overlay = document.getElementById('overlay');
    overlay.classList.remove('visible');
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
