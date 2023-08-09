import { printPager } from "../all-page/print-generator.js";
import { $input, $showResult } from "../const.js";
import { cleanWeb } from "./clean-web.js";
import { showAlert } from "./show-alert.js";

export const showImage = images => {
   cleanWeb($showResult);

   images.forEach(image => {
      const { previewURL, likes, views, largeImageURL, } = image;

      $showResult.innerHTML += `
      <div class =" w-1/2 md:w-1/3 lg:w-1/4 p-2">
         <div class ="bg-white">
            <img class = "w-full" src="${previewURL}">
               <div class = "p-2">
               <p class = "font-bold"> ${likes} <span class ="font-light"> <i class="fa-sharp fa-regular fa-thumbs-up fa-lg"></i> I Likes</span></p>
               <p class = "font-bold"> ${views} <span class = "font-light"> <i class="fa-sharp fa-solid fa-eye fa-lg"></i> View</span></p>
               <a class = "block w-full text-white text-center py-1 mt-2 rounded bg-teal-500 hover:bg-teal-400" href ="${largeImageURL}" target ="_blank"> View Image <i class="fa-regular fa-eye fa-xl"></i> </a>
             </div>
         </div>
      </div>`;
   });

   printPager();

   //Si no hay imagnes
   if (!images.length) {
      showAlert(`Search not found ${$input.value}`);
      return;
   }
}