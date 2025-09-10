// Classe Database com Singleton
class Database {
  constructor(connectionString) {
    if (Database._instance) {
      return Database._instance;
    }

    this.connectionString = connectionString;
    this.id = Math.random();
    console.log(`🔌 Nova conexão criada: ${this.id}`);

    Database._instance = this;
  }

  query(sql) {
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
  }

  // Método estático para obter a instância
  static getInstance(connectionString) {
    if (!Database._instance) {
      Database._instance = new Database(connectionString);
    }
    return Database._instance;
  }
}

// Cliente usando Singleton (reutiliza a mesma conexão)
const db1 = Database.getInstance("db://meu-banco");
db1.query("SELECT * FROM users");

const db2 = Database.getInstance("db://meu-banco");
db2.query("SELECT * FROM products");

console.log(db1 === db2); // true
