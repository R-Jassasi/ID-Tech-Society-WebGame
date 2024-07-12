//tutorials used
//https://www.youtube.com/watch?v=TAB_v6yBXIE&ab_channel=KevinPowell
//troubleshooting problems: ChatGPT & Stackoverflow.com 
//vasic styling: copied from my previous project (personal protfolio for DES). Can be viewed in: rahilaljassasi.com


//handiling pop up modal logic for buttons
window.onload = function () {
    const openModal = document.querySelectorAll('[data-modal-target]');
    const closeModal = document.querySelectorAll('[data-close-button]');
    const openAI = document.querySelector('#aiButton');
    const openEmail = document.querySelector('#emailBtn')
   





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

    //Game START 
    // notification pop up models  https://stackoverflow.com/questions/16836075/timed-alert-box-pop-up-for-website
    setTimeout(function () {
        const introwindow = document.querySelector('#intro');
        const startGame = document.querySelector('#startButton')
        const alertAudio = new Audio('./Assets/level-up-2-199574.mp3');

        if (introwindow) {

            introwindow.showModal();

            startGame.addEventListener('click', () => {
                introwindow.close();
                let intro = 1; //condition the other pops up after this is closed

                
                if (intro === 1) {
                    setTimeout(function () {
                        const notification = document.querySelector('#notification');
                        if (notification) {
                            alertAudio.play();
                            notification.showModal();

                            //yes
                            openEmail.addEventListener('click', () => {
                                modal1.showModal();
                                notification.close();
                            })


                            //no - close btn in html

                        }
                    }, 2000); //after 2s
                }
            });
        }
    }, 100); 








}
