import "../scss/style.scss";
import includeHTML from "../js/common";

function tooltip(){
  const tooltip = document.querySelectorAll('[role="tooltip"]');
  tooltip.forEach((item) => {
    const tooltipBtn = document.querySelector(`[aria-describedby="${item.id}"]`);
    const tooltipBtnLeft = tooltipBtn.getBoundingClientRect().left;
    const tooltipBtnTop = tooltipBtn.getBoundingClientRect().top;
    const tooltipContent = item.querySelector('.tooltip-content');
    const tooltipBtnClose = item.querySelector('.btn-tooltip-close');

    tooltipBtn.addEventListener('click', function(){
      if (!item.classList.contains('is-show')){
        tooltipShow();
      }else {
        tooltipHide();
      }
    })
    item.addEventListener('click', function(e){
      e.stopPropagation();
      if (this.classList.contains('is-show')){
        tooltipHide();
      }
    })
    tooltipContent.addEventListener('click', function(e){
      e.stopPropagation();
    })
    if (tooltipBtnClose !== null) {
      tooltipBtnClose.addEventListener('click', function(){
        tooltipHide();
      })
    }
    
    function tooltipShow() {
      item.classList.add('is-show');
      item.setAttribute('aria-hidden', 'false');
      item.style = `left: ${tooltipBtnLeft - 20}px; top: ${tooltipBtnTop + 34}px`;
    }
    function tooltipHide() {
      item.classList.remove('is-show');
      item.setAttribute('aria-hidden', 'true');
      item.style = '';
      tooltipBtn.focus();
    }
  })
}


window.addEventListener('DOMContentLoaded', function(){
  includeHTML('navTooltip'); // header
  tooltip();
});
