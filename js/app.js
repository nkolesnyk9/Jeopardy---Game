let score = 0

const categoryWho = [

    {
        question: 'Who wrote the Harry Potter books?',
        answers: ['JK Rowling', 'JRR Tolkien'],
        correct: 'JK Rowling',
    },
    {
        question: 'Who was born on Krypton?',
        answers: ['Batman', 'Superman'],
        correct: 'Superman',
    },
    {
        question: 'Who designed the first car?',
        answers: ['Carl Benz', 'Henry Ford'],
        correct: 'Carl Benz',
    },
];


const categoryWhat = [{
        question: 'What color is Ukrainian flag?',
        answers: ['blue & yellow', 'red,blue & white'],
        correct: 'blue & yellow',
    },
    {
        question: 'What is the capital of Saudi Arabia?',
        answers: ['Riyadh', 'Shaqra'],
        correct: 'Riyadh',
    },
    {
        question: 'What do Koalas eat?',
        answers: ['Straw', 'Eucalypt'],
        correct: 'Eucalypt',
    }
];

const categoryWhere = [{
        question: 'Where is Central Park?',
        answers: ['New York', 'Chicago'],
        correct: 'New York',
    },
    {
        question: 'Where is Coliseum?',
        answers: ['Milan', 'Rome'],
        correct: 'Rome',
    },
    {
        question: 'Where is Mount Kilamanjaro?',
        answers: ['Zimbabwe', 'Tanzania'],
        correct: 'Tanzania',
    }
];

const categoryWhen = [{
        question: 'When is Christmas?',
        answers: ['30th Dec', '24th/25th Dec'],
        correct: '24th/25th Dec',
    },
    {
        question: 'When twin towers were destroyed?',
        answers: ['9/11/2001', '9/11/2002'],
        correct: '9/11/2001',
    },
    {
        question: 'When JFK was shot?',
        answers: ['1963', '1964'],
        correct: '1963',
    }
];

const cards = document.querySelectorAll('.back-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));


const forWhoOne = () => {
    let points = 100
    let questionCard = document.querySelector(".whoOne")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWho[0].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhoOne buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhoOne buttonTwo")
    buttonOne.innerHTML = categoryWho[0].correct
    buttonTwo.innerHTML = categoryWho[0].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)

    const buttonLeft = document.querySelector(".buttonLWhoOne")
    const buttonRight = document.querySelector(".buttonRWhoOne")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWho[0].correct

        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 100 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Inccorect Answer"
        }
    }

    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)



}
forWhoOne()

const forWhoTwo = () => {
    let points = 200
    let questionCard = document.querySelector(".whoTwo")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWho[1].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhoTwo buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhoTwo buttonTwo")
    buttonOne.innerHTML = categoryWho[1].answers[0]
    buttonTwo.innerHTML = categoryWho[1].correct
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhoTwo")
    const buttonRight = document.querySelector(".buttonRWhoTwo")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWho[1].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 200 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }

    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)

}
forWhoTwo()


const forWhoThree = () => {
    let points = 300
    let questionCard = document.querySelector(".whoThree")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWho[2].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhoThree buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhoThree buttonTwo")
    buttonOne.innerHTML = categoryWho[2].correct
    buttonTwo.innerHTML = categoryWho[2].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhoThree")
    const buttonRight = document.querySelector(".buttonRWhoThree")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWho[2].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 300 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }

    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)

}
forWhoThree()

const forWhatOne = () => {
    let points = 100
    let questionCard = document.querySelector(".whatOne")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhat[0].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhatOne buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhatOne buttonTwo")
    buttonOne.innerHTML = categoryWhat[0].correct
    buttonTwo.innerHTML = categoryWhat[0].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)

    const buttonLeft = document.querySelector(".buttonLWhatOne")
    const buttonRight = document.querySelector(".buttonRWhatOne")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhat[0].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 100 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }

    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)


}
forWhatOne()

const forWhatTwo = () => {
    let points = 200
    let questionCard = document.querySelector(".whatTwo")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhat[1].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhatTwo buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhatTwo buttonTwo")
    buttonOne.innerHTML = categoryWhat[1].correct
    buttonTwo.innerHTML = categoryWhat[1].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhatTwo")
    const buttonRight = document.querySelector(".buttonRWhatTwo")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhat[1].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 200 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)


}
forWhatTwo()

