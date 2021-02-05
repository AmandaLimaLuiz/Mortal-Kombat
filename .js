const sub = document.querySelector('.sub');
const background = document.querySelector('.background');


let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump ();
    }
  }
}
function jump (){
  isJumping= true;

    
    let upInterval = setInterval(()  => {
        if (position >= 150) {
     clearInterval (upInterval);

let downInterval = setInterval (() => {
    if (position <= 0) {
        clearInterval (downInterval);
        isJumping = false;
    }  else{
        position -= 20;
        sub.style.bottom = position + 'px';
    }
},20);
        }else {
            position += 20;
            sub.style.bottom = position + 'px';
        }
    }, 20);
}

function createFire() {
    const fire= document.createElement('div');
    let firePosition= 1000;
    let randomTime= Math.random() * 6000;

    fire.classList.add('fire');
    fire.style.left= 2000 + 'px';
    background.appendChild(fire);
    
    let leftInterval= setInterval (() => {
        if (firePosition <- 10) {
            clearInterval(leftInterval);
            background.removeChild(fire);
        } else if (firePosition > 0 && firePosition < 60 && position < 60) {

            clearInterval(leftInterval);
            document.body.innerHTML= '<h1 class = "game-over"> Fatality </h1>';
            
        } else {
            firePosition -= 10;
            fire.style.left = firePosition + 'px';
        }
    }, 20);
    setTimeout(createFire, randomTime);
}

createFire();
document.addEventListener('keyup',handleKeyUp);