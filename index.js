import PromptSync from "prompt-sync";
const input = PromptSync();
let tentativas = 0;
const numeroAleatorio = Math.round(Math.random() * (100 - 5) + 5);
let numero = 0;

while (numero != numeroAleatorio) {
    numero = parseInt(input("Digite um numero inteiro: "));

    if(numero > 100) {
        console.log("Digite um numero entre 0 ate 100");
        break;
    }
    if(numero > numeroAleatorio) {
        console.log("Numero digitado é maior que o numero gerado");
        tentativas++;
        continue;
    } else if(numero < numeroAleatorio) {
        console.log("Numero digitado é menor que o numero gerado ");
        tentativas++;
        continue;
    } else {
        console.log("Numero encontrado: " + numeroAleatorio);
        console.log("Tentativas: ", tentativas);
        break;
    }
}