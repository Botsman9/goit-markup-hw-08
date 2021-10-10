(() => {
    const refs = {
      openModalBtn: document.querySelector('[mobail-modal-open]'),
      closeModalBtn: document.querySelector('[mobail-modal-close]'),
      modal: document.querySelector('[mobail-data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();