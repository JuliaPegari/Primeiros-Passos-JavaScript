console.log("Trabalhando com variáveis");
//JS é case sensitive

//let nome = "Ricardo"; // A variavel let é possivel alterar o valor que foi colocado nela
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//Duas maneiras de concatenação
console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador + 1;

// nome = nome + sobrenome; //A concatenação só é permitida se a variável esta atribuida como let
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando
idade = 26; //atribuindo valor
idade = idade+1;
console.log(idade);