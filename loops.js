alert('Olá! Seja Bem Vindo!')

const numeroCerto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let tentativa = 0; tentativa < 3; tentativa++){ 

    chute = prompt("Tente adivinhar o número de 0 a 10:");

    if(chute == numeroCerto){
        alert(`Parabéns 🎉, você acertou! O número era ${numeroCerto}.`);
        acertou = true; 
        break;       
    } 

    else {
    alert("Número errado 👎🏽, tente novamente!");
    }    
}

if(!acertou){
    alert(`Infelizmente, você não acertou 😥. O número era ${numeroCerto}. `);
}

alert('Fim de jogo. Obrigada por participar!');