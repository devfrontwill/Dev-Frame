class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get Volume() {
        this._quantidade * this._valor;
    }

    get Data() {
        return this._data;
    }

    get Quantidade() {
        return this._quantidade;
    }

    get Valor() {
        return this._valor;
    }
}
