/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('main section');
const docFrag = document.createDocumentFragment();
const navBar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function navClickHandler(event) {
    let sectionId = event.target.getAttribute('data-sectionId');
    let section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({behavior: 'smooth'});
    let activeSecs = document.querySelectorAll('.your-active-class');
    for (active of activeSecs) {
        active.classList.remove('your-active-class');
    }
    section.classList.add('your-active-class');
}

function inViewport(elem) {
    let bounds = elem.getBoundingClientRect();
    return (
        bounds.top >= 0 &&
        bounds.left >= 0 &&
        bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounds.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let section of sections) {
    let title = section.querySelector('h2').textContent;
    let navEl = document.createElement('li');
    navEl.textContent = title;
    navEl.classList.add('menu__link');
    navEl.style.display = 'inline-block';
    navEl.setAttribute('data-sectionId', section.id);
    docFrag.appendChild(navEl);
}

navBar.appendChild(docFrag);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click', navClickHandler);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll', () => {
    for (section of sections) {
        if (inViewport(section)){
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
})

