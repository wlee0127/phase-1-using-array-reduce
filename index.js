const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(batterySum,0);

function batterySum(accumulator, element){
    return accumulator + element;

}

// Code your solution here
