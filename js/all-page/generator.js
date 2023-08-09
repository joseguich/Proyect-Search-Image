export function* createGenerator(pagina) {
   for (let i = 1; i <= pagina; i++) {
      yield i;
   }
}