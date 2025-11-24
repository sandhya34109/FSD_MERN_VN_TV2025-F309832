function startExam(callback) {
    setTimeout(() => {
        console.log("Exam started");
        callback();   
    }, 1000); //1 second delay 
}

function evaluateExam(callback) {
    setTimeout(() => {
        console.log("Evaluating answers");
        callback();   
    }, 1500);  //1.5 second delay
}

function declareResult() {
    setTimeout(() => {
        console.log("Result declared");
    }, 1000);  // 1 second delay
}

startExam(() => {
    evaluateExam(() => {
        declareResult();
    });
});
