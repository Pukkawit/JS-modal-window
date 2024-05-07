'use strict';

// Get references to modal elements
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   console.log('Button clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// SELECT INDIVIDUAL BUTTONS
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[0].addEventListener('click', function () {
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  btnsOpenModal[1].addEventListener('click', function () {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modal3.style.top = '0';
  });
  btnsOpenModal[2].addEventListener('click', function () {
    modal3.classList.remove('hidden');
    modal3.style.top = '0';
    overlay.classList.remove('hidden');
  });
}

// CLOSE MODAL BY CLICKING CLOSE BUTTON
for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[0].addEventListener('click', function () {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  btnsCloseModal[1].addEventListener('click', function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  btnsCloseModal[2].addEventListener('click', function () {
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

// btnCloseModal.addEventListener('click', function () {
//   modal1.classList.add('hidden');
//   modal2.classList.add('hidden');
//   modal3.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// CLOSE MODAL BY CLICKING OVERLAY
document.addEventListener('click', function (event) {
  const isclickOverlay = overlay.contains(event.target);

  if (isclickOverlay) {
    overlay.classList.add('hidden');
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
  }
});

// KEYPRESS EVENT // Escape key press
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    // CHECK IF THE MODAL CONTAINS A CLASS
    if (!modal1.classList.contains('hidden')) {
      overlay.classList.add('hidden');
      modal1.classList.add('hidden');
    }
    if (!modal2.classList.contains('hidden')) {
      overlay.classList.add('hidden');
      modal2.classList.add('hidden');
    }
    if (!modal3.classList.contains('hidden')) {
      overlay.classList.add('hidden');
      modal3.classList.add('hidden');
    }
  }
});
