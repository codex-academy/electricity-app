// DOM element(s) references
const topUpRadioBtnElement = document.querySelector(".topup")
const buyBtnElement = document.querySelector(".topupNow")
const unitsAvailableElement = document.querySelector(".unitsAvailable")
const totalUnitsBoughtElement = document.querySelector(".totalUnits")
const totalAmountSpentElement = document.querySelector(".totalAmount")
const advanceTakenElement = document.querySelector(".advanceTaken")
const applianceRadioBtnElement = document.querySelector(".usage")
const useBtnElement = document.querySelector(".useNow")

// Factory Function instance 
const electricity =  Electricity();

// DOM events here 
function linkBuyToDOM(){
    var buyRadioBtn = document.querySelector("input[name='buyElectricity']");

    for(var i=0; i<buyRadioBtn.length; i++){
        if(buyRadioBtn[i].checked && buyRadioBtn[i].value == '10')
        electricity.topUpElectricity("10")
        unitsAvailableElement.innerHTML = electricity.getUnitsAvailable()
    }
    

}buyBtnElement.addEventListener("click", linkBuyToDOM)