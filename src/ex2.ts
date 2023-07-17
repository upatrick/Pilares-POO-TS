// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

// Classe Imovel
class Imovel {
    protected endereco: string;
    protected preco: number;
  
    constructor(endereco: string, preco: number) {
      this.endereco = endereco;
      this.preco = preco;
    }
  
    // Métodos de acesso
    getPreco(): number {
      return this.preco;
    }
  
    getEndereco(): string {
      return this.endereco;
    }
  }
  
  // Classe Novo que herda de Imovel
  class Novo extends Imovel {
    private adicional: number;
  
    constructor(endereco: string, preco: number, adicional: number) {
      super(endereco, preco);
      this.adicional = adicional;
    }
  
    // Método de acesso ao valor adicional
    getAdicional(): number {
      return this.adicional;
    }
  
    // Método de impressão do valor adicional
    imprimeAdicional(): void {
      console.log(`Adicional no preço: R$ ${this.adicional}`);
    }
  }
  
  // Classe Velho que herda de Imovel
  class Velho extends Imovel {
    private desconto: number;
  
    constructor(endereco: string, preco: number, desconto: number) {
      super(endereco, preco);
      this.desconto = desconto;
    }
  
    // Método de acesso ao desconto
    getDesconto(): number {
      return this.desconto;
    }
  
    // Método de impressão do desconto
    imprimeDesconto(): void {
      console.log(`Desconto no preço: R$ ${this.desconto}`);
    }
  }
  
  // Exemplo de uso das classes
  const imovelNovo = new Novo("Rua A, 123", 100000, 5000);
  console.log("Endereço:", imovelNovo.getEndereco());
  console.log("Preço:", imovelNovo.getPreco());
  imovelNovo.imprimeAdicional();
  
  const imovelVelho = new Velho("Rua B, 456", 80000, 2000);
  console.log("Endereço:", imovelVelho.getEndereco());
  console.log("Preço:", imovelVelho.getPreco());
  imovelVelho.imprimeDesconto();
  