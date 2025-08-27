// Classes concretas
class DebitCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class CreditCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class PaymentFactory {
  static createPayment(type) {
    if (type === "debit card") {
      return new DebitCard();
    } else if (type === "credit card") {
      return new CreditCard();
    }
    throw new Error("Tipo de pagamento inválido");
  }
}

function main() {
  const type = "credit card"; // Pode ser 'debit card' ou 'credit card'

  const expenses = PaymentFactory.createPayment(type);

  expenses.pay(type, "R$ 500,00");
}
