//T2: Clases / Classes
//U6: Serialización de objetos con JSON / Serialització d'objectes amb JSON
/** 
  -- CASTELLANO
  -- EJERCICIO 2.6.1 ENUNCIADO: 
	- Define, en el valor de una constante denominada myJSON, un texto plano en formato JSON que contenga la descripción de un Array con al menos tres objetos Planet definidos mediante la clase dada. 
	- Después convierte este texto a un Array de objetos Planet e introduce en un nuevo Array denominado planetsBTE todos los que resulten de pasar este Array al el método de clase biggerThanEarth.
  
  -- CATALÀ
  -- EXERCICI 2.6.1 ENUNCIAT:
	- Defineix, en el valor d'una constant anomenada myJSON, un text pla en format JSON que contingui la descripció d'un Array amb almenys tres objectes Planet definits mitjançant la classe donada.
	- Després converteix aquest text a un Array d'objectes Planet i introdueix en un nou Array anomenat planetsBTE tots els que resultin de passar aquest Array al mètode de classe biggerThanEarth.
*/

class Planet {
    constructor(p_name, p_distanceToSun, p_hasRings, p_diameter){
		this.name = p_name;
        this.distanceToSun = p_distanceToSun;
        this.hasRings = p_hasRings;
        this.diameter = p_diameter;
    }
	
	//Class methods
	static biggerThanEarth(planets){
		let planetsArray = new Array;
		planets.forEach(function(planet){
            console.log(planet.diameter , Planet.earthDiameter())
			if(planet.diameter > Planet.earthDiameter()){
				planetsArray.push(planet);
			} 
		});	
		return planetsArray;
	}
	//Class methods
	static earthDiameter(){
		return 12756;
	}
}

//Escribe aquí tu solución / escriviu aquí la vostra solució:
const myJSON = `[
    { "name": "Mars", "radius": 3389.5 },
    { "name": "Jupiter", "radius": 69911 },
    { "name": "Saturn", "radius": 58232 },
    { "name": "Mercury", "radius": 2439.7 }
]`;

// Paso B: Convertir JSON a objetos básicos
const data = JSON.parse(myJSON);

// Paso C: Convertir a instancias de Planet
// AHORA SÍ FUNCIONARÁ: JS ya leyó la clase arriba, así que sabe qué es "new Planet"
const planets = data.map(item => new Planet(item.name, item.radius));

// Paso D: Filtrar usando el método estático
const planetsBTE = Planet.biggerThanEarth(planets);


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return [Planet, myJSON, planetsBTE];
}
