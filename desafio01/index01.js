// Aplicando solução para problemFactory

// Classes de transporte
class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class Carro {
  move() {
    return "Andando no carro do Leandro Ugioni";
  }
}

// Factory Method
class TransporteFactory {
  static criar(tipo) {
    switch (tipo.toLowerCase()) {
      case "bicicleta":
        return new Bicicleta();
      case "patinete":
        return new Patinete();
      case "onibus":
        return new Onibus();
      case "carro":
        return new Carro();
      default:
        throw new Error(`Tipo de transporte "${tipo}" não é reconhecido.`);
    }
  }
}

const tipo = "carro";
const transporte = TransporteFactory.criar(tipo);

console.log(transporte.move());
