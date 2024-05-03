document.addEventListener('DOMContentLoaded', () => { //fixed why the scrolling didn't work || Check DOM Content Ready: If your script is executed before the DOM is fully loaded, the carousel variable may not reference the correct element.
  
    function startAnimation(e) {
      if (!isAnimating) {
        isAnimating = true;
        const scrollDirection = e.clientX > carousel.offsetWidth / 2 ? 1 : -1;
        const scrollAmount = scrollDirection * scrollSpeed;
        cancelAnimationFrame(requestId);
        requestId = requestAnimationFrame(() => {
          animateScroll(carousel, scrollAmount);
          isAnimating = false;
        });
      }
    }
  
    function animateScroll(element, amount) {
      let start = element.scrollLeft;
      let currentTime = 0;
      const increment = 5; // Smaller values make smoother animation
      const duration = 200; // Duration of the animation in milliseconds
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      function scroll() {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, amount, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
          requestAnimationFrame(scroll);
        }
      }
      scroll();
    }
  });
  
  
  
  //text animation - code snippet
  function animate(options) {
  
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // текущее состояние анимации
      var progress = options.timing(timeFraction)
  
      options.draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
  
  // JavaScript to handle popup functionality - from chatGPT
  document.addEventListener('DOMContentLoaded', function () {
    // Get all popup triggers
    const popupTriggers = document.querySelectorAll('.popup-trigger');
  
    // Attach click event listener to each popup trigger
    popupTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
  
        // Get the target popup modal ID
        const targetId = this.getAttribute('data-target');
        const targetModal = document.getElementById(targetId);
  
        // Close any open modals
        const openModals = document.querySelectorAll('.popup-modal');
        openModals.forEach(function (modal) {
          modal.style.display = 'none';
        });
  
        // Show the target popup modal
        targetModal.style.display = 'block';
  
        // Close button functionality
        const closeButton = targetModal.querySelector('.close-btn');
        closeButton.addEventListener('click', function () {
          targetModal.style.display = 'none';
        });
      });
    });
  });
  

  