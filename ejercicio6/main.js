import{esElegibleParaPrestamo} from "./utilidades.js";
console.log("El prestamo es elegible?", esElegibleParaPrestamo(50000, 700));
console.log("El prestamo no elegible?", esElegibleParaPrestamo(5000, 600));