alert ('Bem vindo(a) à sua lista de compras.')

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let higiene = [];
let item = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim";  
while(adicionarMais != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && higiene.length === 0){
        adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {  
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){ 
	break;
    }
	
    if(adicionarMais === "sim"){
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

    } else if(adicionarMais === "remover"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && higiene.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
		alert(`A lista está vazia!`);
	} else {  
		remover = prompt(`Lista de compras:\n 🍓 Frutas: ${frutas}\n 🥛  Laticínios: ${laticinios}\n 🧁 Doces: ${doces}\n 🐔 Congelados: ${congelados}\n 🧻 Higiene: ${higiene}\n\nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (higiene.indexOf(remover) != -1){
			higiene.splice(higiene.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
        } else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n 🍓 Frutas: ${frutas}\n 🥛  Laticínios: ${laticinios}\n 🧁 Doces: ${doces}\n 🐔 Congelados: ${congelados}\n 🧻 Higiene: ${higiene}`);

alert('Lista finalizada!')