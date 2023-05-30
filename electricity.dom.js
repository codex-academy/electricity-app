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
    var buyRadioBtn = document.querySelector("input[name='buyElectricity']:checked");

console.log(buyRadioBtn.value)
    if(buyRadioBtn && buyRadioBtn.value == '10'){
        electricity.topUpElectricity('10')
        unitsAvailableElement.innerHTML = electricity.getUnitsAvailable()
        totalAmountSpentElement.innerHTML = electricity.totalAmountSpent()
        totalUnitsBoughtElement.innerHTML = electricity.totalUnitsBought()
    }
    if(buyRadioBtn && buyRadioBtn.value == '20'){
        electricity.topUpElectricity('20')
        unitsAvailableElement.innerHTML = electricity.getUnitsAvailable()
        totalAmountSpentElement.innerHTML = electricity.totalAmountSpent()
        totalUnitsBoughtElement.innerHTML = electricity.totalUnitsBought()
    }
    if(buyRadioBtn && buyRadioBtn.value == '50'){
        electricity.topUpElectricity('50')
        unitsAvailableElement.innerHTML = electricity.getUnitsAvailable()
        totalAmountSpentElement.innerHTML = electricity.totalAmountSpent()
        totalUnitsBoughtElement.innerHTML = electricity.totalUnitsBought()
    }
    if(buyRadioBtn && buyRadioBtn.value == 'advance'){
        electricity.topUpElectricity('advance')
        unitsAvailableElement.innerHTML = electricity.getUnitsAvailable()
        advanceTakenElement.style.display = "block"
        totalUnitsBoughtElement.innerHTML = electricity.totalUnitsBought()
    }

}
buyBtnElement.addEventListener("click", linkBuyToDOM)

function linkUseApplianceToDOM(){
    var useRadioBtn = document.querySelector("input[name='useElectricity']:checked");

    if(useRadioBtn){
        electricity.useAppliance(useRadioBtn.value)
       unitsAvailableElement.innerHTML = electricity.getUnitsAvailable()
    }
}
useBtnElement.addEventListener("click", linkUseApplianceToDOM)