// Function to animate progress bars
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
});

// Existing Typed.js and progress bar animation

// Function to animate Contact section
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Typed.js
    var typed = new Typed(".text", {
        strings: ["Siswa SMAKENPAS", "Programmer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });

    // Additional animation for contact section can be added here if needed
});

// Fungsi untuk membuka modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Mendapatkan elemen-elemen yang diperlukan
const navbarToggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll(".navbar a");

// Menambahkan event listener untuk toggle menu pada mobile
navbarToggle.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Menambahkan atau menghapus class active untuk navbar
});

// Menambahkan event listener pada setiap link di navbar untuk menutup navbar saat diklik
navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active"); // Menutup navbar setelah link diklik
    });
});


