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
    this.area = Math.pow(this.lado,2);
  }
  describir() {
    return `El ${this.nombre} de lado ${this.lado}, tiene un area de ${this.area} y se calcula asi: ${this.descripcionDelCalculo}`;
  }
}

const crearTriangulo = (e) => {
  const base = document.getElementById("baseT");
  const altura = document.getElementById("alturaT");
  const nuevoTriangulo = new Triangulo(base.value, altura.value);
  figuras.push(nuevoTriangulo);
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
