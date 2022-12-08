import { PopupWithBurger } from "../components/PopupWithBurger.js";

const popupHeader = new PopupWithBurger(".popup_type_header");

popupHeader.burgerButton.addEventListener(
	"mousedown",
	popupHeader.toggleBurgerMenu
);

$(document).ready(function () {

  $.ajax({
    url: 'https://baconipsum.com/api/?type=lucky',              
    dataType : "json",                      
    success: function (data) { 
      const dataCount = data.length-1;
      document.querySelector('.intro__subtitle').textContent = data[Math.floor(Math.random() * (dataCount + 1))];
    },
    error: function (jqXHR, exception) {
      if (jqXHR.status === 0) {
        console.log('Not connect. Verify Network.');
      } else if (jqXHR.status == 404) {
        console.log('Requested page not found (404).');
      } else if (jqXHR.status == 500) {
        console.log('Internal Server Error (500).');
      } else if (exception === 'parsererror') {
        console.log('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        console.log('Time out error.');
      } else if (exception === 'abort') {
        console.log('Ajax request aborted.');
      } else {
        console.log('Uncaught Error. ' + jqXHR.responseText);
      }
    }
  });

  
  $('[name=country]').bind("change keyup input click", function () {
    if (this.value.match(/[^a-zа-яё0-9_-]/iu)) {
      this.value = this.value.replace(/[^a-zа-яё0-9_-]/iu, '');
    }
  })

});

