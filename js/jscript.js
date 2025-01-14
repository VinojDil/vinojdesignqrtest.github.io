// Image Slider 1 with Descriptions
const images = [
    { src: "images/4_1.png", description: "Description for Image 1" },
    { src: "images/5.png", description: "Description for Image 2" }
  ];
  
  const carouselInner = document.getElementById('carouselItems');
  const descriptionBox = document.getElementById('imageDescription');
  
  // Populate carousel items
  images.forEach((image, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    itemDiv.innerHTML = `<img src="${image.src}" class="d-block" alt="Image ${index + 1}">`;
    carouselInner.appendChild(itemDiv);
  });
  
  // Set initial description
  descriptionBox.textContent = images[0].description;
  
  // Update description on slide change
  const imageCarousel = document.getElementById('imageCarousel');
  imageCarousel.addEventListener('slid.bs.carousel', () => {
    const activeIndex = [...carouselInner.children].findIndex(item =>
      item.classList.contains('active')
    );
    descriptionBox.textContent = images[activeIndex].description;
  });

// New Image Slider with Descriptions
const secondImages = [
    { src: "images/4_1.png", description: "Description for Image 1" },
    { src: "images/5.png", description: "Description for Image 2" }
  ];
  
  const secondCarouselInner = document.getElementById('secondCarouselItems');
  const secondDescriptionBox = document.getElementById('secondImageDescription');
  
  // Populate carousel items
  secondImages.forEach((image, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    itemDiv.innerHTML = `<img src="${image.src}" alt="Second Image ${index + 1}">`;
    secondCarouselInner.appendChild(itemDiv);
  });
  
  // Set initial description
  secondDescriptionBox.textContent = secondImages[0].description;
  
  // Update description on slide change
  const secondImageCarousel = document.getElementById('secondImageCarousel');
  secondImageCarousel.addEventListener('slid.bs.carousel', () => {
    const activeIndex = [...secondCarouselInner.children].findIndex(item => item.classList.contains('active'));
    secondDescriptionBox.textContent = secondImages[activeIndex].description;
  });



// Video Slider

// Video Slider with Descriptions
const videoFiles = [
    { src: "images/AIR SUPPORT BRA.mp4", description: "Description for Video 1" },
    { src: "images/AIR SUPPORT BRA - Copy.mp4", description: "Description for Video 2" },
    // Add more video paths and descriptions as needed
  ];
  
  const videoCarouselInner = document.getElementById('videoCarouselItems');
  const videoDescriptionBox = document.getElementById('videoDescription');
  
  // Populate carousel items
  videoFiles.forEach((file, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    itemDiv.innerHTML = `
      <video controls>
        <source src="${file.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    videoCarouselInner.appendChild(itemDiv);
  });
  
  // Set initial description
  videoDescriptionBox.textContent = videoFiles[0].description;
  
  // Update description on slide change
  const videoCarousel = document.getElementById('videoCarousel');
  videoCarousel.addEventListener('slid.bs.carousel', () => {
    const activeIndex = [...videoCarouselInner.children].findIndex(item => item.classList.contains('active'));
    videoDescriptionBox.textContent = videoFiles[activeIndex].description;
  });
  
  // Stop playing videos when the slider moves to the next slide
  videoCarousel.addEventListener('slid.bs.carousel', () => {
    const videos = videoCarousel.querySelectorAll('video');
    videos.forEach((video) => {
      if (!video.closest('.carousel-item.active')) {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset to the beginning (optional)
      }
    });
  });

  // Second Video Slider with Descriptions
const secondVideoFiles = [
    { src: "images/AIR SUPPORT BRA.mp4", description: "Description for Video 1" },
    { src: "images/AIR SUPPORT BRA - Copy.mp4", description: "Description for Video 2" },
    // Add more video paths and descriptions as needed
  ];
  
  const secondVideoCarouselInner = document.getElementById('videoCarouselItems2');
  const secondVideoDescriptionBox = document.getElementById('videoDescription2');
  
  // Populate carousel items
  secondVideoFiles.forEach((file, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    itemDiv.innerHTML = `
      <video controls>
        <source src="${file.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    secondVideoCarouselInner.appendChild(itemDiv);
  });
  
  // Set initial description
  secondVideoDescriptionBox.textContent = secondVideoFiles[0].description;
  
  // Update description on slide change
  const secondVideoCarousel = document.getElementById('videoCarousel2');
  secondVideoCarousel.addEventListener('slid.bs.carousel', () => {
    const activeIndex = [...secondVideoCarouselInner.children].findIndex(item => item.classList.contains('active'));
    secondVideoDescriptionBox.textContent = secondVideoFiles[activeIndex].description;
  });
  
  // Stop playing videos when the slider moves to the next slide
  secondVideoCarousel.addEventListener('slid.bs.carousel', () => {
    const videos = secondVideoCarousel.querySelectorAll('video');
    videos.forEach((video) => {
      if (!video.closest('.carousel-item.active')) {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset to the beginning (optional)
      }
    });
  });
