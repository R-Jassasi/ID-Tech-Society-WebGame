//tutorials used
//https://www.youtube.com/watch?v=TAB_v6yBXIE&ab_channel=KevinPowell
//troubleshooting problems: ChatGPT & Stackoverflow.com 
//vasic styling: copied from my previous project (personal protfolio for DES). Can be viewed in: rahilaljassasi.com


//handiling pop up modal logic for buttons
window.onload = function () {
    const openModal = document.querySelectorAll('[data-modal-target]');
    const closeModal = document.querySelectorAll('[data-close-button]');
    const openAI = document.querySelector('#aiButton')
    const notification = document.querySelector('#notification');
    var alertAudio = new Audio('https://freesound.org/data/previews/254/254316_4062622-lq.mp3');



    //open modals by inquiring modal data
    openModal.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            modal.showModal();
        });
    });

    //closing buttons for all windows
    closeModal.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('dialog');
            modal.close();
        })
    })

    //email action button to open AI Bot
    openAI.addEventListener('click', () => {
        modal2.showModal();
        modal1.close();
    })

    // notification pop up models  https://stackoverflow.com/questions/16836075/timed-alert-box-pop-up-for-website
    setTimeout(function () {

        alertAudio.play();

        notification.showModal();

        // Yes button
        

        // No button
        

    }, 5000); //show after 5 seconds



}
