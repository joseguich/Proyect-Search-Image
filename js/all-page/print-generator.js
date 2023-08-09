import { paginador, searchImage } from "../API/fetch.js";
import { $createElement, $showPages } from "../const.js";
import { cleanWeb } from "../func/clean-web.js";
import { createGenerator } from "./generator.js";

export let iterador;
export let currentPage = 1;

export const printPager = () => {
   cleanWeb($showPages);
   iterador = createGenerator(paginador);

   while (true) {

      const { value, done } = iterador.next();

      if (done) return;

      //Generar un button para el paginador 
      const buttonPages = $createElement('A');
      buttonPages.href = '#';
      buttonPages.dataset.page = value;
      buttonPages.textContent = value;
      buttonPages.classList.add('siguiente', 'inline-block', 'cursor-pointer', 'ml-2', 'mt-3', 'py-2', 'px-4', 'border-solid', 'border-2', 'border-amber-100', 'text-white', 'hover:bg-teal-500');
      buttonPages.onclick = () => {
         currentPage = value;
         searchImage();
      }
      $showPages.appendChild(buttonPages);
   }
}