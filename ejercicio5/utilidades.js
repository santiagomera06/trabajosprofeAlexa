export function esBisiesto(año) {
    let result = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) ?"es bisiesto": "no es bisiesto";
    return result;
}
