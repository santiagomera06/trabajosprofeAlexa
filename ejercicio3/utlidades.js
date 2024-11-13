export function categoriaIMC (imc){
    let result = (imc < 18.5)? "Bajo peso" : 
    (imc >= 18.5 && imc < 25) ?  "Normal":
    (imc >= 25 && imc < 29.9)? "Sobrepeso": 
    (imc >= 30)?"Obesidad":"";
    return result

}

