import "../scss/style.scss";
import includeHTML from "../js/common";

function tab(){
  const tabEl = document.getElementsByClassName('tab');
  for(let i = 0; i < tabEl.length; i++){
    const tab = tabEl[i];
    const tabBtns = tab.querySelectorAll('.tab-link-btn');
    const tabPanels = tab.querySelectorAll('.tab-content-panel');
    for(let j = 0; j < tabBtns.length; j++){
      const tabBtn = tabBtns[j];
      const tabPanel = tabPanels[j];
      // 초기 active
      if (tabBtn.classList.contains('is-active')){
        tabBtn.ariaSelected = 'true'
        tabBtn.setAttribute('tabindex', 0);
        if (!tabPanel.classList.contains('is-active')){
          tabPanel.classList.add('is-active');
        }
      }
      // tab event
      tabBtn.addEventListener('click', function(){
        if (!tabBtn.classList.contains('is-active')){
          for(let l = 0; l < tabBtns.length; l++){
            tabBtns[l].ariaSelected = 'false'
            tabBtns[l].setAttribute('tabindex', -1);
            tabBtns[l].classList.remove('is-active');
            tabPanels[l].classList.remove('is-active');
          }
        }
        tabBtn.classList.add('is-active');
        tabBtn.ariaSelected = 'true'
        tabBtn.setAttribute('tabindex', 0);
        tabPanel.classList.add('is-active');
      })
    }
    // 접근성 실행
    tabA11y(tabBtns);
  }
}
// 접근성
function tabA11y(tabBtns){
  for(let i = 0; i < tabBtns.length; i++){
    const tabBtn = tabBtns[i];
    tabBtn.addEventListener('keydown', function(e){
      const prev = e.target.previousElementSibling;
      const next = e.target.nextElementSibling;
      const first = tabBtns[0];
      const last = tabBtns[tabBtns.length - 1];
      if (e.keyCode === 37){
        if (prev !== null){
          prev.focus();
          prev.click();
        }else {
          last.focus();
          last.click();
        }
      }
      if (e.keyCode === 39){
        if (next !== null){
          next.focus();
          next.click();
        }else {
          first.focus();
          first.click();
        }
      }
    })
  }
}

window.addEventListener('DOMContentLoaded', function(){
  includeHTML('navTab'); // header
  tab();
});