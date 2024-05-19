function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (
    getGrade(score) === "A++" ||
    getGrade(score) === "A" ||
    getGrade(score) === "B" ||
    getGrade(score) === "C" ||
    getGrade(score) === "D"
  ) {
    return true;
  } else {
    return false;
  }
}

function studentMsg(totalScores, studentScore) {
  let message = "";

  if (
    getAverage(totalScores) === getAverage(totalScores) &&
    getGrade(studentScore) === "A++"
  ) {
    message = `Class average: ${getAverage(
      totalScores
    )}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else if (
    getAverage(totalScores) === getAverage(totalScores) &&
    getGrade(studentScore) === "A"
  ) {
    message = `Class average: ${getAverage(
      totalScores
    )}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else if (
    getAverage(totalScores) === getAverage(totalScores) &&
    getGrade(studentScore) === "B"
  ) {
    message = `Class average: ${getAverage(
      totalScores
    )}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else if (
    getAverage(totalScores) === getAverage(totalScores) &&
    getGrade(studentScore) === "C"
  ) {
    message = `Class average: ${getAverage(
      totalScores
    )}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else if (
    getAverage(totalScores) === getAverage(totalScores) &&
    getGrade(studentScore) === "D"
  ) {
    message = `Class average: ${getAverage(
      totalScores
    )}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  } else {
    message = `Class average: ${getAverage(
      totalScores
    )}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
  }
  return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));
let returnValue = studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 59);
console.log(returnValue);
