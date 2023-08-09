import { numberPage } from "../const.js"

export const calculatePage = totalPage => {
   return parseInt(Math.ceil(totalPage / numberPage));
}
