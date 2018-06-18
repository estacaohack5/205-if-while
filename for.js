// A primeira forma do FOR é só um while reescrito
let i = 1;

while(i <= 10){
    console.log(i);
    i++;
}

console.log("---------------------");

// Como fazer um for exatamente equivalente a esse while:

for(let i = 1; i <= 10; i++){
    for(let j = 10; j>0; j--){
        console.log(i, j);
    }
}

// For of e For in

let lista = ["James", "Nomes", "Wolfganfg", "Golfinho", "Jurupinga", "Nomi", "Cleide", "Tainá"];

// For IN faz com que a variável interna assuma um INDICE da lista a cada execução
for(let item in lista){
    console.log(item);
}

console.log("---------------------");

// For OF faz com que a variável interna assuma um VALOR da lista a cada execução
for(let item of lista){
    console.log(item);
}

// For IN também funciona para OBJETOS

let cliente = {
    nome: "Renan",
    idade: 28,
    vivo: true
}

console.log("---------------------");

for(let atributo in cliente){
    console.log(`O atributo ${atributo} tem o valor ${cliente[atributo]}`);
}
