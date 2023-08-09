import { $form } from "../const.js";
import { validatorSearch } from "../func/validate-search.js";
export default class App {
   constructor() {
      this.init();
   }

   init() {
      window.onload = () => {
         $form.addEventListener('submit', validatorSearch);
      }
   }
}