console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array( //Criando Array
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)
listaDeDestinos.push(`Ribeirão Preto`) // adicionando um item na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //Deletando São paulo da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);