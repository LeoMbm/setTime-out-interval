let body = document.querySelector('body');
let div = document.createElement('div')
let button = document.createElement('button');
let time = 0;




function displayText() {

    let h1 = document.createElement('h1');
    h1.setAttribute ('id','target')
    button.innerText = 'Click me for reset'
    body.appendChild(div);
    div.append(h1);
    div.appendChild(button);
    console.log('button ready');

 }

 displayText();


 
 
 
 
const departMinutes = 0.01
let temps = departMinutes * 60
let timeInBox = document.createElement('p')

function chronometer(){
     
    timeInBox.innerText = temps
    div.append(timeInBox)

    
    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
      
        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
      
        timeInBox.innerText = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps + 1

        if(secondes == 59){

            alert (minutes +' passed ago')
        }

      }, 1000)

 }




 chronometer();


 function clearTimer() {
    temps--;
    timeInBox.textContent;
    if (temps === 0) {
        
        temps = 0
    }
}
 
 
 button.addEventListener('click', clearTimer)

 //  function warningTime(){



//     setInterval(() => {

//         alert('A minute passed ago')
        
//     }, 61000);
//  }
 

// warningTime();