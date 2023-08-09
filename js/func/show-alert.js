import { $createElement, $form, $ } from "../const.js"

export const showAlert = message => {

   const removeAlert = $('.remove-alert');
   if (!removeAlert) {
      const messageAlert = $createElement('P');
      messageAlert.classList.add('remove-alert', 'bg-red-100', 'border-red-400', 'text-red-700', 'text-center', 'my-4', 'mb-3', 'py-3', 'rounded');
      messageAlert.innerHTML = `<strong class = "font-bold">!Error!</strong>
                                 <span class = "block">${message}</span>`

      $form.appendChild(messageAlert);

      setTimeout(() => {
         messageAlert.remove();
      }, 3000);
   }



}