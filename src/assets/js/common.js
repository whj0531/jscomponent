
// import html
export default function includeHTML(value) {
  let z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML(value);
          headerNav(value);
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

// header
function headerNav(value) {
  const headerBtn = document.querySelectorAll('.btn-nav');
  for(let i = 0; i < headerBtn.length; i++){
    const nav = document.querySelector('nav');
    let navScroll;
    nav.addEventListener('scroll', function(){
      navScroll = this.scrollLeft;
    })

    if (value !== ''){
      headerBtn[i].ariaSelected = 'false';
      if (headerBtn[i].id === value){
        const target = document.querySelector(`#${value}`);
        target.classList.add('is-active');
        target.ariaSelected = 'true';

        nav.scrollTo({
          left: sessionStorage.getItem('scrollLeft'),
        });
      }
    }
    
    headerBtn[i].addEventListener('click', function(){
      navScroll = this.parentElement.scrollLeft;
      sessionStorage.setItem('scrollLeft', navScroll);
      location.href = this.getAttribute('data-url');
    });
  }
  
}
// function headerScroll(value){
  
// }
window.addEventListener('DOMContentLoaded', function(){
  includeHTML(''); // header
});