console.log(`Trabalhando com condicionais`);

console.log("Destinos possíveis");

const listaDeDestinos = new Array( //Criando Array
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)

const idadeComprador1 = 15;
const idadeComprador2 = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(listaDeDestinos);

// if(idadeComprador1 >=18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //Deletando São paulo da lista
// } else if(estaAcompanhada == true){
//     //A pessoa é menor de idade
//     console.log("Comprador está acompanhdo de um responsável");
//     listaDeDestinos.splice(1,1); //Deletando São paulo da lista
// }else{
//     console.log("Não é maior de Idade e não posso vender")
    
// };

if(idadeComprador1 >=18 || estaAcompanhada==true){
    console.log("Boa viagem");
    listaDeDestinos.splice(2,1); //Deletando São paulo da lista
}else{
    console.log("Não é maior de Idade e não posso vender");
};

console.log("Embarque: \n\n");

if(idadeComprador1 >= 18 && temPassagemComprada){
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

//operadores
console.log(idadeComprador1 > 18);
console.log(idadeComprador1 < 18);
console.log(idadeComprador1 >= 18);
console.log(idadeComprador1 <= 18);
console.log(idadeComprador1 == 18);
