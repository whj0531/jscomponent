
import "../scss/style.scss";
import includeHTML from "../js/common";

function toast(id){
  if (id !== null){
    const toastBtn = document.getElementById(`${id}`);
    toastBtn.addEventListener('click', function(e){
      const toastContent = document.getElementById(this.getAttribute('data-toggle'));
      toastContent.classList.add('is-show');
      setTimeout(() => {
        toastContent.classList.remove('is-show');
        // 접근성
        toastA11y(e.target);
      }, 3000);
    })
  }
}
// 접근성
function toastA11y(target){
  target.focus();
}

window.addEventListener('DOMContentLoaded', function(){
  includeHTML('navToast'); // header
  toast('toastBtn01');
});