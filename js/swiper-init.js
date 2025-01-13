// Initialize the thumbnail Swiper
const thumbSwiper = new Swiper('.thumb-swiper', {
    slidesPerView: 4, // Show 4 thumbnails
    spaceBetween: 10, // Space between thumbnails
    freeMode: true,
    watchSlidesProgress: true, // Tracks the progress of slides
    slideToClickedSlide: true, // Allows clicking on a thumbnail to navigate
});

// Initialize the main Swiper
const mainSwiper = new Swiper('.main-swiper', {
    loop: true, // Enable looping of slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: thumbSwiper, // Link the thumbnail swiper
    },
});

// Function to update thumbnail styles
function updateThumbnailHighlight(index) {
    const allThumbs = document.querySelectorAll('.thumb-swiper .swiper-slide');

    // Reset styles for all thumbnails
    allThumbs.forEach((thumb, i) => {
        if (i === index) {
            thumb.style.opacity = '1'; // Highlight the active thumbnail
            thumb.style.backgroundColor = 'gray'; // Gray background for active thumbnail
        } else {
            thumb.style.opacity = '0.5'; // Fade other thumbnails
            thumb.style.backgroundColor = 'transparent'; // Clear background for others
        }
    });
}

// Handle thumbnail click
thumbSwiper.on('click', (swiper) => {
    const clickedIndex = swiper.clickedIndex;
    if (clickedIndex !== undefined && clickedIndex >= 0) {
        updateThumbnailHighlight(clickedIndex); // Highlight the clicked thumbnail
    }
});

// Handle slide change in the main swiper
mainSwiper.on('slideChange', () => {
    const activeIndex = mainSwiper.realIndex; // Get the active index in the main swiper
    updateThumbnailHighlight(activeIndex); // Update thumbnail styles
});
