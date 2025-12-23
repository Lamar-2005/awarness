 window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const website = document.getElementById("website");

    setTimeout(() => {
      preloader.classList.add("hide");
      website.style.display = "block";
    }, 2000);
  });

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

 
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);

  
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });


  const darkModeToggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  darkModeToggle.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.removeAttribute("data-theme");
      darkModeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
      darkModeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    html.setAttribute("data-theme", "dark");
    darkModeToggle.textContent = "☀️";
  }

  function toggleContent(button) {
    const card = button.closest('.awareness-card');
    const extraContent = card.querySelector('.extra-content');
    const isShowing = extraContent.classList.contains('show');
    
    if (isShowing) {
      extraContent.classList.remove('show');
      button.innerHTML = 'Read More <span class="arrow">▼</span>';
      button.classList.remove('active');
    } else {
      extraContent.classList.add('show');
      button.innerHTML = 'Read Less <span class="arrow">▼</span>';
      button.classList.add('active');
    }
  }

// 


  function handleLogin(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const errorModal = document.getElementById('errorModal');
    const successModal = document.getElementById('successModal');
    
    if (password === 'lamar123') {

      successModal.classList.add('show');
      

      setTimeout(() => {
        successModal.classList.remove('show');
     
        alert('Redirecting to dashboard...');
      }, 2000);
    } else {
    
      errorModal.classList.add('show');
    }
  }