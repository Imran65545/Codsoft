document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".heroimg-slideshow .heroimg");
    const dotsContainer = document.querySelector(".dots-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;
  
    // Set the first slide as active on page load
    slides[currentSlide].classList.add("active");
  
    // Create dots dynamically
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === currentSlide) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dot");
  
    // Function to show the current slide
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
          dots[i].classList.add("active");
        }
      });
    };
  
    // Function to go to the next slide
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };
  
    // Function to go to a specific slide
    const goToSlide = (index) => {
      currentSlide = index;
      showSlide(currentSlide);
    };
  
    // Event listeners for navigation buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    // Auto-play functionality
    setInterval(nextSlide, 5000); // Change image every 3 seconds
  });
  