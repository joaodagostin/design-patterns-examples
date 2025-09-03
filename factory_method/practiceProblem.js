// Produto
class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = false;
  }

  showDetails() {
    console.log(`
    ${this.year} ${this.brand} ${this.model}
    Motor: ${this.engine}
    Cor: ${this.color}
    GPS: ${this.gps ? "Sim" : "Não"}
    `);
  }
}

// Builder
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  addGPS() {
    this.car.gps = true;
    return this;
  }

  build() {
    return this.car;
  }
}

// Director → Cria modelos pré-definidos
class CarDirector {
  static buildCarroLuxo() {
    return new CarBuilder()
      .setBrand("BMW")
      .setModel("X5")
      .setYear(2025)
      .setEngine("3.0 V6")
      .setColor("Preto")
      .addGPS()
      .build();
  }

  static buildCarroEconomico() {
    return new CarBuilder()
      .setBrand("Fiat")
      .setModel("Mobi")
      .setYear(2023)
      .setEngine("1.0")
      .setColor("Branco")
      .build();
  }

  static buildCarroEletrico() {
    return new CarBuilder()
      .setBrand("Tesla")
      .setModel("Model 3")
      .setYear(2024)
      .setEngine("Elétrico")
      .setColor("Azul")
      .addGPS()
      .build();
  }
}

// Uso
const car1 = new CarBuilder()
  .setBrand("Toyota")
  .setModel("Corolla")
  .setYear(2024)
  .setEngine("2.0")
  .setColor("Preto")
  .addGPS()
  .build();

const car2 = new CarBuilder()
  .setBrand("Honda")
  .setModel("Civic")
  .setYear(2023)
  .setEngine("1.5 Turbo")
  .setColor("Prata")
  .build();

const luxo = CarDirector.buildCarroLuxo();
const simples = CarDirector.buildCarroEconomico();
const eletrico = CarDirector.buildCarroEletrico();

car1.showDetails();
car2.showDetails();
luxo.showDetails();
simples.showDetails();
eletrico.showDetails();
