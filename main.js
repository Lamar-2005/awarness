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

  var galleryImages = [
    {
      src: 'images/gallery1.jpg',
      caption: 'The weight of pressure and expectations'
    },
    {
      src: 'images/slider 1.jpg',
      caption: 'Finding strength in team support'
    },
    {
      src: 'images/slider 2.jpg',
      caption: 'Emotional vulnerability in sports'
    },
    {
      src: 'images/slider 3.jpg',
      caption: 'Recovery and therapeutic support'
    },
    {
      src: 'images/gallery2.jpg',
      caption: 'Mental wellness through mindfulness'
    },
    {
      src: 'images/gallery3.jpg',
      caption: 'The journey of rehabilitation'
    },
    {
      src: 'images/gallery4.jpg',
      caption: 'Overcoming physical and mental challenges'
    },
    {
      src: 'images/gallery5.jpg.jpg',
      caption: 'Finding peace and balance'
    },
    
   
  ];

  function loadGallery() {
    var grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';    
    
    for (var i = 0; i < galleryImages.length; i++) {
      var image = galleryImages[i];
      var item = document.createElement('div');
      item.className = 'gallery-item';
      item.setAttribute('data-index', i);
      item.onclick = function() {
        var index = parseInt(this.getAttribute('data-index'));
        openLightbox(index);
      };
      
      var img = document.createElement('img');
      img.src = image.src;
      img.alt = image.caption;
      
      var caption = document.createElement('div');
      caption.className = 'gallery-caption';
      caption.textContent = image.caption;
      
      item.appendChild(img);
      item.appendChild(caption);
      grid.appendChild(item);
    }
  }

  function openLightbox(index) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxImg.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].caption;
    lightbox.classList.add('active');
    
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

 
  window.addEventListener('load', loadGallery);