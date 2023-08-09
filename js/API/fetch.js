import { calculatePage } from "../all-page/calculate-page.js";
import { currentPage } from "../all-page/print-generator.js";
import { numberPage, $, $input } from "../const.js";
import { showImage } from "../func/show-image.js";

export let paginador;
const input = $('#termino') ?? Error

export const searchImage = () => {
   const search = $input.value;
   const API_KEY = '38396876-d0f3e62995378dcacd2a54fe9';
   const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${numberPage}&page=${currentPage}`;

   fetch(URL)
      .then(response => response.json())
      .then(data => {

         //Extrar de la API
         const { hits, totalHits } = data;

         paginador = calculatePage(totalHits);

         showImage(hits);
      })
}