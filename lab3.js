let submissions = [
    {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true
},
    {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true
},
    {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false
},
    {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true
},
]

function addSubmission(array, newName, newScore, newDate) {
    const newObject = {
        name: newName,
        score: newScore,
        date: newDate 
    }
      if (newScore >= 60) {
        newObject.passed = true;
    } else {
       newObject.passed = false; 
    }
    array.push(newObject);
}    
    addSubmission(submissions, "Jerry", 50, "2020-10-17");
    console.log(submissions);   

function  deleteSubmissionByIndex(array, index) {
    array.splice(2,1);
    
}
deleteSubmissionByIndex(submissions,2)
console.log(submissions);


function deleteSubmissionByName(array, name) {
let pos = array.findIndex(element => element.name===name);
array.splice(pos,1);

}
deleteSubmissionByName(submissions,"Jill")
console.log(submissions);


function editSubmission(array, index, score) {
  let newScore=array[index];
   newScore.score=score;
   if (score >= 60) {
    newScore.passed = true;
} else {
   newScore.passed = false;
}
}
editSubmission(submissions, 2, 100);
console.log(submissions);

function findSubmissionByName(array, name) {
    let found = array.find(element => element.name===name);
    return found;
}
findSubmissionByName(submissions, "Joe");
console.log(findSubmissionByName(submissions, "Joe"))


function findLowestScore (array) {
    let score = submissions.score;
    let lowestSubmission = array[0];
    array.forEach(element => {
        if (element.score < lowestSubmission.score) {
            lowestSubmission = element;
        }
    });
    return lowestSubmission;
}
findLowestScore(submissions);
console.log(findLowestScore(submissions));

function findAverageScore (array) {
    let score = submissions.score;
        for (const submission of submissions) {
        let sum = 0;
        for(let i =0; i < array.length; i++) {
        sum += array[i].score;
        }
        let averageScore = sum / array.length;
        return averageScore;
        }
        }
findAverageScore(submissions);
console.log(findAverageScore(submissions));

function filterPassing(array) {
    let score = submissions.score;
    const passing=array.filter(function (score){
    return score.score >= 60;
})
return passing;
}

filterPassing(submissions);
console.log(filterPassing(submissions));

function filter90AndAbove(array) {
    let score = submissions.score;
    const over90=array.filter(function (score) {
    return score.score >=90;      
    })
    return over90;
    }
   filter90AndAbove(submissions);
   console.log(filter90AndAbove(submissions));

