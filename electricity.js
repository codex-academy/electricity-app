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
   //let units = 0
   let advanceTotal = 0
   let moneyOwed = 0
   let totalAmount = 0

    function topUpElectricity(amount) {
        if(amount == "10"){
            //units = 7
            if(moneyOwed<0){
                moneyOwed +=10
                
            }
            if(moneyOwed >= 0){
                totalAmount +=10
                unitsAvailable = moneyOwed+=7
            }
        
        }
        else if(amount == "20"){
           // units = 14
           if(moneyOwed<0){
                moneyOwed +=20
                
            }

           if(moneyOwed >= 0){
            totalAmount +=20
            unitsAvailable = moneyOwed+=14
           }
            
        }
        else if(amount == "50"){
           if(moneyOwed<0){
                moneyOwed +=50
                
                
            } 
            // units = 35
           if(moneyOwed >= 0){
            totalAmount +=50
            unitsAvailable = moneyOwed += 35
            //unitsAvailable +=35
           }
           
        }
        else if (amount == "advance"){
            //units  = 21
            if(moneyOwed < 0){
                unitsAvailable += 0
                moneyOwed -= 0
                advanceTotal = 0
            }
            if(moneyOwed >= 0 ){
                unitsAvailable += 21
                moneyOwed -= 30
                advanceTotal = 21 
            }
           
            globalVariable1 = advanceTotal
        }
        else{
            unitsAvailable = 0 }

            //return units
    }

    function getUnitsAvailable() {
        globalVariable2 = unitsAvailable
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
       if(appliance == appliances["Stove"]){
        globalVariable2 - 10
       }
       if(appliance == appliances["Kettle"]){
        globalVariable2 - 5
       }
       if(appliance == appliances["TV"]){
        globalVariable2 - 3
       }
       if(appliance == appliances["Fridge"]){
        globalVariable2 - 13
       }
       
        
    }

    function advanceTaken() {
        if(globalVariable1){
            return true
        }
        else if(!globalVariable1){
            return false
        }
    }

    function totalAmountSpent() {
        return totalAmount
    }

    function totalUnitsBought(){
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