// DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
// hour = hour % 12 || 12;


// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
setTimeout(showTime, 1000);

}
//Add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background and greeting


function setBackground() {

    let today = new Date(),
    hour = today.getHours();

 
    if(hour > 6 && hour < 12) {      
    //morning 
        document.body.style.backgroundImage = "url('pics/morning.jpg')";
        greeting.textContent = 'Good Morning!';
        document.body.style.color = 'white';
    
    } else if(hour >= 12 && hour < 18) {
        
    //afternoon
        document.body.style.backgroundImage = "url('pics/bg.jpg')";
        greeting.textContent = 'Good Afternoon!';
        document.body.style.color = 'white';
    
    } else {
    //evening
        document.body.style.backgroundImage = "url('pics/night.jpg')";
        greeting.textContent = 'Good Evening!';
        document.body.style.color = 'white';
    }
}

let x = 0;
let textEffect = "Welcome on my page!";
let container = document.getElementById('effect');

function animate() {
    if(x < textEffect.length) {
        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 80);
    }
}

//Run
showTime();
setBackground();
animate();
animateGreeting();






