let bill = 0
let tipPerecentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill= document.querySelector("#bill").valueAsNumber
    console.log(bill)
}
function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
   
}

function receiveTipPercentageValue(value) {
    tipPerecentage = value/100

    removeClassButtonSelected()
    document.querySelector("custom-tip").value=""
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
   
}
function receiveCustomTipPercentageValue(){
    tipPerecentage = document;querySelector("#custom-tip").valueAsNumber /100
    removeClassButtonSelected()
}


function removeClassButtonSelected() {
    if(buttonSelected !== null) {
        buttonSelected.classList.remove ("button-selected")
        buttonSelected = null

   }
}