import { Error } from "./func/get-data.js";
export const $ = selector => document.querySelector(selector);
export const $createElement = create => document.createElement(create);

//Seleccionar los elementos
export const $form = $('#formulario') ?? Error;
export const $input = $('#termino') ?? Error;
export const $showResult = $('#resultado') ?? Error;
export const $showPages = $('#paginacion') ?? Error;

//Numero de pagina del paginador 
export const numberPage = 40;



