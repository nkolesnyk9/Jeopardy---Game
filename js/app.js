const scoreWindow = document.getElementById("score")
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

const forWho = () => {
            let points = 100
            let whoContainer = document.getElementById("who-container")
            let div = document.createElement("div")
            div.setAttribute("id","flexCardWho")
            
            categoryWho.forEach((element) => {
                let card = document.createElement("div")
                card.setAttribute("class",`card who ${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = element.question
                card.appendChild(h3)
                let buttonOne = document.createElement("button")
            buttonOne.setAttribute("class","buttonOne")
            let buttonTwo = document.createElement("button")
            buttonTwo.setAttribute("class","buttonTwo")
                buttonOne.innerHTML = element.answers[0]
                buttonTwo.innerHTML = element.answers[1]
                points += 100
                div.appendChild(card)
                card.appendChild(buttonOne)
                card.appendChild(buttonTwo)
            })
           
            whoContainer.appendChild(div)
            
        }
forWho()

const forWhat = () => {
            let points = 100
            let whatContainer = document.getElementById("what-container")
            let div = document.createElement("div")
            div.setAttribute("id","flexCardWhat")

            categoryWhat.forEach((element) => {
                let card = document.createElement("div")
                card.setAttribute("class",`card ${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = element.question
                card.appendChild(h3)
                let buttonOne = document.createElement("button")
            buttonOne.setAttribute("class","buttonOne")
            let buttonTwo = document.createElement("button")
            buttonTwo.setAttribute("class","buttonTwo")
                buttonOne.innerHTML = element.answers[0]
                buttonTwo.innerHTML = element.answers[1]
                points += 100
                div.appendChild(card)
                card.appendChild(buttonOne)
                card.appendChild(buttonTwo)
            })

            whatContainer.appendChild(div)
        }
forWhat()

const forWhere = () => {
            let points = 100
            let whereContainer = document.getElementById("where-container")
            let div = document.createElement("div")
            div.setAttribute("id","flexCardWhere")
            categoryWhere.forEach((element) => {
                let card = document.createElement("div")
                card.setAttribute("class",`card ${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = element.question
                card.appendChild(h3)
                let buttonOne = document.createElement("button")
                buttonOne.setAttribute("class","buttonOne")
                let buttonTwo = document.createElement("button")
                buttonTwo.setAttribute("class","buttonTwo")
                buttonOne.innerHTML = element.answers[0]
                buttonTwo.innerHTML = element.answers[1]
                points += 100
                div.appendChild(card)
                card.appendChild(buttonOne)
                card.appendChild(buttonTwo)
        })
        whereContainer.appendChild(div)
    }
forWhere()

const forWhen = () => {
        let points = 100
        let whenContainer = document.getElementById("when-container")
        let div = document.createElement("div")
        div.setAttribute("id","flexCardWhen")
        categoryWhere.forEach((element) => {
            let card = document.createElement("div")
            card.setAttribute("class",`card ${points}`)
            let h3 = document.createElement("h3")
            h3.innerHTML = element.question
            card.appendChild(h3)
            let buttonOne = document.createElement("button")
            buttonOne.setAttribute("class","buttonOne")
            let buttonTwo = document.createElement("button")
            buttonTwo.setAttribute("class","buttonTwo")
            buttonOne.innerHTML = element.answers[0]
            buttonTwo.innerHTML = element.answers[1]
            points += 100
            card.appendChild(buttonOne)
            card.appendChild(buttonTwo)
            div.appendChild(card)
    })
    whenContainer.appendChild(div)
}
forWhen()



// const flipCard = () => {
//     let backCard = document.getElementsByClassName("card")//[div.card.100,div.card.100, etc]
//     console.log(backCard)
//     let backOfCard = document.createElement("div")
//     backOfCard.setAttribute("class", "backOfCard")
//     console.log(backOfCard)

    
//     backCard.appendChild(backOfCard)
    
// }
// flipCard()

const flipCardWho = () => {
    let points = 100
            let whoCards= document.getElementById("flexCardWho")
            console.log(whoCards)
            let div = document.createElement("div")
            div.setAttribute("id","backCardWho")
            let cardWho = document.getElementsByClassName("who")
            console.log(cardWho)

            categoryWho.forEach((element) => {
                let card = document.createElement("div")
                card.setAttribute("class",`backCard ${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = points 
                points += 100
                card.appendChild(h3)
                div.appendChild(card)

            })

           whoCards.appendChild(div)
}
flipCardWho()





// const flipCardForWhat = () => {
//     let backOfWhat = document.getElementById("flexCardWhat")
//     let backCard = document.createElement("div")
//     backCard.setAttribute("class", "backCard")
//     console.log(backCard)
//     console.log(backOfWhat)
//     backOfWhat.appendChild(backCard)
// }
// flipCardForWhat()

// const flipCardForWhere = () => {
//     let backOfWhere = document.getElementById("flexCardWhere")
//     let backCard = document.createElement("div")
//     backCard.setAttribute("class", "backCard")
//     console.log(backCard)
//     console.log(backOfWhere)
//     backOfWhere.appendChild(backCard)
// }
// flipCardForWhere()

// const flipCardForWhen = () => {
//     let backOfWhen = document.getElementById("flexCardWhen")
//     let backCard = document.createElement("div")
//     backCard.setAttribute("class", "backCard")
//     console.log(backCard)
//     console.log(backOfWhen)
//     backOfWhen.appendChild(backCard)
// }
// flipCardForWhen
