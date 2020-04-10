//for images in index.html
$('.carousel').carousel({
    interval: 7000
})



// for menu in contact.html
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}