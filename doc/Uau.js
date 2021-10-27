var score = document.cookie.split("=")[1];
if (score == undefined){
  score=0;
}

document.getElementById("score").innerHTML="Tvoj broj pokusaja je " + score;
