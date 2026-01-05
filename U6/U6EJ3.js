//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.3 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Triangle,
	vista en el ejercicio 2.5.3. Se nos pide
	- Definir en una constante denominada myTriangles un Array de objetos Triangle a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos equilateralsTriangles) con todos triángulos equiláteros del Array anterior (myTriangles).
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newTrianglesJSON.
	
  
  -- CATALÀ
  -- EXERCICI 2.6.3 ENUNCIAT:
	Donat  el valor de la constant anomenada myJSON, un text pla en format JSON que conté la descripció d'un Array amb tres objectes de la classe Triangle,
	vista a l'exercici 2.5.3. Se'ns demana
	- Definir en una constant anomenada myTriangles un Array d'objectes Triangle a partir d'aquest text.
	- Obtenir un nou Array en una altra constant (que anomenarem equilateralsTriangles) amb tots triangles equilàters de l'Array anterior (myTriangles).
	- Passar aquest nou Array a un text pla JSON en una nova constant anomenada newTrianglesJSON.
*/

const myJSON = '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]';

//Escribe aquí tu solución / escriviu aquí la vostra solució:
class Triangle {
    constructor(base, height, rightTriangle) {
        this.base = base;
        this.height = height;
        this.rightTriangle = rightTriangle;
    }

    // Método para saber si es equilátero basándonos en base y altura
    isEquilateral() {
        // En un equilátero, la altura es base * (raíz de 3 / 2)
        // Y nunca puede ser un triángulo rectángulo (rightTriangle debe ser false)
        const expectedHeight = (Math.sqrt(3) / 2) * this.base;
        
        // Usamos Math.abs y una diferencia mínima para comparar decimales
        return Math.abs(this.height - expectedHeight) < 0.0001 && !this.rightTriangle;
    }
}

// B. Crear myTriangles (Convertir texto a objetos de la Clase Triangle)
// Usamos .map para que cada objeto del JSON se convierta en un "new Triangle"
const myTriangles = JSON.parse(myJSON).map(t => new Triangle(t.base, t.height, t.rightTriangle));

// C. Filtrar los equiláteros (equilateralsTriangles)
const equilateralsTriangles = myTriangles.filter(t => t.isEquilateral());

// D. Convertir el resultado a texto plano JSON (newTrianglesJSON)
const newTrianglesJSON = JSON.stringify(equilateralsTriangles);



/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
	return [myTriangles, equilateralsTriangles, newTrianglesJSON];
  }