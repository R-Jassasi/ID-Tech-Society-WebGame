
// Reused code from my portfolio

// JavaScript to handle popup functionality - with the help of chatGPT
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

  // notification pop up models
  setTimeout(function () {
    const fifthModal = document.getElementById('popup-modal-5');
    fifthModal.style.display = 'block';

    // Close button functionality for the fifth modal (notification)
    const closeButtonFifth = fifthModal.querySelector('.close-btn');
    closeButtonFifth.addEventListener('click', function () {
      fifthModal.style.display = 'none';
    });

    // Yes button
    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', function () {
      // Show the first popup modal (popup-modal-1)
      const firstModal = document.getElementById('popup-modal-1');
      firstModal.style.display = 'block';

      // Close the fifth modal
      fifthModal.style.display = 'none';

    });

    // No button
    const laterButton = document.getElementById('noButton');
    laterButton.addEventListener('click', function () {
      // Close the fifth modal
      fifthModal.style.display = 'none';

    });
  }, 5000); // show in 5 sec


  // this is to open AI Bot from email
  // Button functionality for "Yes" button
  const yesButton = document.getElementById('aiButton');
  yesButton.addEventListener('click', function () {
    // Show the second popup (AI)
    const secondModal = document.getElementById('popup-modal-2');
    secondModal.style.display = 'block';

    const firstModal = document.getElementById('popup-modal-1');
    // Close the first modal (email)
    firstModal.style.display = 'none';
  });
});





