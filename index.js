// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue-42);
    }
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(someValue){
    const newValue = distanceFromHqInBlocks(someValue);
    return (newValue*264);
    }

function distanceTravelledInFeet(start, destination){
return Math.abs((start -  destination)*264);
}

function calculatesFarePrice(start , destination){
    const valueInfeet = distanceTravelledInFeet(start, destination);
    if (valueInfeet<400){
        return (valueInfeet*0);
        
    }
    else if(valueInfeet>400 && valueInfeet<2000){
        return Math.abs((valueInfeet-400)*0.02)
    }
    else if(valueInfeet>2000 && valueInfeet<2500){
        const fare = 25;
        return fare;
    }
    else if(valueInfeet>2500){
        return ('cannot travel that far');
    }
    
}