function putarVideo() {
    var videoku = document.getElementById('video');

    if(videoku.paused)
        videoku.play();
    else
        videoku.pause();
}

const input = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.topbar ul');

input.addEventListener('click', function() {
    menu.classList.toggle('slide');
})