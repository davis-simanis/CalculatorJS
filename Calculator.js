function Calculator(a, b) {
  this.result = "";
  this.a = a;
  this.b = b;

  this.add = () => {
    this.result = +a + +b;
  };
  this.sub = () => {
    this.result = +a - +b;
  };
  this.mul = () => {
    this.result = +a * +b;
  };
  this.div = () => {
    this.result = +a / +b;
  };
  this.display = (action) => {
    this[action]();
    document.querySelector("h1").innerHTML = `Result: ${this.result}`;
  };
}

function calculate(action) {
  const A = document.getElementById("inputA").value;
  const B = document.getElementById("inputB").value;

  const calculator = new Calculator(A, B);
  calculator.display(action);
}
