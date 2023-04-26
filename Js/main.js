// Menu Side Bar -------
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

//Shop Page -------------
let shopBtn = document.querySelector('#shopBtn'); 
shopBtn.onclick = () => {
    window.location.href = 'shop.html'
}
// Single Product Page ------------------------
let mainImg = document.getElementById('mainImg'); 
let smallImgs = document.getElementsByClassName('small-img') ; 

for (let i=0 ; i < smallImgs.length ; i++) {
smallImgs[i].onclick = function() {
    mainImg.src = smallImgs[i].src ;
}}

// let imgs = document.querySelectorAll('img')
// let products = document.getElementsByClassName('boxOpen');
// console.log(products)
// for (let i=0 ; i < products.length ; i++) {
// products[i].onclick = () => {
//     window.location.href= 'sproduct.html';
// }}
