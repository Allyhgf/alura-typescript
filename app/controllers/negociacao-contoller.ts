import { Negociacao } from "../models/negociacao.js";

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
        const negociacao = new Negociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        );

        console.log(negociacao);
    }
}