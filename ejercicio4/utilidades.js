export function nivelRiesgo (edad,enfermedades) { 
    let result = (edad > 60 || enfermedades) ? "Alto riesgo" 
    : (edad >= 40 && edad <= 60 && enfermedades) ? "Riesgomoderado" 
    (edad >= 1 && edad <= 39 && enfermedades) : "Bajo riesgo";
        return result;
}
