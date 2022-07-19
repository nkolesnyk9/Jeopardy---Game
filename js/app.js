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


const categoryWhat = [ 
   {
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

const categoryWhere = [ 
   {
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

const categoryWhen = [ 
   {
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

cards.forEach(card => card.addEventListener('click',flipCard));


const forWhoOne = () => {
   let points = 100 
       let questionCard = document.querySelector(".whoOne")
       let h3 = document.createElement("h3")
       h3.innerHTML = categoryWho[0].question
       questionCard.appendChild(h3)
       let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
       let buttonOne = document.createElement("button")
      buttonOne.setAttribute("class","buttonOne")
      let buttonTwo = document.createElement("button")
      buttonTwo.setAttribute("class","buttonTwo")
       buttonOne.innerHTML = categoryWho[0].answers[0]
       buttonTwo.innerHTML = categoryWho[0].answers[1]
       divButton.appendChild(buttonOne)
       divButton.appendChild(buttonTwo)
       

       
       const buttons = document.querySelector(".divButtons")
       let correctAnswer = categoryWho[0].correct
         console.log(correctAnswer)
         let h4 = document.createElement("h4")
         let scoreDisplay = document.querySelector(".score")
         scoreDisplay.appendChild(h4)
       buttons.addEventListener("click",() => {
         alert("you clicked the button")
         if(buttonOne === correctAnswer){
           h4.innerHTML = points
         } else if (buttonOne != correctAnswer) {
           h4.innerHTML = 0
         }
         if(buttonTwo === correctAnswer){
           h4.innerHTML = points
         } else if (buttonTwo != correctAnswer) {
           h4.innerHTML = 0
          
         }
         
       })
     
    
      
}
forWhoOne()

const forWhoTwo = () => {
   let questionCard = document.querySelector(".whoTwo")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWho[1].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
   divButton.setAttribute("class", "divButtons")
   questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWho[1].answers[0]
   buttonTwo.innerHTML = categoryWho[1].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)
   

}
forWhoTwo()
const forWhoThree = () => {
   let questionCard = document.querySelector(".whoThree")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWho[2].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWho[2].answers[0]
   buttonTwo.innerHTML = categoryWho[2].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhoThree()

const forWhatOne = () => {
   let questionCard = document.querySelector(".whatOne")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhat[0].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhat[0].answers[0]
   buttonTwo.innerHTML = categoryWhat[0].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhatOne()

const forWhatTwo = () => {
   let questionCard = document.querySelector(".whatTwo")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhat[1].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhat[1].answers[0]
   buttonTwo.innerHTML = categoryWhat[1].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhatTwo()

const forWhatThree = () => {
   let questionCard = document.querySelector(".whatThree")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhat[2].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhat[2].answers[0]
   buttonTwo.innerHTML = categoryWhat[2].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhatThree()

const forWhereOne = () => {
   let questionCard = document.querySelector(".whereOne")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhere[0].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhere[0].answers[0]
   buttonTwo.innerHTML = categoryWhere[0].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhereOne()

const forWhereTwo = () => {
   let questionCard = document.querySelector(".whereTwo")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhere[1].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhere[1].answers[0]
   buttonTwo.innerHTML = categoryWhere[1].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhereTwo()

const forWhereThree = () => {
   let questionCard = document.querySelector(".whereThree")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhere[2].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhere[2].answers[0]
   buttonTwo.innerHTML = categoryWhere[2].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhereThree()

const forWhenOne = () => {
   let questionCard = document.querySelector(".whenOne")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhen[0].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhen[0].answers[0]
   buttonTwo.innerHTML = categoryWhen[0].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhenOne()

const forWhenTwo = () => {
   let questionCard = document.querySelector(".whenTwo")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhen[1].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhen[1].answers[0]
   buttonTwo.innerHTML = categoryWhen[1].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhenTwo()

const forWhenThree = () => {
   let questionCard = document.querySelector(".whenThree")
   let h3 = document.createElement("h3")
   h3.innerHTML = categoryWhen[2].question
   questionCard.appendChild(h3)
   let divButton = document.createElement("div")
       divButton.setAttribute("class", "divButtons")
       questionCard.appendChild(divButton)
   let buttonOne = document.createElement("button")
  buttonOne.setAttribute("class","buttonOne")
  let buttonTwo = document.createElement("button")
  buttonTwo.setAttribute("class","buttonTwo")
   buttonOne.innerHTML = categoryWhen[2].answers[0]
   buttonTwo.innerHTML = categoryWhen[2].answers[1]
   divButton.appendChild(buttonOne)
   divButton.appendChild(buttonTwo)

}
forWhenThree()




// const buttons = document.querySelectorAll("button")
