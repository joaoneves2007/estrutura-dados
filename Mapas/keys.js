let mapa = new Map();
mapa.set('chave1', 'valor1');
mapa.set('chave2', 'valor2');

let iterator = mapa.keys();
for ( let chave of iterator) {
    console.log(chave);
}