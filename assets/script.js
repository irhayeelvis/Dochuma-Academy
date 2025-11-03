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

  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.2 // triggers when 20% of the element is visible
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });

  console.log('Heaven knows why you\'re in the console. cos there\'s no errors?');
  console.log('Website Design and Development by Hashtag VI, follow me on X: https://x.com/@irhayeElvis and github: https://github.com/irhayeelvis');