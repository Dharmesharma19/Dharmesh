let slideIndex = 0;
const slidesContainer = document.querySelector('.videos');
const iframeWidth = document.querySelector('iframe').offsetWidth;
const maxSlides = slidesContainer.children.length;

function prevSlide() {
    slideIndex -= 1;
    if (slideIndex < 0) {
        slideIndex = maxSlides - 1;
    }
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex += 1;
    if (slideIndex >= maxSlides) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(n) {
    slidesContainer.style.transform = `translateX(-${iframeWidth * n}px)`;
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 50000);

// Listen for 'ended' event on each iframe
const iframes = document.querySelectorAll('iframe');
iframes.forEach((iframe, index) => {
    iframe.addEventListener('ended', () => {
        if (index === maxSlides - 1) {
            nextSlide(); // Move to the first slide when the last video ends
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const retailLink = document.querySelector('.Retail');
    const retailSubMenuWrap = retailLink.querySelector('.sub_menu_wrp');

    // Show submenu for Retail on hover
    retailLink.addEventListener('mouseover', function () {
        retailSubMenuWrap.classList.add('active');
    });

    retailLink.addEventListener('mouseout', function () {
        retailSubMenuWrap.classList.remove('active');
    });

    // Toggle submenu for Retail on click
    retailLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        retailSubMenuWrap.classList.toggle('active');
    });

    // Close submenu for Retail when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!retailLink.contains(event.target)) {
            retailSubMenuWrap.classList.remove('active');
        }
    });

    const corporateLink = document.querySelector('.Corporate');
    const corporateSubMenuWrap = corporateLink.querySelector('.Corporate_sub_menu_wrp');

    // Show submenu for Corporate on hover
    corporateLink.addEventListener('mouseover', function () {
        corporateSubMenuWrap.classList.add('active');
    });

    corporateLink.addEventListener('mouseout', function () {
        corporateSubMenuWrap.classList.remove('active');
    });

    // Toggle submenu for Corporate on click
    corporateLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        corporateSubMenuWrap.classList.toggle('active');
    });

    // Close submenu for Corporate when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!corporateLink.contains(event.target)) {
            corporateSubMenuWrap.classList.remove('active');
        }
    });

    const residentialLink = document.querySelector('.Residential');
    const residentialSubMenuWrap = residentialLink.querySelector('.Residential_sub_menu_wrp');

    // Show submenu for Residential on hover
    residentialLink.addEventListener('mouseover', function () {
        residentialSubMenuWrap.classList.add('active');
    });

    residentialLink.addEventListener('mouseout', function () {
        residentialSubMenuWrap.classList.remove('active');
    });

    // Toggle submenu for Residential on click
    residentialLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        residentialSubMenuWrap.classList.toggle('active');
    });

    // Close submenu for Residential when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!residentialLink.contains(event.target)) {
            residentialSubMenuWrap.classList.remove('active');
        }
    });
});




// SUB Menu appearance of interior

const interiorSubMenuLink = document.querySelector('.Residential_Sub_menu_link');
const subSubMenuWrap = interiorSubMenuLink.nextElementSibling;

// Variables to track mouse position
let isSubMenuHovered = false;
let isSubSubMenuHovered = false;

// Show sub-sub-menu for Interior on hover
interiorSubMenuLink.addEventListener('mouseenter', function () {
    isSubMenuHovered = true;
    subSubMenuWrap.classList.add('active');
});

// Hide sub-sub-menu for Interior on mouse leave
interiorSubMenuLink.addEventListener('mouseleave', function () {
    isSubMenuHovered = false;
    setTimeout(hideSubSubMenu, 200); // Delay hiding to check mouse position
});

// Show sub-sub-menu for Interior when hovering over it
subSubMenuWrap.addEventListener('mouseenter', function () {
    isSubSubMenuHovered = true;
});

// Hide sub-sub-menu for Interior when mouse leaves it
subSubMenuWrap.addEventListener('mouseleave', function () {
    isSubSubMenuHovered = false;
    setTimeout(hideSubSubMenu, 200); // Delay hiding to check mouse position
});

