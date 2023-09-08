function Potencia(base, exponente) {
    this.base = base;
    this.exponente = exponente;
  
    this.calcularPotencia = function () {
      return Math.pow(this.base, this.exponente);
    };
  
    this.mostrarResultadoEnPagina = function () {
      const resultadoElement = document.getElementById('resultado');
      resultadoElement.innerHTML = `El resultado de ${this.base} elevado a la ${this.exponente} es: ${this.calcularPotencia()}`;
    };
  }
  document.addEventListener('DOMContentLoaded', function () {
    const calcularButton = document.getElementById('calcular');
    calcularButton.addEventListener('click', function () {
      const base = parseFloat(document.getElementById('base').value);
      const exponente = parseFloat(document.getElementById('exponente').value);
  
      const potencia = new Potencia(base, exponente);
      potencia.mostrarResultadoEnPagina();
    });
  });
    