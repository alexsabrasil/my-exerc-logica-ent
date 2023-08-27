function Animal(tipo) {
    if (tipo) this.tipo = tipo
}
 
Animal.prototype.obterTipo = function () {
    return this.tipo
}
 
let sapo = {tipo: "anfibio"}
Animal.prototype.obterTipo.call(sapo)