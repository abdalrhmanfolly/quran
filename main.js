/* loding page */
var loader = document.querySelector(".preloader");
window.addEventListener("load", function ()
{
    loader.style.display = "none"
})


/* toggle light or dark mode */
function myFunction()
{
    var element = document.body;
    element.classList.toggle("dark");
}