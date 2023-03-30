import "../scss/style.scss";
import includeHTML from "../js/common";

function accordion(){
  const accEl = document.querySelectorAll('.accordion');
  // accordion Element
  accEl.forEach(accordion => {
    const acc = accordion
    const accBtns = acc.querySelectorAll('.accordion-btn');
    // accordion btns
    accBtns.forEach((btn) => {
      // 초기 active
      if(btn.classList.contains('is-active')){
        accOpen(btn);
      }
      // accordion btn
      btn.addEventListener('click', function(){
        if (acc.classList.contains('onlyone')){ // onlyone
          if(this.ariaExpanded === 'false'){
            for(let k = 0; k < accBtns.length; k++){
                accClose(accBtns[k]);
            }
            accOpen(this);
          }else {
            accClose(this);
          }
        }else {
          this.ariaExpanded === 'false' ? accOpen(this):accClose(this);
        }
      })
    })
  });
  function accOpen(target){
    const accBody = target.parentElement.nextElementSibling
    const arrow = target.querySelector('.icon span');
    target.ariaExpanded = 'true';
    accBody.style.height = `${accBody.scrollHeight}px`;
    arrow.innerText = '열림';
  }
  function accClose(target){
    const accBody = target.parentElement.nextElementSibling
    const arrow = target.querySelector('.icon span');
    target.ariaExpanded = 'false';
    accBody.style.height = `0`;
    arrow.innerText = '닫힘';
  }
}
window.addEventListener('DOMContentLoaded', function(){
    includeHTML('navAccordion'); // header
    accordion();
});
