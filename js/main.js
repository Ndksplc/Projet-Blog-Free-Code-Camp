//Grab ELement
const selectELement = (selector) =>{
  const elmt = document.querySelector(selector);
  if(elmt) return elmt;
  throw new Error("Something went wrong. Make sure that the selector exist or is typed correctly"); 
}

const scrollHeader = () =>{
  const HeaderElmt = selectELement("#header");
  if (this.scrollY >= 15){
    HeaderElmt.classList.add("activated");
  }
  else HeaderElmt.classList.remove("activated");
}
window.addEventListener('scroll',scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectELement("#menu-toggle-icon");

const toggleMenu = () =>{
  const menuMobile = selectELement("#header__menu");
  menuMobile.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
}

menuToggleIcon.addEventListener("click", toggleMenu);


const bodyElmt = document.body;
currentTheme = localStorage.getItem("currentTheme");
if(currentTheme) bodyElmt.classList.add("light-theme");
const themeToggleBtn = selectELement("#theme-toggle-btn");
themeToggleBtn.addEventListener("click",()=>{
  bodyElmt.classList.toggle("light-theme");
  if(bodyElmt.classList.contains("light-theme")) localStorage.setItem("currentTheme","ThemeActibe");
  else localStorage.removeItem("currentTheme");
} )
//copyright year
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime",thisYear);
year.textContent = thisYear;
// Open/Close Search Form

const opensearchFormBtn = selectELement("#search-icon");
const closeSearchFormBtn = selectELement("#form-close-btn")
const searchFormContainer = selectELement("#search-form-container");

opensearchFormBtn.addEventListener("click",()=>{
  searchFormContainer.classList.add("activated");

});
closeSearchFormBtn.addEventListener("click",()=>{
  searchFormContainer.classList.remove("activated");
})
// Close the search pop-up on esc key

window.addEventListener("keyup", e =>{
  
  if(e.key === "Escape"){ 
    searchFormContainer.classList.remove("activated");
};
})
const swiper = document.querySelector('.swiper');
new Swiper(swiper,{slidesPerView: 1, 
  loop: true,
  spaceBetween: 20,
  navigation: { nextEl: '.swiper-button-next',
                prevEl:'.swiper-button-prev'},
  pagination:{
    el:'.swiper-pagination'
  },
  breakpoints: {
    700:{
      slidesPerView: 2
    },
    1200:{
      slidesPerView: 3
    }

  }

});