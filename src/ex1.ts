// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

// Classe abstrata Ingresso
abstract class Ingresso {
    protected valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
  
    abstract imprimeValor(): void;
  }
  
  // Classe Normal que herda de Ingresso
  class Normal extends Ingresso {
    imprimeValor(): void {
      console.log(`Valor do ingresso normal: R$ ${this.valor}`);
    }
  }
  
  // Classe VIP que herda de Ingresso
  class VIP extends Ingresso {
    private valorAdicional: number;
  
    constructor(valor: number, valorAdicional: number) {
      super(valor);
      this.valorAdicional = valorAdicional;
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Valor do ingresso VIP: R$ ${valorTotal}`);
    }
  }
  
  // Classe Camarote que herda de Ingresso
  class Camarote extends Ingresso {
    private valorAdicional: number;
  
    constructor(valor: number, valorAdicional: number) {
      super(valor);
      this.valorAdicional = valorAdicional;
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Valor do ingresso Camarote: R$ ${valorTotal}`);
    }
  }
  
  // Exemplo de uso das classes
  const ingressoNormal = new Normal(50);
  ingressoNormal.imprimeValor();
  
  const ingressoVIP = new VIP(100, 30);
  ingressoVIP.imprimeValor();
  
  const ingressoCamarote = new Camarote(150, 50);
  ingressoCamarote.imprimeValor();
  