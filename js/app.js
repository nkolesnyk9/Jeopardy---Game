const scoreWindow = document.getElementById("score")
let score = 0

const forWho = () => {
    let whoContainer = document.getElementById("who-container")
    let card = document.getElementById("flexCard")
    for(let element of question) {
        card.innerHTML = element
    }
    whoContainer.appendChild(card)
}
forWho()

const categoryWho = [
    {
        category:"Who",
        questions:[
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
                ],
            },
        ]  
        
const categoryWhat = [ 
    {
        category:"What",
        questions:[
            {
                question: 'Who color is Ukrainian flag?',
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
            },
        ],
    }
]
    
const categoryWhere = [ 
    {
        category:"Where",
        questions:[
            {
                questionOne: 'Where is Central Park?',
                answersOne: ['New York', 'Chicago'],
                correct: 'New York',
            },
            {
                questionTwo: 'Where is Coliseum?',
                answersTwo: ['Milan', 'Rome'],
                correct: 'Rome',
            },
            {
                questionThree: 'Where is Mount Kilamanjaro?',
                answersThree: ['Zimbabwe', 'Tanzania'],
                correct: 'Tanzania',
            },
        ]
    }
]
    
const categoryWhen = [ 
        {
        category:"When",
        questions:[
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
            },
        ],

            }
        ]
    

