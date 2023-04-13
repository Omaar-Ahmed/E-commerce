let menuBars = document.getElementById('bars');
let linksNavBar = document.getElementById('links');
menuBars.onclick = () => {
    menuBars.classList.toggle('active');
    linksNavBar.classList.toggle('show');
}

// document.addEventListener('click', function (e) {
//     console.log(e.target.id)
//     if (e.target.id !== 'bars' && e.target.id !== 'links') {
//         menuBars.classList.remove('active');
//         linksNavBar.classList.remove('show');
//     }
// })
