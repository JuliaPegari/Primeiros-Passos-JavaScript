console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array( //Criando Array
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)

const idadeComprador1 = 15;
const idadeComprador2 = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador1 >=18 || estaAcompanhada==true;

let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existente");
        destinoExiste = true;
        break;
    }
    contador += 1;
}


console.log(`\nDestino existe: ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log("\nBoa Viagem");
}else{
    console.log("\nDesculpe tivemos um erro");
}

for(let i = 0 ; cont < 3; i++){
    if(listaDeDestinos[i] == destino){
        console.log("Destino Existente");
        destinoExiste = true;
    }
}