const forWhatThree = () => {
    let points = 300
    let questionCard = document.querySelector(".whatThree")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhat[2].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhatThree buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhatThree buttonTwo")
    buttonOne.innerHTML = categoryWhat[2].answers[0]
    buttonTwo.innerHTML = categoryWhat[2].correct
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhatThree")
    const buttonRight = document.querySelector(".buttonRWhatThree")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhat[2].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 300 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Correct! You got 100 points"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)
}
forWhatThree()

const forWhereOne = () => {
    let points = 100
    let questionCard = document.querySelector(".whereOne")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhere[0].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhereOne buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhereOne buttonTwo")
    buttonOne.innerHTML = categoryWhere[0].correct
    buttonTwo.innerHTML = categoryWhere[0].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhereOne")
    const buttonRight = document.querySelector(".buttonRWhereOne")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhere[0].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 100 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)
}
forWhereOne()

const forWhereTwo = () => {
    let points = 200
    let questionCard = document.querySelector(".whereTwo")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhere[1].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhereTwo buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhereTwo buttonTwo")
    buttonOne.innerHTML = categoryWhere[1].answers[0]
    buttonTwo.innerHTML = categoryWhere[1].correct
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhereTwo")
    const buttonRight = document.querySelector(".buttonRWhereTwo")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhere[1].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 200 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)
}
forWhereTwo()

const forWhereThree = () => {
    let points = 300
    let questionCard = document.querySelector(".whereThree")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhere[2].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhereThree buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhereThree buttonTwo")
    buttonOne.innerHTML = categoryWhere[2].answers[0]
    buttonTwo.innerHTML = categoryWhere[2].correct
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhereThree")
    const buttonRight = document.querySelector(".buttonRWhereThree")

    let scoreDisplay = document.querySelector("#totalScore")

    const checkAnswer = (e) => {
        let correctAnswer = categoryWhere[2].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 300 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)
}
forWhereThree()

const forWhenOne = () => {
    let points = 100
    let questionCard = document.querySelector(".whenOne")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhen[0].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhenOne buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhenOne buttonTwo")
    buttonOne.innerHTML = categoryWhen[0].answers[0]
    buttonTwo.innerHTML = categoryWhen[0].correct
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)

    const buttonLeft = document.querySelector(".buttonLWhenOne")
    const buttonRight = document.querySelector(".buttonRWhenOne")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhen[0].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 100 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)

}
forWhenOne()

const forWhenTwo = () => {
    let points = 200
    let questionCard = document.querySelector(".whenTwo")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhen[1].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhenTwo buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhenTwo buttonTwo")
    buttonOne.innerHTML = categoryWhen[1].correct
    buttonTwo.innerHTML = categoryWhen[1].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhenTwo")
    const buttonRight = document.querySelector(".buttonRWhenTwo")

    let scoreDisplay = document.querySelector("#totalScore")

    const checkAnswer = (e) => {
        let correctAnswer = categoryWhen[1].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 200 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)
}
forWhenTwo()

const forWhenThree = () => {
    let points = 300
    let questionCard = document.querySelector(".whenThree")
    let h3 = document.createElement("h3")
    h3.innerHTML = categoryWhen[2].question
    questionCard.appendChild(h3)
    let buttonOne = document.createElement("button")
    buttonOne.setAttribute("class", "buttonLWhenThree buttonOne")
    let buttonTwo = document.createElement("button")
    buttonTwo.setAttribute("class", "buttonRWhenThree buttonTwo")
    buttonOne.innerHTML = categoryWhen[2].correct
    buttonTwo.innerHTML = categoryWhen[2].answers[1]
    questionCard.appendChild(buttonOne)
    questionCard.appendChild(buttonTwo)
    const buttonLeft = document.querySelector(".buttonLWhenThree")
    const buttonRight = document.querySelector(".buttonRWhenThree")

    let scoreDisplay = document.querySelector("#totalScore")
    const checkAnswer = (e) => {
        let correctAnswer = categoryWhen[2].correct
        if (e.target.innerText === correctAnswer) {
            questionCard.classList.add("correct-answer")
            questionCard.innerText = "Correct! You got 300 points"
            score = score + points
            scoreDisplay.innerText = `Score: ${score}`
            displayWin()
        } else {
            questionCard.classList.add("wrong-answer")
            questionCard.innerText = "Incorrect Answer"

        }
    }
    buttonLeft.addEventListener("click", checkAnswer)
    buttonRight.addEventListener("click", checkAnswer)

}
forWhenThree()



function displayWin() {

    if (score >= 2400) {
        console.log("You won")
        let wonDisplay = document.querySelector(".score")
        wonDisplay.classList.add("won")
        wonDisplay.innerText = "🥳🥳Congrats you won!🥳🥳"

    }


}