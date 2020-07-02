const el = document.getElementById('mobile-toggle');
const home = document.getElementById('home');
const app = document.getElementById('app');
const profissionais = document.getElementById('profissionais');
const vantagens = document.getElementById('vantagens');
const vantagensPacientes = document.getElementById('vantagens-2');
const footer = document.getElementById('footer');


const menuMobile = document.getElementsByClassName('menu-mobile')[0];
const btnClose = document.getElementById('btn-close');
const linksMobile = document.getElementById('links-mobile');

const openMenu = () => {
  home.style.display = "none";
  app.style.display = "none";
  profissionais.style.display = "none";
  vantagens.style.display = "none";
  vantagensPacientes.style.display = "none";
  footer.style.display = "none";
  menuMobile.style.display = "flex";
}

const closeMenu = () => {
  home.style.display = "block";
  app.style.display = "block";
  profissionais.style.display = "block";
  vantagens.style.display = "block";
  vantagensPacientes.style.display = "block";
  footer.style.display = "block";
  menuMobile.style.display = "none";
}

const goToLink = () => {
  home.style.display = "block";
  app.style.display = "block";
  profissionais.style.display = "block";
  vantagens.style.display = "block";
  vantagensPacientes.style.display = "block";
  footer.style.display = "block";
  menuMobile.style.display = "none";
}

el.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
linksMobile.addEventListener('click', goToLink);


