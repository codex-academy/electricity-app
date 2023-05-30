function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

   let unitsAvailable = 0
   let globalVariable1;
   let globalVariable2;
   let totalUnits =0;

   let advanceTotal = 0
   let moneyOwed = 0
   let totalAmount = 0

    function topUpElectricity(amount) {
        //check if the amount is equal to 10
        if(amount == "10"){
        //if it is check if the moneyOwed variable is less than zero  
            if(moneyOwed<0){
                //if it is add 10 to moneyOwed
                moneyOwed +=10
                
            }
            //check if money owed is greater than zero
            if(moneyOwed >= 0){
                //if it is add 10 to total amount and 7 to units
                totalAmount +=10
                unitsAvailable +=7
                totalUnits +=7
            }
        
        }
        //check if the amount is equal to 20
        else if(amount == "20"){
           // if it is check if moneyOwed is less than zero
           if(moneyOwed<0){
            //it it is add 20 to money owed
                moneyOwed +=20
                
            }
            //if it is not and it is greater than 0 add 20 to totalAMount and 14 to units
           if(moneyOwed >= 0){
            totalAmount +=20
            unitsAvailable +=14
            totalUnits +=14
           }
            
        }
        //check if amount is equal to 50
        else if(amount == "50"){
            //if it is check if money owed is less than zero
           if(moneyOwed<0){
            //if it is add 50 to moneyOwed
                moneyOwed +=50
                 
            } 
            //if moneyOwed is greater than 0 add 50 to amount and 35 to units
           if(moneyOwed >= 0){
            totalAmount +=50
            unitsAvailable += 35
            totalUnits +=35 
           }
           
        }
        //check if amount is equal to advance 
        else if (amount == "advance"){
            //if it is check if money owed is less than 0
            if(moneyOwed < 0){
                //if it is do not allow advance
                unitsAvailable += 0
                moneyOwed -= 0
                advanceTotal = 0
            }
            //check if money owed is greater than 0 if it is allow advance
            if(moneyOwed >= 0 ){
                unitsAvailable += 21
                moneyOwed -= 30
                advanceTotal = 21 
                totalUnits +=21
            }
           //make advance total a global variable
            globalVariable1 = advanceTotal
        }
        else{
            unitsAvailable = 0 }

            //return units
    }

    function getUnitsAvailable() {
        //make units available a global variable
        globalVariable2 = unitsAvailable
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        //check if units available are greater than 10
        if(appliance == "stove"){
        if(globalVariable2>10){
        globalVariable2 -= appliances["Stove"]
       }
     //  console.log(globalVariable2)
       console.log(getUnitsAvailable())
    }
}

    function advanceTaken() {
        //check if the advance variable is and return true else if it is not return false
        if(globalVariable1){
            return true
        }
        else if(!globalVariable1){
            return false
        }
    }

    function totalAmountSpent() {
        //return total amount
        return totalAmount
    }

    function totalUnitsBought(){
        //return total units
        return totalUnits
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}