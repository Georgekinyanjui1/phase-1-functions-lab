function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - 42)
}

function distanceFromHqInFeet(pickup) {
    return Math.abs(pickup - 42) * 264
}

function distanceTravelledInFeet(A, B) {
    return Math.abs(A - B) * 264
}


function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else { return 'cannot travel that far' }
}