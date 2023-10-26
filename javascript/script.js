function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const images = document.querySelectorAll('.image');
  let currentIndex = 0;

  function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
  }

  function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
  }

  function updateSlider() {
      images.forEach(image => image.classList.remove('active'));
      images[currentIndex].classList.add('active');
      const offset = -currentIndex * images[0].width;
      document.getElementById('image-slider').style.transform = `translateX(${offset}px)`;
  }

  function zoomEffect() {
      const activeImage = images[currentIndex];
      activeImage.style.transform = 'scale(1.1)';
      setTimeout(() => {
          activeImage.style.transform = 'scale(1)';
      }, 2500); // Zoom zurücksetzen nach 2,5 Sekunden
  }

  function autoChangeImage() {
      setInterval(() => {
          nextImage();
          zoomEffect(); // Starte den Zoom-Effekt
      }, 5000); // Automatischer Wechsel alle 5 Sekunden
  }

  autoChangeImage(); // Starte den automatischen Bildwechsel