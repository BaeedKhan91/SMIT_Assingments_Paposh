const correctAnswers = ["c", "b","c", "b", "b", "c", "a", "b", "c","b"  ];

const form = document.querySelector("#quiz-form")

console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const totalquestion = correctAnswers.length
    const scorePerQuestion = 100 / totalquestion
    const userAnswer = []
    for(let i = 1; i <= correctAnswers.length; i++){

        userAnswer.push(form[`q${i}`].value,);
        
    }
    let score = 0
    for(let i = 0 ; i < userAnswer.length; i++){
        if (userAnswer[i] === correctAnswers[i]) {
            score += scorePerQuestion
        }
    }
    scrollTo(0,0)
    document.querySelector("#result").classList.remove("d-none")
    let counter = 0
    const interval = setInterval(()=>{
        counter++
        document.querySelector("#score").textContent = `${counter}%`
        if (counter === score) {
            clearInterval(interval)
        }
    },30)



})




