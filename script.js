const quizDB = [
    {
        question: "Q1: What is the full form of HTML ?",
        a: "Hello to My Land",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Link Markup Language",
        ans: 'ans2'
    },
    {
        question: "Q2: What is the full form of CSS ?",
        a: "Call se sahara",
        b: "Cascading Profile Sheets",
        c: "Cascading Style Sheets",
        d: "Cascading Graphics Sheets",
        ans: 'ans3'
    },
    {
        question: "Q3: What is the full form of JS ?",
        a: "JavaScript",
        b: "JScript",
        c: "JallanScript",
        d: "Jaantu Script",
        ans: 'ans1'
    },
    {
        question: "Q4: What is the full form of MERN ?",
        a: "MongoDB Express React Node",
        b: "MongoDB Early React Node",
        c: "MongoDB Express Reactance Node",
        d: "MongoDB Express React Nude",
        ans: 'ans1'
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion= ()=>{
    question.textContent=quizDB[questionCount].question;
    option1.textContent=quizDB[questionCount].a;
    option2.textContent=quizDB[questionCount].b;
    option3.textContent=quizDB[questionCount].c;
    option4.textContent=quizDB[questionCount].d;
}

loadQuestion();

const getCheckAnswer = ()=>{
    let answer;

    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer= currAnsElem.id;
        }
    });
    return answer;
}

const deselectAll=()=>{
    answers.forEach((c)=> c.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();


    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h2>Your Score : ${score}/${quizDB.length}</h2>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `
        showScore.classList.remove('scoreArea');
    }
});