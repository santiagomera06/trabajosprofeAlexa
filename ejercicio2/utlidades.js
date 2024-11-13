 export function calcularDescuento  (precio){
    let res = (precio > 1000) ? 0.20 : 
    (precio >= 500) ? 0.10 : 0;

// Calcular el monto del descuento
let descuento = precio * res;

// Calcular el precio final
let precioFinal = precio - descuento;

return precioFinal;
 }
 
