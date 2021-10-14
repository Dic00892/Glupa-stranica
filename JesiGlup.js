var scheight=document.getElementById('cbutton').offsetHeight;
var scwidth=document.getElementById('cbutton').offsetWidth;

var uvrede1=[
  "Za start pritirnite tipku",
  "Da bi ste poceli pritisnite tipku",
  "Da pocnete test pritisnite tipku na kojo pise start",
  "Da objasnim ponovo, da pocnete test pritisnite tipku START",
  "Samo pritisni START!!!",
  "A ma stisni ju vise...",
  ];
  
var uvrede2=[
  "Kolko ti treba da pritisnes tipku",
  "Pa samo je jedna",
  "Pa daj ju vise stisni",
  "Cimpanze imaju veci IQ od tebe",
  "Nesposoban si",
  "Tvoj IQ je u minusu",
  "Gluplju osobu nisam vidio",
  "Jel znas sta je uopce tipka?",
  "Katastrofa"
  "O boze kakvih sve ljudi ima na ovom svijetu."
  ];

var brojUvreda1=0;
var brojPokusaja=0;

function random(){
  var word="";
  if (brojUvreda1<uvrede1.length){
    brojUvreda1+=1;
    word=uvrede1[brojUvreda1 - 1];
  }
  else{
  
  var num=Math.ceil(Math.random()*uvrede2.length-1);
  word=uvrede2[num];
  }
  
  return word;
  
}


function move(){
   var swith=Math.random()*scwidth ;
  var sheight=Math.random()*scheight ;
  document.getElementById("startImg").style.left=swith + "px";
document.getElementById("startImg").style.top=sheight + "px";

var rijec=random();

document.getElementById("uvrede").innerHTML=rijec;
brojPokusaja +=1;

document.cookie="pokusaji="+brojPokusaja;
}

