let container = document.createElement('div');
container.setAttribute('id', 'container');

let startContainer = document.createElement('div');
startContainer.className = 'start'

let startButton = document.createElement('button');
startButton.setAttribute('id', 'launcher')
startButton.innerText = 'Press for start'

let scoreContainer = document.createElement('div');
scoreContainer.className = 'scoreContainer';
let score = document.createElement('h1')
score.innerText = 'Score: '
score.setAttribute('id', 'result')


document.body.appendChild(container)
container.appendChild(scoreContainer)
container.appendChild(startContainer);
startContainer.appendChild(startButton);
scoreContainer.appendChild(score);

let cases = document.createElement('div');
cases.setAttribute('class', 'case');
let holes = document.createElement('div');






// LETS MAKE REAL CODE

startButton.addEventListener('click', launchGame)

function launchGame(){
  
    startButton.style.display = 'hidden'
    startContainer.style.display = 'hidden'


    cases.style.display = 'grid';
    scoreContainer.style.display = 'unset';

    
    for (let i = 0; i < 16; i++){
        
        holes = document.createElement('div')
        
        
        holes.setAttribute('class', 'hole', 'style', 'display')
        cases.appendChild(holes)
        // holes.style.display = 'unset'
    }
    
    
    container.appendChild(cases);

    startContainer.remove()

}

let curr = 0;
function randomTime() {


}



function randomHoles() {

holes.forEach(elem => {
    elem.c
});


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