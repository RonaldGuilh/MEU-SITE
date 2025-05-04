function toggleMenu(){
  const btnMobile = document.querySelector(".hamburguer");
  const menuMobile = document.querySelector(".mobile-menu");

  btnMobile.addEventListener('click', () =>{
    btnMobile.classList.toggle('active');
    menuMobile.classList.toggle('active')
  })
}

toggleMenu();

