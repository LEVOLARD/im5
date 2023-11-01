// IMAGE SWAP

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

  var acc = document.getElementsByClassName("accordion");
var i;

//ACCORDION

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }