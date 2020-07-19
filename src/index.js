const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    var letterGrade;

    switch(true)
    {
      case grade >= 95 && grade <= 100:
        letterGrade =  "O - Outstanding"
        break;

      case grade >= 90 && grade < 95:
        letterGrade = "V - Very Good"
        break;
      
      case grade >= 85 && grade < 90:
        letterGrade = "G - Good"
        break;

      case grade >= 80 && grade < 85:
        letterGrade = "S - Satisfactory"
        break;

      case grade >= 75 && grade < 80:
        letterGrade = "N - Needs Improvement"
        break;
      
      case grade < 75:
        letterGrade = "D - Did not Meet Expectation"
        break;
      
      default:
        if(isNaN(grade))
          {
            letterGrade = "Please input a numerical grade"
            break;
          }
          letterGrade = "Please enter a valid input"
    }
    return letterGrade;

  }
  
}

module.exports = functions;
