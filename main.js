//let btn = document.getElementById('buttonN');


let btn = document.getElementById('diceRoll');
btn.addEventListener('click', randomImage);
score = 0;

function randomImage() {
    document.getElementById("rolled1").innerHTML = " ";
    document.getElementById("text11").innerHTML = " ";
    document.getElementById("text22").innerHTML = " ";
    document.body.style.background = "";

    let imagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
    let num = Math.floor(Math.random() * 6);
    document.canvas.src = imagesArray[num];
    score += num + 1;
    document.getElementById("dom").innerHTML = "Your score is " + score;


    if (num == 0) {
        document.getElementById("rolled1").innerHTML = "Lost the game. Try again " + score;
        document.getElementById("text11").innerHTML = "Lost the game. Try again ";
        document.getElementById("text22").innerHTML = "Lost the game. Try again ";
        //alert("YOU LOST") 
        errorColor("rgb(255,0,0)");
        score = 0;
        //document.getElementById("Winner").innerHTML=""
        //randomImage();
        // alert('You win');
    } else if (score > 20) {
        document.getElementById("rolled1").innerHTML = "You Win " + score;
        document.getElementById("text11").innerHTML = "You Win " + score;
        document.getElementById("text22").innerHTML = "You Win " + score;
        score = 0;
        errorColor("rgb(87,189,130)");
        //document.getElementById("Winner").innerHTML="";
        //document.getElementById("Winner").innerHTML="";
        // alert('Upps you dice 1 `Game over`')
    }
};


function errorColor(color) {
    document.body.style.background = color;

}