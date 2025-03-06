let blocksAway
let feetAway
let trip
let fare
let pickUp 
function distanceFromHqInBlocks(pickUp){
    blocksAway=Math.abs(pickUp-42)
    return blocksAway
}

function distanceFromHqInFeet(pickUp){
      feetAway=Math.abs(pickUp-42)*264
    return feetAway
}

function distanceTravelledInFeet(start, destination){
    trip=Math.abs((start-destination)*264)
    return trip
}

function calculatesFarePrice(start, destination){
    trip=Math.abs((start-destination)*264)
    
    if(trip<=400){
        fare=0
    }
    else if(trip>400 && trip<=2000){
        fare=(trip-400)*(2/100)
    }
    else if(trip>2000 & trip<=2500){
        fare=25
    }
    else{
        fare= 'cannot travel that far'
    }
    return fare
}

