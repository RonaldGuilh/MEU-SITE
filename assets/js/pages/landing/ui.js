function toggleMenu(){
  const btnMobile = document.querySelector(".hamburguer");
  const menuMobile = document.querySelector(".mobile-menu");

  btnMobile.addEventListener('click', () =>{
    btnMobile.classList.toggle('active');
    menuMobile.classList.toggle('active')
  })
}

toggleMenu();

function menuServices(){
  const menuAtivo = document.querySelectorAll(".nav-services a");

  menuAtivo.forEach(ativo => {
    ativo.addEventListener("click", (e) => {
      e.preventDefault();

      menuAtivo.forEach(l => l.classList.remove('ativo'));

      ativo.classList.add('ativo');
    })
  })
}

menuServices();