import "../scss/style.scss";
import includeHTML from "../js/common";

function tab(){
  const tabEl = document.querySelectorAll('.tab');

  tabEl.forEach(tab => {
    const tabBtns = tab.querySelectorAll('.tab-link-btn');
    const tabPanels = tab.querySelectorAll('.tab-content-panel');
    tabBtns.forEach((btn, i) => {
      const tabPanel = tabPanels[i]
      // 초기 active
      if (btn.classList.contains('is-active')){
        btn.ariaSelected = 'true'
        btn.setAttribute('tabindex', 0);
        if (!tabPanel.classList.contains('is-active')){
          tabPanel.classList.add('is-active');
        }
      }
      // tab event
      btn.addEventListener('click', function(){
        if (!this.classList.contains('is-active')){
          for(let j = 0; j < tabBtns.length; j++){
            tabBtns[j].ariaSelected = 'false'
            tabBtns[j].setAttribute('tabindex', -1);
            tabBtns[j].classList.remove('is-active');
            tabPanels[j].classList.remove('is-active');
          }
        }
        this.classList.add('is-active');
        this.ariaSelected = 'true'
        this.setAttribute('tabindex', 0);
        tabPanel.classList.add('is-active');
      })
    })
    // 접근성 실행
    tabA11y(tabBtns);
  })
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