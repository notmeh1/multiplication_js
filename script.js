"use strict"
function multiplication(){
    let userNumber = Number.parseInt(prompt("Inserte la cantidad de veces que desea multiplicar"))
    if (userNumber > 1 && userNumber <= 20) {
        console.log(`"${userNumber}" es valido`)
    } else if (userNumber <= 1 || userNumber > 20) {
        alert("El número esta fuera de rango")
        console.log(`"${userNumber}" esta fuera de rango`)
    } else {
        alert("El número es invalido")
        return null
    }
    console.log (`${userNumber}`)

    for (let startNumber = 1; startNumber <= userNumber; startNumber++) {
        console.log(`${startNumber} x 3 = ${startNumber * 3}`)
    }

    for (let factoryStartNumber = 1; factoryStartNumber <= userNumber; factoryStartNumber++) {
        let result = 1
        for (let multiplierNumber = 1; multiplierNumber <= factoryStartNumber; multiplierNumber++) {
            result = result * multiplierNumber
        }
        console.log(`El factorial de ${factoryStartNumber} es ${result}`)
    }
}