// Function to hide sub-sub-menu if neither submenu nor sub-sub-menu is hovered
function hideSubSubMenu() {
    if (!isSubMenuHovered && !isSubSubMenuHovered) {
        subSubMenuWrap.classList.remove('active');
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const retailLink = document.querySelector('.Retail');
    const subMenuWrap = retailLink.querySelector('.sub_menu_wrp');

    // Show submenu on hover
    retailLink.addEventListener('mouseover', function () {
        subMenuWrap.classList.add('active');
    });

    retailLink.addEventListener('mouseout', function () {
        subMenuWrap.classList.remove('active');
    });

    // Open retail page in new tab on click
    RetailLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        const RetailURL = RetailLink.querySelector('a').href;
        window.open(RetailURL, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const designLink = document.querySelector('.Design');
    const designSubMenuWrap = designLink.querySelector('.Design_sub_menu_wrp');

    // Show submenu for Design on hover
    designLink.addEventListener('mouseover', function () {
        designSubMenuWrap.classList.add('active');
    });

    designLink.addEventListener('mouseout', function () {
        designSubMenuWrap.classList.remove('active');
    });

    // Toggle submenu for Design on click
    designLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        designSubMenuWrap.classList.toggle('active');
    });

    // Close submenu for Design when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!designLink.contains(event.target)) {
            designSubMenuWrap.classList.remove('active');
        }
    });
});

// incon slide of home page

const slides = document.querySelector('.icon_slider-container .slides');
const slideWidth = 220; // Width of each slide including margin-right
let iconSlideIndex = 0;

// Handle previous slide
document.querySelector('.icon_slider-container .prev').addEventListener('click', () => {
    iconSlideIndex--;
    if (iconSlideIndex < 0) {
        iconSlideIndex = slides.children.length - 1;
    }
    slides.style.transform = `translateX(-${iconSlideIndex * slideWidth}px)`;
});

// Handle next slide
document.querySelector('.icon_slider-container .next').addEventListener('click', () => {
    iconSlideIndex++;
    if (iconSlideIndex >= slides.children.length) {
        iconSlideIndex = 0;
    }
    slides.style.transform = `translateX(-${iconSlideIndex * slideWidth}px)`;
});


// Sub_hero_slider
(function () {
    const prevButtonSubHero = document.querySelector('.sub_hero_prev');
    const nextButtonSubHero = document.querySelector('.sub_hero_next');
    const sliderWrapperSubHero = document.querySelector('.sub_hero_slider-wrapper');
    const slidesSubHero = document.querySelectorAll('.sub_hero_slider-slide');

    let slideIndexSubHero = 0;

    // Event listeners for previous and next buttons
    prevButtonSubHero.addEventListener('click', () => {
        slideIndexSubHero = (slideIndexSubHero === 0) ? slidesSubHero.length - 1 : slideIndexSubHero - 1;
        updatePreviewsSubHero();
        showSlidesSubHero();
    });

    nextButtonSubHero.addEventListener('click', () => {
        slideIndexSubHero = (slideIndexSubHero === slidesSubHero.length - 1) ? 0 : slideIndexSubHero + 1;
        updatePreviewsSubHero();
        showSlidesSubHero();
    });

    // Function to update preview images
    function updatePreviewsSubHero() {
        const prevPreviewSubHero = document.querySelector('.sub_hero_prev-preview img');
        const nextPreviewSubHero = document.querySelector('.sub_hero_next-preview img');
        const prevIndexSubHero = (slideIndexSubHero === 0) ? slidesSubHero.length - 1 : slideIndexSubHero - 1;
        const nextIndexSubHero = (slideIndexSubHero === slidesSubHero.length - 1) ? 0 : slideIndexSubHero + 1;
        prevPreviewSubHero.src = slidesSubHero[prevIndexSubHero].querySelector('img').src;
        nextPreviewSubHero.src = slidesSubHero[nextIndexSubHero].querySelector('img').src;
    }

    // Function to display slides
    function showSlidesSubHero() {
        sliderWrapperSubHero.style.transform = `translateX(${-slideIndexSubHero * 100}%)`;
    }

    // Initial update of preview images
    updatePreviewsSubHero();
})();

// Accordion

// Get references to image placeholder and accordion labels
const imagePlaceholder = document.getElementById('image-placeholder');
const accordionLabels = document.querySelectorAll('#specification_ac-accordion li label');

// Define image URLs corresponding to each accordion label
const imageUrls = {
    'specification_ac-first': '001.png',
    'specification_ac-second': '002.png',
    'specification_ac-third': '003.png',
    'specification_ac-fourth': '004.png',
    'specification_ac-fifth': '2nd Section.png'
};

// Set the default image to appear on page load
imagePlaceholder.src = imageUrls['specification_ac-first'];

// Add event listener to each accordion label
accordionLabels.forEach(label => {
    label.addEventListener('click', () => {
        // Get the ID of the clicked label
        const labelId = label.getAttribute('for');
        
        // Set the source of the image placeholder to the corresponding image URL
        imagePlaceholder.src = imageUrls[labelId];
    });
});


