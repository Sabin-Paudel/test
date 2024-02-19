//Responsive Header
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {

  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

//js pre-script
var typed = new Typed('#change', {
  strings: [' Developer', 'Designer', 'Youtuber', 'Editor'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});


//Light || Darkmode 
const darkModeButton = document.querySelector('#Darkmode');
const lightModeButton = document.querySelector('#lightmode');
const body = document.body;
const socialIcon=document.querySelectorAll('i');
const header = document.querySelector('.header');
const mainSection = document.querySelector('.main-section');
const section = document.querySelector('.section');
const skill = document.querySelector('#skill');
const mainServiceBox = document.querySelector('.main-service-box');
const contact = document.querySelector('#contact');

let isDarkMode = false;

function toggleDarkMode() {
  isDarkMode = !isDarkMode; 
  if (isDarkMode) {
    darkModeButton.style.display="none";
    lightModeButton.style.display="block";
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
    header.style.backgroundColor = "#000";
    header.style.color = "#fff";
    mainSection.style.backgroundColor = "#000";
    mainSection.style.color = "#fff";
    section.style.backgroundColor = "#000";
    section.style.color = "#fff";
    skill.style.backgroundColor = "#000";
    skill.style.color = "#fff";
    mainServiceBox.style.backgroundColor = "#000";
    mainServiceBox.style.color = "#fff";
    contact.style.backgroundColor = "#000";
    contact.style.color = "#fff";
    socialIcon.style.backgroundColorcolor = "#fff";

  } else {
    darkModeButton.style.display="block";
    lightModeButton.style.display="none";
    body.style.backgroundColor = "#1f242d";
    body.style.color = "#fff";
    header.style.backgroundColor = "#1f242d";
    header.style.color = "#fff";
    mainSection.style.backgroundColor = "#1f242d";
    mainSection.style.color = "#fff";
    section.style.backgroundColor = "#1f242d";
    section.style.color = "#fff";
    skill.style.backgroundColor = "#1f242d";
    skill.style.color = "#fff";
    mainServiceBox.style.backgroundColor = "#1f242d";
    mainServiceBox.style.color = "#fff";
    contact.style.backgroundColor = "#1f242d";
    contact.style.color = "#fff";
  }
}

darkModeButton.addEventListener('click', toggleDarkMode);
lightModeButton.addEventListener('click', toggleDarkMode);







