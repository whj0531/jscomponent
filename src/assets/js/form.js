import "../scss/style.scss";
import includeHTML from "../js/common";

// checkbox
function checkboxAll(name){
  const fieldsetName = document.querySelector(`[name="${name}"]`);
  const formGroup = fieldsetName.querySelectorAll('.form-checkbox-group');
  let allChecked; // all el
  let allCheckedValue; // all val
  const checkboxs = []; // input el
  let selected = []; // input val

  formGroup.forEach((item) => { // item => div.group
    const input = item.querySelector('input[type="checkbox"]'); // input
    if (input.value === 'all'){
      allChecked = input;
      input.checked ? allCheckedValue = true : allCheckedValue = false;
    }else {
      checkboxs.push(input);
      input.checked ? selected.push(input.value) : null;
    }
  });
  // 전체체크
  allChecked.addEventListener('change', function(){
    selected.splice(0, selected.length);
    checkboxs.forEach((input) => {
      if (this.checked){
        input.checked = true;
        allCheckedValue = true;
        selected.push(input.value);
        this.parentElement.classList.add('is-active');
        input.parentElement.classList.add('is-active');
      }else {
        input.checked = false;
        allCheckedValue = false;
        for(let i = 0; i < selected.length; i++) {
          if (selected[i] === input.value){
            selected.splice(i, 1);
            i--;
          }
        }
        this.parentElement.classList.remove('is-active');
        input.parentElement.classList.remove('is-active');
      }
    })
    result(); // 결과 미리보기
  });
  // 개별체크
  checkboxs.forEach((input, index, array) => {
    input.addEventListener('change', function(){
      if (this.checked) {
        selected.push(this.value);
        this.parentElement.classList.add('is-active');
      }else {
        for(let i = 0; i < selected.length; i++) {
          if (selected[i] === this.value){
            selected.splice(i, 1);
            i--;
          }
        }
        this.parentElement.classList.remove('is-active');
      }
      if (array.length === selected.length){
        allChecked.checked = true;
        allChecked.parentElement.classList.add('is-active');
      }else {
        allChecked.checked = false;
        allChecked.parentElement.classList.remove('is-active');
      }
      result(); // 결과 미리보기
    })
  });
   // 결과 미리보기
  result();
  function result(){ 
    document.getElementById('checkboxAllValue').innerHTML = allCheckedValue;
    document.getElementById('checkboxValue').innerHTML = selected;
  }
}

// radio
function radioCheck(name){
  const fieldsetName = document.querySelector(`[name="${name}"]`);
  const radioGroup = fieldsetName.querySelectorAll('.form-radio-group');
  const radioInput = []; // el
  let selected = null; // val
  radioGroup.forEach((item) => { // item => div.group
    const input = item.querySelector('input[type="radio"]'); // input
    radioInput.push(input);
    if (input.checked){
      selected = input.value;
    }
  });
  radioInput.forEach((input) => {
    input.addEventListener('change', function(){
      if (this.checked){
        selected = this.value;
        this.parentElement.classList.add('is-active');
      }
      radioInput.forEach((item) => {
        if (!item.checked){
          item.parentElement.classList.remove('is-active');
        }
      })
      result();
    });
  });
  result();
  function result(){
    document.getElementById('radioValue').innerHTML = selected;
  }
}

// input
function inputCheck(){
  const inputGroup = document.querySelectorAll('.form-input-group');
  inputGroup.forEach((item) => {
    const input = item.querySelector('input[type="text"]');
    const btnClose = item.querySelector('.btn-close');
    input.addEventListener('focus', e => valueCheck(e.target));
    input.addEventListener('keyup', e => valueCheck(e.target));
    input.addEventListener('blur', function(){
      btnClose.classList.remove('is-show');
    });
    btnClose.addEventListener('touchstart', function(){
      this.previousElementSibling.value = '';
      this.previousElementSibling.focus();
    });
    function valueCheck(target){
      target.value !== '' ? btnClose.classList.add('is-show') : btnClose.classList.remove('is-show');
      console.log(target.value)
    }
  })
}

window.addEventListener('DOMContentLoaded', function(){
  includeHTML('navForm'); // header
  checkboxAll('checkboxAll');
  radioCheck('radioGroup');
  inputCheck();
});
