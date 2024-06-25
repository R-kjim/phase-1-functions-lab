// Code your solution in this file!
//calculates the distance inblocks-just subtracts the blocks reference
let dist1;
function distanceFromHqInBlocks(blocks){
    dist1=(Math.abs(42-blocks)) //the Math.abs command returns the absolute difference of a number since it could be negative but doesnt affect that its certain blocks away
    return(dist1)
}
//converts the blocks above tofeet considering every block is 264 feet
let dist2;
function distanceFromHqInFeet(numb){
    dist2=(Math.abs(42-numb))*264
    return(dist2)
}

//calculates the distance travelled from the start to destination of travel in feet
let dist3;
function distanceTravelledInFeet(x,y){
    dist3=(Math.abs(x-y))*264
    return(dist3)
}

//calculate the fare to be paid basedondistance tracelled
let fare;
let dist4;
function calculatesFarePrice(start,destination){
    dist4=(Math.abs(start-destination))*264
    if (dist4<=400){
        fare=0
    }else if(dist4>400 && dist4<=2000){
        fare=(dist4-400)*0.02        //the first 400feet are free so ensure to deduct them from the total travelled
    }else if(dist4>2000 && dist4<=2500){
        fare=25
    }else{
        fare='cannot travel that far'
    }
    return(fare)
}
