(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mobail-open]'),
      closeModalBtn: document.querySelector('[data-mobail-close]'),
      modal: document.querySelector('[data-mobail-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();