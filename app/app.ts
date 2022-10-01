import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 1, 1);
console.log(negociacao.volume);