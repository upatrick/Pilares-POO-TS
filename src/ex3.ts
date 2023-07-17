class Animal {
    nome: string;
    idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom(): void {
      console.log("O animal está emitindo um som.");
    }
  }
  
  class Gato extends Animal {
    arranhar(): void {
      console.log("O gato está arranhando.");
    }
  }
  
  class Cachorro extends Animal {
    abanarRabo(): void {
      console.log("O cachorro está abanando o rabo.");
    }
  }
  
  class Cavalo extends Animal {
    galopar(): void {
      console.log("O cavalo está galopando.");
    }
  }
  
  // Exemplo de uso
  const gato = new Gato("Garfield", 5);
  gato.emitirSom(); // Saída: O animal está emitindo um som.
  gato.arranhar(); // Saída: O gato está arranhando.
  
  const cachorro = new Cachorro("Rex", 3);
  cachorro.emitirSom(); // Saída: O animal está emitindo um som.
  cachorro.abanarRabo(); // Saída: O cachorro está abanando o rabo.
  
  const cavalo = new Cavalo("Pé de Pano", 10);
  cavalo.emitirSom(); // Saída: O animal está emitindo um som.
  cavalo.galopar(); // Saída: O cavalo está galopando.
  