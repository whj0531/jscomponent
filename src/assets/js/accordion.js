import "../scss/style.scss";
import includeHTML from "../js/common";

function accordion(){
  const accEl = document.getElementsByClassName('accordion');
  // accordions
  for (let i = 0; i < accEl.length; i++) {
    const acc = accEl[i];
    const accItem = acc.getElementsByClassName('accordion-item');
    const accBtns = acc.querySelectorAll('.accordion-btn');
      
    // items
    for (let j = 0; j < accItem.length; j++) {
      const accBtn = accItem[j].querySelector('.accordion-btn');
      // 초기 active
      for(let l = 0; l < accBtns.length; l++){
        if(accBtns[l].classList.contains('is-active')){
          accOpen(accBtns[l]);
        }
      }
      accBtn.addEventListener('click', function(){
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
  }
}
window.addEventListener('DOMContentLoaded', function(){
    includeHTML('navAccordion'); // header
    accordion();
});
