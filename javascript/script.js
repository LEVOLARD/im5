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
      const offset = -currentIndex * images[0].width; // Breite des aktuellen Bildes
      document.getElementById('image-slider').style.transform = `translateX(${offset}px)`;
  }