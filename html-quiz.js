const quizdb = [
    {
        question:  "HTML stands for - ",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is - ",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Body, Title",
        ans: "ans3"
    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<br>",
        d: "<b>",
        ans: "ans4"
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h1>",
        c: "<h6>",
        d: "<h>",
        ans: "ans2"
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        a: "<ul>",
        b: "<ol>",
        c: "<i>",
        d: "<li>",
        ans: "ans1"
    },
    {
        question: "Which character is used to represent the closing of a tag in HTML?",
        a: " \ ",
        b: " . ",
        c: " / ",
        d: " ; ",
        ans: "ans3"
    },
    {
        question: "<input> is -",
        a: "a format tag.",
        b: "an empty tag.",
        c: "All of the above.",
        d: "None of the above.",
        ans: "ans2"
    },
    {
        question: "The <hr> tag in HTML is used for -",
        a: "new line",
        b: "vertical ruler",
        c: "new paragraph",
        d: "horizontal ruler",
        ans: "ans4"
    },
    {
        question: "Which of the following attribute is used to provide a unique name to an element?",
        a: "class",
        b: "id",
        c: "type",
        d: "name",
        ans: "ans2"
    },
    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        a: "<marquee>",
        b: "<scroll>",
        c: "<div>",
        d: "<section>",
        ans: "ans1"
    },
    {
        question: "Which of the following is the container for <tr>, <th>, and <td> ?",
        a: "<data>",
        b: "<table>",
        c: "<group>",
        d: "<paragraph>",
        ans: "ans2"
    },
    {
        question: "What are the types of unordered or bulleted list in HTML?",
        a: "disc, square, triangle",
        b: "polygon, triangle, circle",
        c: "disc, circle, square",
        d: "All of the above",
        ans: "ans1"
    },
    {
        question: "Which of the following HTML attribute is used to define inline styles?",
        a: "style",
        b: "type",
        c: "class",
        d: "script",
        ans: "ans1"
    },
    {
        question: "Which of the following tag is used to add rows in the table?",
        a: "<td> and </td>",
        b: "<th> and </th>",
        c: "<tr> and </tr>",
        d: "None",
        ans: "ans3"
    }
];

const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScoreCard = document.querySelector('#scorecard');


let QuestionCount = 0;
let score = 0;

const loadQuestions = () => {
    const QuestionList = quizdb[QuestionCount];
    question.innerText = QuestionList.question;
    option1.innerText = QuestionList.a;
    option2.innerText = QuestionList.b;
    option3.innerText = QuestionList.c;
    option4.innerText = QuestionList.d;
}

loadQuestions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizdb[QuestionCount].ans){
        score++;
    }
    QuestionCount++;
    // if(checkedAnswer === "")
    // {
    //     showScoreCard.innerHTML = "<h3> Select an option </h3>";
    //     showScoreCard.classList.remove('score_div');
    // }
    // else
    // {
        if(QuestionCount < quizdb.length){
            loadQuestions();
        }
        else{
            showScoreCard.innerHTML = `
            <h3> You Scored:  ${score}/${quizdb.length} &smile; </h3>
            <button class ="btn" onclick = "location.reload()"> Play Again </button>
            `;
            showScoreCard.classList.remove('score_div');
        }
    // }
});