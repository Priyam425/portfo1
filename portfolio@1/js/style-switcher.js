/*================toggle style switcher=====================*/
const styeleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styeleSwitcherToggle.addEventListener("click", () => {
 document.querySelector(".style-switcher").classList.toggle("open");
})
//Hide style-switcher on scrol
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*================theme colorsr=====================*/
const  alternateStyles = document.querySelectorAll(".alternate-style")
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

/*================theme lite and dark mode=====================*/
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () =>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun");
    }
   else
   {
    daynight.querySelector("i").classList.add("fa-moon")
   }


})