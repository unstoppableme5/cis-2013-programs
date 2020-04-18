function getFib(){
    //get the number we want to calculate
    var intNum = parseInt(document.getElementById("total_fib").value);
    document.getElementById("output").innerText = "";
    var strFibNumbers = "";

    while(intNum > 0){
        strFibNumbers += calcFib(intNum) + " ";
        
        intNum--;
    }
    document.getElementById("output").innerText = strFibNumbers;
}

function calcFib(intNum){
    //calculate phi
    floatPhi = (Math.sqrt(5) + 1) / 2;
    //calculate the fibinaci sequence
    floatFib = (Math.pow(floatPhi, intNum) - Math.pow(-1 * floatPhi, -1 * intNum)) / Math.sqrt(5);
    //update dom
    return Math.round(floatFib);
}
