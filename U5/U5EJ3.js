//T2: Clases / Classes
//U5: Métodos de instancia y métodos de clase / Mètodes d'instància i mètodes de classe
/** 
  -- CASTELLANO
  -- EJERCICIO 2.5.3 ENUNCIADO: 
	Se nos pide, basándonos en todo lo definido en el ejercicio 2.3.2, ampliar la definición de la clase "Triangle" que representará los distintos triángulos 
	de un app de geometría , de manera que podamos cubrir las siguientes nuevas funcionalidades:  
	- Sabemos que, dados dos triángulos rectangulos, si los enfrentamos juntándolos por sus ángulos rectos formarán un polígono, de manera que el perímetro 
	exterior de	este nuevo polígono será la suma del perímetro de ambos rectángulos más el valor absoluto de la resta de ambas alturas, con esto necesitamos, 
	dados dos triángulos rectángulos, obtener el perímetro exterior del polígono que conforman definiendo un nuevo método llamado rightTriangleUnion.
	- Tambien es necesario saber, dado un Polígono formado por una serie de triángulos (que nos llegarán en un Array), obtener cuál es el área de ese polígono
	con un nuevo médodo llamado areaPoligon. (Nota: el área de la superficie de un polígono formado por triángulos es la suma de las áreas de estos triángulos).
	- Así mismo, nos piden, con el fin de poder saber si un triángulo es equilátero o no, un método (al que llamaremos isEquilateral) que accediendo a sus propiedades 
	base y height, nos devuelva	si el triángulo es equilátero; NOTA: una propiedad de los triángulos equiláteros es que su altura siempre es igual a la base por la raiz 
	cuadrada de tres dividido entre dos (height = (base*√3) / 2 ). Para comprobarlo, un ejemplo de triángulo equilátero sería uno con una base de 10 y una altura de 10 * √3 / 2.
	como este por ejemplo:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
  
	En base a la funcionalidad solicitada deberéis decidir qué métodos definís como Métodos de Instancia y cuáles definís como Métodos de Clase.
	Finalmente, crea al menos 3 objetos de la clase Triangle y haz 3 llamadas a estos nuevos métodos.
      	
  -- CATALÀ
  -- EXERCICI 2.5.3 ENUNCIAT:
	Se'ns demana, basant-nos en tot allò definit a l'exercici 2.3.2, ampliar la definició de la classe "Triangle" que representarà els diferents triangles
	d'una app de geometria , de manera que puguem cobrir les noves funcionalitats següents:
	- Sabem que, donats dos triangles rectangles, si els enfrontem unint-los pels seus angles rectes formaran un polígon, de manera que el perímetre
	exterior d'aquest nou polígon serà la suma del perímetre de tots dos rectangles més el valor absolut de la resta de les seves altures, amb això necessitem,
	donats dos triangles rectangles, obtenir el perímetre exterior del polígon que conformen definint un nou mètode anomenat rightTriangleUnion.
	- També cal saber, donat un Polígon format per una sèrie de triangles (que ens arribaran en un Array), obtenir quina és l'àrea d'aquest polígon
	amb un nou mètode anomenat areaPoligon. (Nota: l'àrea de superfície d'un polígon format per triangles és la suma de les àrees d'aquests triangles).
	- Així mateix, ens demanen, per tal de poder saber si un triangle és equilàter o no, un mètode (al que anomenarem isEquilateral) que accedint a les seves propietats
	base i height, ens torni si el triangle és equilàter; NOTA: una propietat dels triangles equilàters és que la seva alçada sempre és igual a la base per l'arrel
	quadrada de tres dividit entre dos (height = (base*√3) / 2 ). Per comprovar-ho, un exemple de triangle equilàter seria un amb una base de 10 i una alçada de 10*√3/2.
	com aquest per exemple:
	const myEquilateral = new Triangle(10, 10*Math.sqrt(3)/2, false);
	  
	En base a la funcionalitat sol·licitada haureu de decidir quins mètodes definiu com a Mètodes d'Instància i quins definiu com a Mètodes de Classe.
	Finalment, crea almenys 3 objectes de la classe Triangle i fes 3 trucades a aquests nous mètodes.
*/
//Escribe aquí tu solución / escriviu aquí la vostra solució:
//T2: Clases
//EJERCICIO 2.5.3

// Definición de la clase Triangle
//T2: Clases
//U5: Ejercicio 2.5.3

// Definición de la clase Triangle
export class Triangle {
  constructor(base, height, rightTriangle) {
    this.base = base;
    this.height = height;
    this.rightTriangle = rightTriangle;
  }

  // =========================
  // GETTERS (del ejercicio 2.3.2)
  // =========================

  // Área del triángulo
  get areaTriangle() {
    return (this.base * this.height) / 2;
  }

  // Hipotenusa (solo si es rectángulo)
  get rightHypotenuse() {
    if (!this.rightTriangle) {
      return undefined;
    }
    return Math.sqrt(this.base ** 2 + this.height ** 2);
  }

  // Perímetro (solo si es rectángulo)
  get rightPerimeter() {
    if (!this.rightTriangle) {
      return undefined;
    }
    return this.base + this.height + this.rightHypotenuse;
  }

  // =========================
  // MÉTODO DE INSTANCIA
  // =========================

  // Comprueba si es equilátero
  isEquilateral() {
    return this.height === (this.base * Math.sqrt(3)) / 2;
  }

  // =========================
  // MÉTODOS DE CLASE (static)
  // =========================

  // Perímetro exterior de la unión de dos triángulos rectángulos
  static rightTriangleUnion(t1, t2) {
    if (!t1.rightTriangle || !t2.rightTriangle) {
      return undefined;
    }

    return (
      t1.rightPerimeter +
      t2.rightPerimeter +
      Math.abs(t1.height - t2.height)
    );
  }

  // Área de un polígono formado por varios triángulos
  static areaPoligon(triangles) {
    return triangles.reduce(
      (sum, triangle) => sum + triangle.areaTriangle,
      0
    );
  }
}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return Triangle;
}