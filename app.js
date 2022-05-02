let body = document.querySelector('body');
let button = document.createElement('button')
// button.setAttribute('id', 'target')
let prout = "prout"
let currency = 0;











function displayText() {

    let h1 = document.createElement('h1');
    h1.setAttribute ('id','target')
    let div = document.createElement('div')
    button.innerText = 'Click me for a present'
    let text =  `<h1>Hello world</h1>`;
    body.appendChild(div);
    div.append(h1);
    div.appendChild(button);
    console.log(text);
    

 }

 displayText();











 function fartExplosion(){

    // Find the target element to write to
    var elem = document.getElementById('target');

    // Append next character into the text content
    elem.textContent = elem.textContent + prout.charAt(currency);

    // Update the current position
    currency++;

    // if we're not yet in the end of the string
    // we have a little (20ms) pause before we write the next character

    if (currency < prout.length)
        window.setTimeout(fartExplosion, 200);

    
};



 button.addEventListener('click', fartExplosion)


 
