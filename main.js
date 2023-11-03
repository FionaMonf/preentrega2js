const figuras = [];

class Triangulo {
  constructor(base, altura) {
    this.nombre = "Triangulo";
    this.descripcionDelCalculo = "Base x Altura / 2";
    this.base = base;
    this.altura = altura;
    this.area = (this.base * this.altura) / 2;
  }
  describir() {
    return `El ${this.nombre} de base ${this.base} y altura ${this.altura}, tiene un area de ${this.area} y se calcula asi: ${this.descripcionDelCalculo}`;
  }
}

class Cuadrado {
  constructor(lado) {
    this.nombre = "Cuadrado";
    this.descripcionDelCalculo = "Lado x Lado";
    this.lado = lado;
    this.area = Math.pow(this.lado, 2);
  }
  describir() {
    return `El ${this.nombre} de lado ${this.lado}, tiene un area de ${this.area} y se calcula asi: ${this.descripcionDelCalculo}`;
  }
}

class Circulo {
  constructor(radio) {
    this.nombre = "Circulo";
    this.descripcionDelCalculo = "π r²";
    this.radio = radio;
    this.area = Math.PI * Math.pow(this.radio, 2);
  }
  describir() {
    return `El ${this.nombre} de radio ${this.radio}, tiene un area de ${this.area} y se calcula asi: ${this.descripcionDelCalculo}`;
  }
}

class Rectangulo {
  constructor(base, altura) {
    this.nombre = "Rectangulo";
    this.descripcionDelCalculo = "Base x Altura";
    this.base = base;
    this.altura = altura;
    this.area = this.base * this.altura;
  }
  describir() {
    return `El ${this.nombre} de base ${this.base} y altura ${this.altura}, tiene un area de ${this.area} y se calcula asi: ${this.descripcionDelCalculo}`;
  }
}

const crearTriangulo = (e) => {
  const base = document.getElementById("baseT");
  const altura = document.getElementById("alturaT");
  const nuevoTriangulo = new Triangulo(base.value, altura.value);
  figuras.push(nuevoTriangulo);
  mostrarResultados(figuras);
};

const crearCuadrado = (e) => {
  const lado = document.getElementById("lado");
  const nuevoCuadrado = new Cuadrado(lado.value);
  figuras.push(nuevoCuadrado);
  mostrarResultados(figuras);
};

const crearCirculo = (e) => {
  const radio = document.getElementById("radio");
  const nuevoCirculo = new Circulo(radio.value);
  figuras.push(nuevoCirculo);
  mostrarResultados(figuras);
};

const crearRectangulo = (e) => {
  const base = document.getElementById("baseR");
  const altura = document.getElementById("alturaR");
  const nuevoRectangulo = new Rectangulo(base.value, altura.value);
  figuras.push(nuevoRectangulo);
  mostrarResultados(figuras);
};

const mostrarResultados = (figuras) => {
  const ul = document.getElementById("resultados");
  //   remuevo todos los li del ul
  ul.innerHTML = "";

  //   Agrego un li por cada resultado
  for (const figura of figuras) {
    const nuevoLi = document.createElement("li");
    nuevoLi.innerText = figura.describir();
    ul.appendChild(nuevoLi);
  }
};
