function gradeCalculator(){
    var floatHwPts = document.getElementById('hw_pts').value;
    var floatMidPts = document.getElementById('mid_pts').value;
    var floatFinalPts = document.getElementById('fin_pts').value;
    var floatTotalPts = floatHwPts + floatMidPts + floatFinalPts;
    var finalGrade = "";

    if(document.getElementById('grade_option').value == 1){
        if(floatTotalPts >= 80){
            finalGrade = "Pass";
        }
        else{
            finalGrade = "Fail";
        }
    }
    else{
        if(floatTotalPts >= 90){
            finalGrade = "A";
        }
        else if(floatTotalPts >= 80){
            finalGrade = "B";
        }
        else if(floatTotalPts >= 70){
            finalGrade = "C";
        }
        else if(floatTotalPts >= 60){
            finalGrade = "D";
        }
        else{
            finalGrade = "F";
        }
    }

    document.getElementById('final_grade').value = finalGrade; 
}