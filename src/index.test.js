const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Grading', () => {

  it('When the teacher inputs a grade that is at least 95 but at most 100, then the grade of the student should be O - Outstanding', () => {
    // Arrange
      const grade = 98
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("O - Outstanding")
  });

  it('When the teacher inputs a grade that is at least 90 but less than 95, then the grade of the student should be V - Very Good', () => {
    // Arrange
      const grade = 94
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("V - Very Good")
  });

  it('When the teacher inputs a grade that is at least 85 but less than 90, then the grade of the student should be G - Good', () => {
    // Arrange
      const grade = 86
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("G - Good")
  });

  it('When the teacher inputs a grade that is at least 80 but less than 85, then the grade of the student should be S - Satisfactory', () => {
    // Arrange
      const grade = 83
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("S - Satisfactory")
  });

  it('When the teacher inputs a grade that is at least 75 but less than 80, then the grade of the student should be N - Needs Improvement', () => {
    // Arrange
      const grade = 77
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("N - Needs Improvement")
  });

  it('When the teacher inputs a grade less than 80, then the grade of the student should be D - Did not Meet Expectation', () => {
    // Arrange
      const grade = 65
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("D - Did not Meet Expectation")
  });

  it('When the teacher inputs a grade less than 80, then the grade of the student should be D - Did not Meet Expectation', () => {
    // Arrange
      const grade = 0
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("D - Did not Meet Expectation")
  });

  it('When the teacher inputs a grade that is not a number, then it should return Please input a numerical grade', () => {
    // Arrange
      const grade = 'hello'
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("Please input a numerical grade")
  });

  it('When the teacher inputs a grade more than 100, it should return Please enter a valid input', () => {
    // Arrange
      const grade = 'hello'
    // Act
      const result = gradeClassifier(grade)
    // Assert
      expect(result).toMatch("Please input a numerical grade")
  });
});
