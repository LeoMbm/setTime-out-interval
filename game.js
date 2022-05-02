

let startContainer = document.createElement('div');
startContainer.className = 'start'
let startButton = document.createElement('button');
startButton.setAttribute('id', 'launcher')
startButton.innerText = 'Press for start'

let scoreContainer = document.createElement('div');
scoreContainer.className = 'score';
let score = document.createElement('h1')
score.innerText = 'Score: '
score.setAttribute('id', 'score')


document.body.appendChild(scoreContainer)
document.body.appendChild(startContainer);
startContainer.appendChild(startButton);
scoreContainer.appendChild(score);

let cases = document.createElement('div');
cases.setAttribute('class', 'case');
let holes = document.createElement('div');






startButton.addEventListener('click', launchGame)

function launchGame(){
  
    startButton.style.display = 'hidden'
    startContainer.style.display = 'hidden'


    cases.style.display = 'grid';

    
    for (let i = 0; i < 16; i++){
        
        holes = document.createElement('div')
        
        
        holes.setAttribute('class', 'hole', 'style', 'display')
        cases.appendChild(holes)
        // holes.style.display = 'unset'
    }
    
    
    document.body.appendChild(cases);

    startContainer.remove()

}










































// function displayGame() {
    
//     for (let i = 0; i < 16; i++){
        
//         holes = document.createElement('div')
        
        
//         holes.setAttribute('class', 'hole')
//         cases.appendChild(holes)
//         document.body.appendChild(cases);
//     }
    
    

// }
//     displayGame();