//  2nd Accordion
     // Image & content change on button
    
     function showImages(index) {
        var containers1 = document.querySelectorAll('.image-container1');
        var buttons = document.querySelectorAll('.button');
        
        // Hide all images and text initially
        for (var i = 0; i < containers1.length; i++) {
            containers1[i].classList.remove('active');
            containers1[i].querySelector('h2').style.display = 'none';
            containers1[i].querySelector('h4').style.display = 'none';
            containers1[i].querySelector('p').style.display = 'none';
            containers1[i].querySelector('.image').style.display = 'none';
        }
        
        // Show the selected image and text
        containers1[index - 1].classList.add('active');
        containers1[index - 1].querySelector('h2').style.display = 'block';
        containers1[index - 1].querySelector('h4').style.display = 'block';
        containers1[index - 1].querySelector('p').style.display = 'block';
        containers1[index - 1].querySelector('.image').style.display = 'block';
    
        // Set the initial state of image-container2
        var containers2 = document.querySelector('.image-container2');
        containers2.querySelector('.image.active').classList.remove('active');
        containers2.querySelectorAll('.image')[index - 1].classList.add('active')}
    
         // Function to show images and content
         function showImages(index) {
            var containers1 = document.querySelectorAll('.image-container1');
            var buttons = document.querySelectorAll('.button');
    
            // Hide all images and text initially
            for (var i = 0; i < containers1.length; i++) {
                containers1[i].classList.remove('active');
                containers1[i].querySelector('h2').style.display = 'none';
                containers1[i].querySelector('h4').style.display = 'none';
                containers1[i].querySelector('p').style.display = 'none';
                containers1[i].querySelector('.image').style.display = 'none';
            }
    
            // Show the selected image and text
            containers1[index - 1].classList.add('active');
            containers1[index - 1].querySelector('h2').style.display = 'block';
            containers1[index - 1].querySelector('h4').style.display = 'block';
            containers1[index - 1].querySelector('p').style.display = 'block';
            containers1[index - 1].querySelector('.image').style.display = 'block';
    
            // Set the initial state of image-container2
            var containers2 = document.querySelector('.image-container2');
            containers2.querySelector('.image.active').classList.remove('active');
            containers2.querySelectorAll('.image')[index - 1].classList.add('active');
        }
    
        // Call showImages function for the first button when the page loads
        window.onload = function() {
            showImages(1);
        };

    function showImages(index) {
    var containers1 = document.querySelectorAll('.image-container1');
    var buttons = document.querySelectorAll('.button');

    // Show all images and text initially
    for (var i = 0; i < containers1.length; i++) {
        containers1[i].classList.remove('active');
        containers1[i].querySelector('h2').style.display = 'block';
        containers1[i].querySelector('h4').style.display = 'block';
        containers1[i].querySelector('p').style.display = 'block';
        containers1[i].querySelector('.image').style.display = 'block';
    }

    // Show the selected image and text
    containers1[index - 1].classList.add('active');
    containers1[index - 1].querySelector('h2').style.display = 'block';
    containers1[index - 1].querySelector('h4').style.display = 'block';
    containers1[index - 1].querySelector('p').style.display = 'block';
    containers1[index - 1].querySelector('.image').style.display = 'block';

    // Set the initial state of image-container2
    var containers2 = document.querySelector('.image-container2');
    containers2.querySelector('.image.active').classList.remove('active');
    containers2.querySelectorAll('.image')[index - 1].classList.add('active');
}

// Call showImages function for the first button when the page loads
window.onload = function() {
    showImages(1);
};



// load image-container1 of container

function showImages(index) {
    var containers1 = document.querySelectorAll('.image-container1');
    var buttons = document.querySelectorAll('.button');

    // Show all images and text initially
    for (var i = 0; i < containers1.length; i++) {
        containers1[i].classList.remove('active');
        containers1[i].querySelector('h2').style.display = 'block';
        containers1[i].querySelector('h4').style.display = 'block';
        containers1[i].querySelector('p').style.display = 'block';
        containers1[i].querySelector('.image').style.display = 'block';
    }

    // Show the selected image and text
    containers1[index - 1].classList.add('active');
    containers1[index - 1].querySelector('h2').style.display = 'block';
    containers1[index - 1].querySelector('h4').style.display = 'block';
    containers1[index - 1].querySelector('p').style.display = 'block';
    containers1[index - 1].querySelector('.image').style.display = 'block';

    // Set the initial state of image-container2
    var containers2 = document.querySelector('.image-container2');
    containers2.querySelector('.image.active').classList.remove('active');
    containers2.querySelectorAll('.image')[index - 1].classList.add('active');
}

// Call showImages function for the first button when the page loads
window.onload = function() {
    showImages(1);
};


 
