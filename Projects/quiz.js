document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "1. Which planet is known as the Red Planet?",
            choices: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "2. Who wrote the play 'Romeo and Juliet'?",
            choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            answer: "William Shakespeare"
        },
        {
            question: "3. What is the largest ocean on Earth?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        }
    ];

    const displayQuiz = document.getElementById('quiz-container');
    const displayQues = document.getElementById('question-container');
    const displayResult = document.getElementById('result-container');
    const choiceList = document.getElementById('choices-list');
    const questext = document.getElementById('question-text');
    const displayScore = document.getElementById('score');
    const nextBtnDisplay = document.getElementById('next-btn');
    const displayRestartBtn = document.getElementById('restart-btn');
    const displayStartBtn = document.getElementById('start-btn');

    let currentQuesIndex = 0;
    let score = 0;

    displayStartBtn.addEventListener('click', starQuiz);

    function starQuiz() {
        displayStartBtn.classList.add('hidden');
        displayResult.classList.add('hidden');
        displayQues.classList.remove('hidden');
        showQues()
    }

    function showQues() {
        nextBtnDisplay.classList.add('hidden');
        questext.textContent = questions[currentQuesIndex].question;
        choiceList.innerHTML = ""; //clear previous choice
        questions[currentQuesIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice
            li.addEventListener('click', () => selectAns(choice));
            choiceList.appendChild(li);
        });
    }

    function selectAns(choice) {
        const correctAns = questions[currentQuesIndex].answer;
        if(choice === correctAns) {
            score++;
        }
        nextBtnDisplay.classList.remove('hidden');
    };

    nextBtnDisplay.addEventListener('click', () => {
        currentQuesIndex++
        if(currentQuesIndex < questions.length) {
            showQues();
        } else {
            showResult();
        }
    });

    function showResult() {
        displayQues.classList.add('hidden');
        displayResult.classList.remove('hidden');
        displayScore.textContent = `${score} out of ${questions.length}`;
    }

    displayRestartBtn.addEventListener('click', () => {
        currentQuesIndex = 0;
        score = 0;
        displayResult.classList.add('hidden');
        starQuiz();
    })
});