class NegociacaoController {

    constructor() {        
        let $ = document.querySelector.bind(document);    
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }
    
    adiciona (event) {
        event.preventDefault();        
    }
}
