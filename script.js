var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    x=100;
    y=80;
    drawPole();
  }
function drawCanvas(){
    drawPole();
    drawFace();
    drawBody();
    drawLeftHand();
    drawRightHand();
}
function drawPole(){
    ctx.beginPath();
    ctx.moveTo(x, y-60);
    ctx.lineTo(x, y+30);
    ctx.lineWidth = 8;
    ctx.strokeStyle="#d1aeae";
    ctx.stroke();  
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x-15,y-60);
    ctx.lineTo(x+120,y-60);
    ctx.lineWidth = 7;
    ctx.stroke();  
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x+15,y-60);
    ctx.lineTo(x,y-40);
    ctx.lineWidth = 5;
    ctx.stroke();  
    ctx.closePath(); 
    ctx.beginPath();
    ctx.moveTo(x+80,y-60);
    ctx.lineTo(x+80,y-40);
    ctx.lineWidth = 2;
    ctx.stroke();  
    ctx.closePath();
}
function drawHappyFace(){
    drawFace();
    drawSmiley();
}
function drawFace(){
    ctx.beginPath();
    ctx.arc(x+80,y-30,10,0,2*Math.PI);
    ctx.strokeStyle="#fff";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x+76,y-32,1,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x+85,y-32,1,0,2*Math.PI);
    ctx.stroke();
}
function drawSmiley(){
    ctx.beginPath();
    ctx.arc(x+80,y-29,5,degreeToRadiant(20),degreeToRadiant(160));
    ctx.stroke();
}
function drawSaddie(){
    ctx.beginPath();
    ctx.arc(x+80,y-22,5,degreeToRadiant(200),degreeToRadiant(340));
    ctx.stroke();
}
function drawStraight(){
    ctx.beginPath();
    ctx.moveTo(x+75,y-26);
    ctx.lineTo(x+85,y-26)
    ctx.stroke();
}
function drawBody(){
    ctx.beginPath();
    ctx.moveTo(x+80,y-20);
    ctx.lineTo(x+80,y+5);
    ctx.lineWidth = 4;
    ctx.stroke();
}
function drawLeftHand(){
    ctx.beginPath();
    ctx.moveTo(x+80,y-18);
    ctx.lineTo(x+55,y-8);
    ctx.lineWidth = 2;
    ctx.stroke();
}
function drawRightHand(){
    ctx.beginPath();
    ctx.moveTo(x+80,y-18);
    ctx.lineTo(x+105,y-8);
    ctx.lineWidth = 2;
    ctx.stroke();
}
function drawLeftLeg(){
    ctx.beginPath();
    ctx.moveTo(x+80,y+5);
    ctx.lineTo(x+55,y+15);
    ctx.lineWidth = 2;
    ctx.stroke();
}
function drawRightLeg(){
    ctx.beginPath();
    ctx.moveTo(x+80,y+05);
    ctx.lineTo(x+105,y+15);
    ctx.lineWidth = 2;
    ctx.stroke();
}
function degreeToRadiant(deg){
    return deg*Math.PI/180;
}


//Keyboard Functions
var error=0;
var count=0;
var keys = document.getElementsByClassName("key");
[].forEach.call(keys,function(key){
             key.addEventListener('click',function(key){
                 var id = key.target.innerHTML;
                 document.getElementById(id).style.visibility="hidden";
                 word=word.toUpperCase();
                 if(word.indexOf(id)>-1){
                     for(i=0;i<word.length;i++){
                         if(id==word[i]){
                             count++;
                             var words = document.getElementsByClassName("letter");
                             words[i].innerHTML=id;                         
                         }
                     }
                     if(count==word.length){
                         finishGame("You Win");
                     }
                 }
                 else
                     {
                         error++;
                         if(error==1)
                             drawHappyFace();
                         if(error==2)
                             drawBody();
                         if(error==3)
                             drawLeftHand();
                         if(error==4){
                             ctx.closePath();
                             ctx.clearRect(0, 0, canvas.width,canvas.height);
                             ctx.beginPath();
                             drawCanvas();
                             drawStraight();
                         }
                         if(error==5)
                             drawLeftLeg();
                         if(error==6){
                             ctx.closePath();
                             ctx.clearRect(0, 0, canvas.width,canvas.height);
                             ctx.beginPath();
                             drawCanvas();
                             drawLeftLeg();
                             drawRightLeg();
                             drawSaddie();
                             finishGame("You Lose");
                         }
                     }
                 });
             });
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
word = generateNewWord();
function generateNewWord(){
    var words = WordList.split(" ");
    var max = words.length;
    var i = getRandomInt(max);
    var word = words[i];
    for(i=0;i<word.length;i++){
        var divElement = document.createElement("div");
        divElement.className="letter";
        var wordDOM = document.getElementById("word");
        wordDOM.appendChild(divElement);
    }
    return word;
}

function finishGame(str){
    canvas.style.opacity=0.5;
    var result=document.getElementById("result");
    var gameRes=document.getElementById("game-inputs");
    gameRes.style.opacity=0.5;
    result.style.display="block";
    result.innerHTML=str;
}
