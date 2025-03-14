
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
