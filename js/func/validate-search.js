import { $input } from "../const.js";
import { showAlert } from "./show-alert.js";
import { searchImage } from "../API/fetch.js";

export const validatorSearch = (e) => {
   e.preventDefault();

   const { value } = $input;

   if (value === "") {
      showAlert('Enter what you want to search.');
      return;
   }

   searchImage();

}