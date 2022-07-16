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
            let whoContainer = document.querySelector(".questionWho")
            let div = document.createElement("div")
            div.setAttribute("id","flexCardWho")
            
            categoryWho.forEach((element) => {
                let card = document.createElement("card")
                card.setAttribute("class",`${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = element.question
                card.appendChild(h3)
                let buttonOne = document.createElement("button")
                let buttonTwo = document.createElement("button")
                buttonOne.innerHTML = element.answers[0]
                buttonTwo.innerHTML = element.answers[1]
                points += 100
                div.appendChild(card)
                div.appendChild(buttonOne)
                div.appendChild(buttonTwo)
            })
           
            whoContainer.appendChild(div)
            
        }
        forWho()

        const forWhat = () => {
            let points = 100
            let whatContainer = document.querySelector(".questionWhat")
            let div = document.createElement("div")
            div.setAttribute("id","flexCardWhat")

            categoryWhat.forEach((element) => {
                let card = document.createElement("card")
                card.setAttribute("class",`${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = element.question
                card.appendChild(h3)
                let buttonOne = document.createElement("button")
                let buttonTwo = document.createElement("button")
                buttonOne.innerHTML = element.answers[0]
                buttonTwo.innerHTML = element.answers[1]
                points += 100
                div.appendChild(card)
                div.appendChild(buttonOne)
                div.appendChild(buttonTwo)
            })

            whatContainer.appendChild(div)
        }
        forWhat()

        const forWhere = () => {
            let points = 100
            let whereContainer = document.querySelector(".questionWhere")
            let div = document.createElement("div")
            div.setAttribute("id","flexCardWhere")
            categoryWhere.forEach((element) => {
                let card = document.createElement("card")
                card.setAttribute("class",`${points}`)
                let h3 = document.createElement("h3")
                h3.innerHTML = element.question
                card.appendChild(h3)
                let buttonOne = document.createElement("button")
                let buttonTwo = document.createElement("button")
                buttonOne.innerHTML = element.answers[0]
                buttonTwo.innerHTML = element.answers[1]
                points += 100
                div.appendChild(card)
                div.appendChild(buttonOne)
                div.appendChild(buttonTwo)
        })
        whereContainer.appendChild(div)
    }
    forWhere()

    const forWhen = () => {
        let points = 100
        let whenContainer = document.querySelector(".questionWhen")
        let div = document.createElement("div")
        div.setAttribute("id","flexCardWhen")
        categoryWhere.forEach((element) => {
            let card = document.createElement("card")
            card.setAttribute("class",`${points}`)
            let h3 = document.createElement("h3")
            h3.innerHTML = element.question
            card.appendChild(h3)
            let buttonOne = document.createElement("button")
            let buttonTwo = document.createElement("button")
            buttonOne.innerHTML = element.answers[0]
            buttonTwo.innerHTML = element.answers[1]
            points += 100
            div.appendChild(card)
            div.appendChild(buttonOne)
            div.appendChild(buttonTwo)
    })
    whenContainer.appendChild(div)
}
forWhen()