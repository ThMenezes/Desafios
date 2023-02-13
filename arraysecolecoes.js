alert ('Crie sua lista de compras no supermercado.')

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let higiene = [];
let item = "";
let categoria = "";

let adicionarItem = "sim"; 

while(adicionarItem != "não") {
    adicionarItem = prompt("Você deseja adicionar uma item na lista de compras? Responda 'sim' ou 'não'.");
    
    while (adicionarItem != "sim" && adicionarItem != "não") { 
	alert(`Opção inválida, tente novamente!`);
        adicionarItem = prompt("Você deseja adicionar uma item na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarItem === "não"){ 
        break;        
    }

    item = prompt("Qual item você deseja inserir?");
    categoria = prompt("Em qual categoria esse item se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' ou 'higiene'?");
    if(categoria === 'frutas'){
        frutas.push(item);
    } else if (categoria === 'laticínios'){
        laticinios.push(item);
    } else if (categoria === 'doces'){
        doces.push(item);
    } else if (categoria === 'congelados'){
        congelados.push(item);
    } else if (categoria === 'higiene'){
        higiene.push(item);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n 🍓 Frutas:  ${frutas}\n 🥛 Laticínios:  ${laticinios}\n 🧁 Doces:  ${doces}\n 🐔 Congelados:  ${congelados}\n 🧻 Higiene:  ${higiene}`)

alert ('Lista finalizada!')

