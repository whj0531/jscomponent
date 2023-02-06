import "../scss/style.scss";
import includeHTML from "../js/common";

function modalAction(){
  const modalBtn = document.querySelectorAll('[data-toggle="modal"]');
  for (let i = 0; i < modalBtn.length; i++) {
    const modalActionBtn = modalBtn[i];
    const modalTarget = document.getElementById(`${modalBtn[i].getAttribute('data-target')}`);
    modalActionBtn.addEventListener('click', function(){
      showModal(this, modalTarget);
    })
  }
}
function dimModal(btn, content){
  const dimDiv = document.createElement('div');
  dimDiv.id = `${content.id}Dim`
  dimDiv.classList.add('modal-dim');
  document.body.appendChild(dimDiv);

  const divTarget = document.getElementById(`${dimDiv.id}`);
  divTarget.addEventListener('click', function(e){
    e.stopPropagation();
    closeModal(btn, content);
  })
}
// show
function showModal(btn, content){
  const modalBtn = btn;
  const modal = content;
  document.body.style = 'overflow: hidden';
  document.body.appendChild(modal);

  if (!modal.classList.contains('is-show')){
    modal.classList.add('is-show');
    dimModal(modalBtn, modal);
    // 접근성 실행
    modalA11y(modalBtn, modal);
  }
  // close
  const btnClose = modal.querySelector('.btn-close');
  btnClose.addEventListener('click', function(){
    if (modal.classList.contains('is-show')){
      closeModal(modalBtn, modal);
    }
  })
  // result button
  const dataActionClose = modal.querySelector('[data-action="close"]');
  if (dataActionClose !== null){
    dataActionClose.addEventListener('click', function(){
      if (modal.classList.contains('is-show')){
        closeModal(modalBtn, modal);
      }
    })
  }

}
// close
function closeModal(btn, content){
  const modalBtn = btn;
  const modal = content;
  const divTarget = document.getElementById(`${content.id}Dim`);
  
  document.body.style = '';
  document.body.removeChild(modal);
  
  if (modal.classList.contains('is-show')){
    modal.classList.remove('is-show');
    divTarget.remove();
    // 접근성
    modalBtn.focus();
  }
  
}
// 접근성
function modalA11y(btn, content) {
  const modalBtn = btn;
  const modal = content;
  const modalContent = modal.querySelector('.modal-content');
  const focusEl = modal.querySelectorAll('.btn');
  const first = focusEl[0];
  const last = focusEl[focusEl.length - 1];

  modalContent.focus();
  modalContent.setAttribute('tabindex', '-1');

  last.addEventListener('keydown', function(e){
    if (e.key === 'Tab') {
      modalContent.focus();
    }
    if (e.shiftKey && e.key === 'Tab') {
      this.focus();
    }
  })
  first.addEventListener('keydown', function(e){
    if (e.shiftKey && e.key === 'Tab') {
      last.focus();
      e.preventDefault();
    }
  })
  modalContent.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      closeModal(modalBtn, modal);
    }
  })
}

window.addEventListener('DOMContentLoaded', function(){
  includeHTML('navModal'); // header
  modalAction();
});
