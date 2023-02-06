import "../scss/style.scss";
import includeHTML from "../js/common";

function tooltip(){
  const tooltip = document.querySelectorAll('[role="tooltip"]');
  for(let i = 0; i < tooltip.length; i++){
    const tooltipBtn = document.querySelector(`[aria-describedby="${tooltip[i].id}"]`);
    const tooltipBtnLeft = tooltipBtn.getBoundingClientRect().left;
    const tooltipBtnTop = tooltipBtn.getBoundingClientRect().top;
    const tooltipContent = tooltip[i].querySelector('.tooltip-content');
    const tooltipBtnClose = tooltip[i].querySelector('.btn-tooltip-close');

    tooltipBtn.addEventListener('click', function(){
      if (!tooltip[i].classList.contains('is-show')){
        tooltipShow();
      }else {
        tooltipHide();
      }
    })
    tooltip[i].addEventListener('click', function(e){
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
      tooltip[i].classList.add('is-show');
      tooltip[i].setAttribute('aria-hidden', 'false');
      tooltip[i].style = `left: ${tooltipBtnLeft - 20}px; top: ${tooltipBtnTop + 34}px`;
    }
    function tooltipHide() {
      tooltip[i].classList.remove('is-show');
      tooltip[i].setAttribute('aria-hidden', 'true');
      tooltip[i].style = '';
      tooltipBtn.focus();
    }
  }
}


window.addEventListener('DOMContentLoaded', function(){
  includeHTML('navTooltip'); // header
  tooltip();
});
