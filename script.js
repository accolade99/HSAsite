
//Get elements from dom
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

//Select all q elements
for(let i = 0; i < q.length; i++) {
    //Add click event to all q elements
    q[i].addEventListener('click', ()=> {
        //open th 'a' element with the 'i' as the clicked 'q' element
        a[i].classList.toggle('a-opened');
        //rotate the arr element with the same 'i' as the clicked 'q' element
        arr[i].classList.toggle('arrow-rotated');
    }); 
}

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const content = document.querySelector('.home .content');

    // Mobile menu toggle functionality
    menuBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click event from bubbling
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Close menu when clicking on a nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    })});

    document.addEventListener("DOMContentLoaded", function() {
        const heroInner = document.querySelector('.hero-inner');
        heroInner.classList.add('fade-in'); // Add a class to trigger the animation
    });

    // Image Slider JS
    const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalImages = document.querySelectorAll('.slider img').length;

// Function to update the slider position
function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Function to move to the next image
function nextSlide() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first image
  }
  updateSlider();
}

// Function to move to the previous image
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages -1; // Loop to the last image
  }
  updateSlider();
}

// Event listener for the next button
nextBtn.addEventListener('click', nextSlide);

// Event listener for the previous button
prevBtn.addEventListener('click', prevSlide);

// Automatically slide images every 3 seconds
setInterval(nextSlide, 5000);
