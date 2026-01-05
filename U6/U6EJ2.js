//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.2 ENUNCIADO: 
	Dado en el valor de la constante denominada myJSON, un texto plano en formato JSON que contiene la descripción de un Array con tres objetos de la clase Car,
  vista en el ejercicio 2.5.2. Se nos pide:
	- Definir en una constante denominada myCars un Array de objetos Car a partir de este texto.
	- Obtener un nuevo Array en otra constante (a la que llamaremos lessThan25) todos los coches definidos en el Array anterior (myCars) 
  que tienen una antiguedad inferior a 25 años.
	- Pasar este nuevo Array a un texto plano JSON en una nueva constante denominada newCarsJSON.
	
  
  -- CATALÀ
  -- EXERCICI 2.6.2 ENUNCIAT:
	Donat el valor de la constant anomenada myJSON, un text pla en format JSON que conté la descripció d'un Array amb tres objectes de la classe Car,
  vista a l'exercici 2.5.2. Se'ns demana:
	- Definir en una constant anomenada myCars un Array d'objectes Car a partir d'aquest text.
	- Obtenir un nou Array en una altra constant (a la qual anomenarem lessThan25) tots els cotxes definits a l'Array anterior (myCars) 
  que tenen una antiguitat inferior a 25 anys.
	- Passar aquest nou Array a un text pla JSON en una nova constant anomenada newCarsJSON.
*/

const myJSON= '[{"brand":"Ford","model":"Mustang Boss 429","displacement":7000,"horsePower":375,"year":1969},{"brand":"BMW","model":"520d","displacement":1980,"horsePower":136,"year":2002},{"brand":"Mercedes-Benz","model":"280 SLC","displacement":2746,"horsePower":136,"year":1979}]';

//Escribe aquí tu solución / escriviu aquí la vostra solució:


/// Definición de la clase (Molde)
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getAge() {
        return 2026 - this.year;
    }
}

// 2. Definir myCars (Convertir texto a objetos Car)
const myCars = JSON.parse(myJSON);

// 3. Obtener coches con menos de 25 años (Antigüedad < 25)
// En 2026, un coche de menos de 25 años debe ser de después de 2001
const lessThan25 = myCars.filter(car => {
    const age = 2026 - car.year;
    return age < 25;
});
// 4. Pasar el resultado a texto plano JSON
const newCarsJSON = JSON.stringify(lessThan25);

// Verificación para ti:
console.log("Coches filtrados en formato texto:", newCarsJSON);

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return [myCars, lessThan25, newCarsJSON];
}