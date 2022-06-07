const hq=42
function distanceFromHqInBlocks(block) {
 if (block>42){
     return block-42;
 }else{
    return 42-block;
 }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264
}

function distanceTravelledInFeet(start, destination){
 if (destination>start){
     return  (destination-start)*264;
 }else{
     return (start- destination)*264;
 }
}
function calculatesFarePrice(start, destination){
 const feet=distanceTravelledInFeet(start, destination);
    if (feet<=400){
      return 0;
    }else if(feet>400 && feet<=2000){
      return 0.02*(feet-400);
    }else if (feet>200 && feet<=2500){
        return 25;
    }else{
     return "cannot travel that far";
    }

}