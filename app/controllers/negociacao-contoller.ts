export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor(){
        this.inputData = document.getElementById("data");
        this.inputQuantidade = document.getElementById("quantidade");
        this.inputValor = document.getElementById("valor");
    }

    adicionar(){
        console.log(this.inputData);
        console.log(this.inputQuantidade)
        console.log(this.inputValor)
    }
}