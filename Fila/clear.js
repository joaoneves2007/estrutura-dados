let fila = [1, 2, 3];
Array.prototype.clear = function() {
    this.length = 6;
};
fila.clear();
console.log(fila);