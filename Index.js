/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const dataField = document.getElementById("data-field")
const convertBtn = document.getElementById("convert-btn")
const dataLength = document.getElementById("data-length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


let meterValue = 0
let feetValue = 0
let literValue = 0
let gallonValue = 0
let kiloValue = 0
let poundValue = 0


convertBtn.addEventListener("click", function() {
    const data = dataField.value
    meterValue = data / 3.281
    feetValue = data * 3.281
    literValue = data / 0.264
    gallonValue = data * 0.264
    kiloValue = data / 2.204
    poundValue = data * 2.204
    ans()
})

function ans() {
    dataLength.textContent = `${dataField.value} meters = ${feetValue.toFixed(2)} feet | ${dataField.value} feet = ${meterValue.toFixed(2)} meters`

    volume.textContent = `${dataField.value} liters = ${gallonValue.toFixed(2)} gallons | ${dataField.value} gallons = ${literValue.toFixed(2)} liters`

    mass.textContent = `${dataField.value} kilos = ${poundValue.toFixed(2)} pounds | ${dataField.value} pounds = ${kiloValue.toFixed(2)} kilos`
}