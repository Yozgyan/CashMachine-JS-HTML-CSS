//let btn = document.getElementById('buttonN');


let btn = document.getElementById('diceRoll');

btn.addEventListener('click', randomImage);

score = 0;


function randomImage(){
    let imagesArray = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
    let num = Math.floor(Math.random()*6);
    document.canvas.src=imagesArray[num];

    
    
        if(score >= 20 ){
            score = 0;
            alert('You win');
        } else if(num == 0) {
            score = 0;
            alert('Upps you dice 1 `Game over`')
        }
  
        score += num +1
        document.getElementById("dom").innerHTML="Your score is " + score;
};



