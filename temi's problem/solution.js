
var mark1=50, mark2=50; //mark1 and too equal to any value from 0 to 50, it represents individual components scores.. I can't stress myself to write regex to guide values above 50.. So to test do something like *var mark 1= 45, mark2 = 30;.var total = mark1 + mark 2 //this is the total marks for individual components scores combined.var grades = ["pass", "fail", " moderate ", " technical fail"] //grades for all the scores in an array

var gradeMarks  = [" A", "B+", " B", "C", " F"]

//marks for grades scoresconst

gradeMarkScore =()=>{if (total >= 70){
          return gradeMarks[0];      
          } 
        else if (total >= 60 && total <=69) {
                return gradeMarks[1]
                            
                         
                  } 
  else if (total >= 50 && total <=59) {
                return gradeMarks[2]
                            
                         
                  }  else if (total >= 40 && total <=49) {
                return gradeMarks[3]
                            
                         
                  }
  else if (total >= 0 && total <=39) {
                return gradeMarks[4]
                            
                         
                  }
        }
function grading (){
    if(mark1<=15||mark2<=15 && total>=40){ console.log("marks" + ":"+ grades[3] + "\n" + "Comment" + ":" + gradeMarkScores())}

//I'm making your outputs using  console.log pls else

if(total =>39){
     console.log("marks" + ":"+ grades[0] + "\n" + "Comment" + ":" + gradeMarkScores())}
     else if(total ==39){ 
         console.log("marks" + ":"+ grades[2] + "\n" + "Comment" + ":" + gradeMarkScores())}

else if(total <39)
{ console.log("marks" + ":"+ grades[2] + "\n" + "Comment" + ":" + gradeMarkScores())}

     }
     grading()