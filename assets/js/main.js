
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` /* pegando a url da api */


/* Arrow funtion */
fetch(url)
    .then((response) => response.json()) /* quando o fecth de certo chame a função response (body convertido em json) */
    .then((jsonBody) => console.log(jsonBody)) /* printando o body */
    .catch((error) => console.error(error))


