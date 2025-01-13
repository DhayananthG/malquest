let textElement = document.getElementById('animated-text');

let texts = [
    "Go Global, Learn Limitless!",
    "Study Abroad, Shape Tomorrow!",
    "Dream Bigger, Study Further!",
    "Your Global Journey Begins Today!",
    "Higher Studies, Higher Horizons!",
    "Discover, Learn, Conquer - Abroad!",
    "Step Out, Stand Out - Study Abroad!",
    "Expand Minds, Explore Borders!",
    "Think Global, Learn Universal!",
    "From Here to Anywhere - Study Abroad!"
  ];
   

let num = 0;
const n = texts.length;

const change_text = () => {
  
    textElement.innerText = texts[num];

    // Update animation for the new text
    const letters = textElement.innerText.split('');
    textElement.innerHTML = letters.map((letter, index) => {
        const char = letter === ' ' ? '&nbsp;' : letter;
        return `<span style="animation-delay: ${index * 0.1}s;">${char}</span>`;
    }).join('');

    num = (num + 1) % n;

    // Recursive call using setTimeout
    setTimeout(change_text, 5000);
    };

    // Start the text change when the document is ready
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(change_text, 5000);
    });        





const sidebar = document.getElementById('sidebar');
const sidebarOpen = document.getElementById('sidebarOpen');
const sidebarClose = document.getElementById('sidebarClose');    
sidebarOpen.addEventListener('click', () => {     // Open sidebar
    sidebar.classList.remove('-translate-x-full');
});      
sidebarClose.addEventListener('click', () => {      // Close sidebar
    sidebar.classList.add('-translate-x-full');
});

      
// Select the navbar element
const navbar = document.getElementById('navbar');
const sideBar = document.getElementById('sidebarOpen');
// Select all nav links
const navLinks = document.querySelectorAll('#navbar a');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scrollY value as needed
        // Change navbar styles
        navbar.classList.remove('bg-transparent', 'text-white');
        navbar.classList.add('bg-white', 'shadow-md', 'text-black');

        // Change sidebar icon color
        sideBar.classList.remove('text-white');
        sideBar.classList.add('text-black');

        // Change nav link text color to black
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-black');
        });
    } else {
        // Revert navbar styles
        navbar.classList.remove('bg-white', 'shadow-md', 'text-black');
        navbar.classList.add('bg-transparent', 'text-white');

        // Revert sidebar icon color
        sideBar.classList.remove('text-black');
        sideBar.classList.add('text-white');

        // Revert nav link text color to white
        navLinks.forEach(link => {
            link.classList.remove('text-black');
            link.classList.add('text-white');
        });
    }
});



