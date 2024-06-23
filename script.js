// Get the scroll up button
let mybutton = document.getElementById("back-to-top");
const dropDown = document.getElementById("drop-down");
const dropDownToggle = document.getElementById("drop-down-toggle");
let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("navLinks");
let marqueeBlur = document.querySelector(".blur-class");
let sliderBlur = document.querySelector(".blur-class1");
let aboutusBlur = document.querySelector(".blur-class2");
let currentIndex = 0;


hamburger.addEventListener('click', function () {
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        marqueeBlur.classList.remove('blur');
        sliderBlur.classList.remove('blur');
        aboutusBlur.classList.remove('blur');
    } else {
        navLinks.style.display = "block";
        marqueeBlur.classList.add('blur');
        sliderBlur.classList.add('blur');
        aboutusBlur.classList.add('blur');
    }
});



//function for handling loading effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight) {
                section.classList.add('visible');
            }
        });
    }

    // Initial check when page loads
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});


//function to create slider
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Initialize the slider to show the first slide
showSlide(currentIndex);

// Optional: Automatically move to the next slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Function to toggle dropdown visibility
const dropdownToggle = function () {
    if (dropDown.style.display === 'block') {
        dropDown.style.display = "none";
    } else {
        dropDown.style.display = "block";
    }
};

// Event listener for dropdown toggle button
dropDownToggle.addEventListener('click', function (event) {
    dropdownToggle(); // Toggle dropdown visibility
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            const contentId = header.getAttribute("data-tab");
            const content = document.getElementById(contentId);

            // Toggle the display of the content
            if (content.style.display === "block") {
                content.style.display = "none";
                header.classList.remove("active");
            } else {
                // Close all other open contents
                document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
                document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("active"));

                // Open the clicked content
                content.style.display = "block";
                header.classList.add("active");
            }
        });
    });
});