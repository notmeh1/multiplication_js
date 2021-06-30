"use strict"
function askForNumber(){
    let userNumber = Number.parseInt(prompt("Inserte el número que desea multiplicar"))
    if (userNumber > 1 && userNumber <= 20) {
        return userNumber
    } else if (userNumber < 1 || userNumber > 20) {
        alert("El número esta fuera de rango")
    } else {
        alert("El número es invalido")
        return null
    }
    console.log (`${userNumber}`)

    //for (let startNumber = 1; startNumber <= userNumber; startNumber++) {
    //    console.log(`${startNumber} x 10 = ${startNumber * 10}`)
    //}
}