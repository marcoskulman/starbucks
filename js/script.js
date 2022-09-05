function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    const menu = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}