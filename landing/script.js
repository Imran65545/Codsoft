document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".heroimg-slideshow .heroimg");
    const dotsContainer = document.querySelector(".dots-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;
  
   
    slides[currentSlide].classList.add("active");
  
    
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === currentSlide) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dot");
  
    
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
  
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };
  
    
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };
  
    
    const goToSlide = (index) => {
      currentSlide = index;
      showSlide(currentSlide);
    };
  
    
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    
    setInterval(nextSlide, 5000); 
  });
  