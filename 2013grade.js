function gradeCalculator(){
    var floatHwPts = prompt("Please enter the number of HW points");
    var floatMidPts = prompt("Please enter the number of Midterm points");
    var floatFinalPts = prompt("Please enter the number of Final points");
    var floatTotalPts = floatHwPts + floatMidPts + floatFinalPts;

    if(prompt("Please enter the grading option") == 1){
        if(floatTotalPts >= 80){
            return "Fail";
        }
        else{
            return "Pass";
        }
    }
    else{
        if(floatTotalPts >= 90){
            return "A";
        }
        else if(floatTotalPts >= 80){
            return "B";
        }
        else if(floatTotalPts >= 70){
            return "C";
        }
        else if(floatTotalPts >= 60){
            return "D";
        }
        else{
            return "F";
        }
    }
}

alert(gradeCalculator());