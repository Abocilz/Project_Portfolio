const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const video = document.querySelector('.project-card video');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
video.addEventListener('mouseenter', () => {
  video.play();
});

video.addEventListener('mouseleave', () => {
  video.pause();
});



