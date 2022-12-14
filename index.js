let convertBtn = document.getElementById("btn")
let inputEl = document.getElementById("input-number")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const FeetTometer = 0.3048
const literToGallon =  0.264
const gallonToLiter =  3.78541
const kiloToPound =  2.204
const poundToKilos =  0.453592

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * FeetTometer).toFixed(3)}meters` 

    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)}liters`

    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilos).toFixed(3)} kilos`



})