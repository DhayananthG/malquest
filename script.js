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
// Add an event listener for scrolling
window.addEventListener('scroll', () => 
{
    if (window.scrollY > 50)    // Adjust the scrollY value as needed
    { 
        navbar.classList.remove('bg-transparent', 'text-white');    // Remove the transparent background and white text color
        navbar.classList.add('bg-white', 'shadow-md', 'text-black');    // Add white background, shadow, and black text color
        sideBar.classList.remove('text-white');
        sideBar.classList.add('text-black');
    } 
    else 
    {
        navbar.classList.remove('bg-white', 'shadow-md', 'text-black');     // Remove the white background, shadow, and black text color
        navbar.classList.add('bg-transparent', 'text-white');     // Revert back to transparent background and white text color
        sideBar.classList.remove('text-black');
        sideBar.classList.add('text-white');
    }
});
