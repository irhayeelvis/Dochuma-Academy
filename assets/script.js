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

// fade Up
const fadeUps = document.querySelectorAll('.header');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 25; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps.forEach((fadeUp) => {
  observer.observe(fadeUp);
});

const fadeUps2 = document.querySelectorAll('.showcase-group-link');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps2.forEach((fadeUp) => {
  observer2.observe(fadeUp);
});

const fadeUps3 = document.querySelectorAll('.showcase-group video');

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps3.forEach((fadeUp) => {
  observer3.observe(fadeUp);
});

const fadeUps4 = document.querySelectorAll('.small-container');

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps4.forEach((fadeUp) => {
  observer4.observe(fadeUp);
});

const fadeUps5 = document.querySelectorAll('.container');

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps5.forEach((fadeUp) => {
  observer5.observe(fadeUp);
});

const fadeUps6 = document.querySelectorAll('.grid-desktop');

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps6.forEach((fadeUp) => {
  observer6.observe(fadeUp);
});

const fadeUps7 = document.querySelectorAll('.head');

const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps7.forEach((fadeUp) => {
  observer7.observe(fadeUp);
});

const fadeUps8 = document.querySelectorAll('.content');

const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps8.forEach((fadeUp) => {
  observer8.observe(fadeUp);
});

const fadeUps9 = document.querySelectorAll('.content-box');

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps9.forEach((fadeUp) => {
  observer9.observe(fadeUp);
});

const fadeUps10 = document.querySelectorAll('.content-box');

const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps10.forEach((fadeUp) => {
  observer10.observe(fadeUp);
});

const fadeUps11 = document.querySelectorAll('.content-box');

const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps11.forEach((fadeUp) => {
  observer11.observe(fadeUp);
});

const fadeUps12 = document.querySelectorAll('.main');

const observer12 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps12.forEach((fadeUp) => {
  observer12.observe(fadeUp);
});

const fadeUps13 = document.querySelectorAll('.end');

const observer13 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps13.forEach((fadeUp) => {
  observer13.observe(fadeUp);
});

fadeUps12.forEach((fadeUp) => {
  observer12.observe(fadeUp);
});

const fadeUps14 = document.querySelectorAll('.form');

const observer14 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps14.forEach((fadeUp) => {
  observer14.observe(fadeUp);
});

fadeUps12.forEach((fadeUp) => {
  observer12.observe(fadeUp);
});

const fadeUps15 = document.querySelectorAll('.form img');

const observer15 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 200; //delay value in ms
      setTimeout(() => {
        entry.target.classList.add('show');
      }, delay);
    }
  });
}, {
  threshold: 0.3, //trigger effect value time
});

fadeUps15.forEach((fadeUp) => {
  observer15.observe(fadeUp);
});