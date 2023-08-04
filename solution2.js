function calculateTotalValues(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log("The total cart value is ",calculateTotalValues(19,23,45));