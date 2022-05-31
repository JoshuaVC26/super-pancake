const navToggle = document.querySelector('.toggle')
const navDesp = document.querySelector('.nav-Desp')

navToggle.addEventListener("click", () =>{
    navDesp.classList.toggle("nav-Desp_visible");

    if (navDesp.classList.contains("nav-Desp_visible")){
        navToggle.setAttribute("arial-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("arial-label", "Abrir menú");
    }
});
