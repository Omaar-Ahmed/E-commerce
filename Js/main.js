let menuBars = document.getElementById('bars');
let linksNavBar = document.getElementById('links');
menuBars.addEventListener("click", function(){
    menuBars.classList.toggle('active');
    linksNavBar.classList.toggle('show');
})


document.addEventListener('click', function (e) {
    if (!linksNavBar.contains(e.target)&&!menuBars.contains(e.target)) {
        menuBars.classList.remove('active');
        linksNavBar.classList.remove('show');
    }
})
