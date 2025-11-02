    // Hamburger toggle
    const ham = document.querySelector('.ham-menu');
    const menu = document.querySelector('.off-screen-menu');
    ham.addEventListener('click', () => {
      ham.classList.toggle('active');
      menu.classList.toggle('active');
    });

    document.querySelectorAll('.off-screen-menu a').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('active');
        menu.classList.remove('active');
      });
    });


let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}