// Global variables
const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.querySelector('.popup__container');
const popupImg = document.querySelector('.popup__img')
const popupClose = document.querySelector('.btn__popup-close');
const popupArrowLeft = document.querySelector('.btn__popup-left');
const popupArrowRight = document.querySelector('.btn__popup-right');
const navbarHide = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__mobile');

let currentImage;



// This variable, showing Next Image in popup
const showNextImg = () => {
    if (currentImage === thumbnails.length - 1) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    popupImg.src = thumbnails[currentImage].src;
};

// This variable, showing previous image in popup
const showPrevImg = () => {
    if (currentImage === 0) {
        currentImage = thumbnails.length - 1;
    } else {
        currentImage--;
    }
    popupImg.src = thumbnails[currentImage].src;
};

// this variable is responsible for closing popup, addded here some animation for closing and opening
const closePopup = () => {
    popup.classList.add('fade-out');
    document.body.style.overflowY = "auto";
    navbarHide.style.display = "flex";
    setTimeout(() => {
        popup.classList.add('hidden');
        popup.classList.remove('fade-out');
    }, 300);
}

// This function is checking that, what image we choosed to showing in our screen
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', (e) => {
        popup.classList.remove('hidden');
        popupImg.src = e.target.src;
        document.body.style.overflowY = "hidden";
        navbarHide.style.display = "none";
        currentImage = index;
    });
});


// Variables for showing next image, previous and closing popup
popupArrowRight.addEventListener('click', () => {
    showNextImg();
});


popupArrowLeft.addEventListener('click', () => {
    showPrevImg();
});


popupClose.addEventListener('click', () => {
    closePopup();
});


// Added functionality for clicking by arrows on keyboard
document.addEventListener('keydown', (e) => {
    if (!popup.classList.contains("hidden")) {

        if (e.key === "ArrowRight" || e.keyCode === 39) {
            showNextImg();
        }

        if (e.key === "ArrowLeft" || e.keyCode === 37) {
            showPrevImg();
        }

        if (e.key === "Escape" || e.keyCode === 27) {
            closePopup();
        }
    }
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// Navbar 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active-navbar');
});
