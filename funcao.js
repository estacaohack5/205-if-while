function sorteio(minimo=0, maximo=10){
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleatorio;
}

// Arrow Function
// const sorteio = (minimo=0, maximo=10) => {
//     return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
// }

let lista = ["Joao", "Maria", "Jose", "Vandernildson"];

let i = 0;
while(i < 10){
    console.log(lista[sorteio(0, lista.length-1)]);
    i++;
}
