function f1(){
var element=document.getElementById("main");
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var color1='#1A1A1A 200%';
element.style.background= 'radial-gradient(' +getRandomColor()+ ', ' + color1 + ')';

}
var a,b,c,d,score=0,k;
function f2(){
var a1=document.getElementById("a").innerHTML;
var c1=document.getElementById("c").innerHTML;
var b1=document.getElementById("b").innerHTML;
var comp=document.getElementById("comp").innerHTML;
var op=document.getElementById("op").innerHTML;
a=parseInt(a1);
b=parseInt(b1);
c=parseInt(c1);
if(op=="+"&&comp=="&lt;"){if(a+b<c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="+"&&comp=="&gt;"){if(a+b>c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="+"&&comp=="="){if(a+b==c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}


if(op=="-"&&comp=="&lt;"){if(a-b<c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="-"&&comp=="&gt;"){if(a-b>c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="-"&&comp=="="){if(a-b==c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}


if(op!="-"&&op!="+"&&comp=="&lt;"){if(a*b<c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op!="-"&&op!="+"&&comp=="&gt;"){if(a*b>c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op!="-"&&op!="+"&&comp=="="){if(a*b==c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}

}


function f3(){
var a1=document.getElementById("a").innerHTML;
var c1=document.getElementById("c").innerHTML;
var b1=document.getElementById("b").innerHTML;
var comp=document.getElementById("comp").innerHTML;
var op=document.getElementById("op").innerHTML;
a=parseInt(a1);
b=parseInt(b1);
c=parseInt(c1);
if(op=="+"&&comp=="&lt;"){if(a+b>c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="+"&&comp=="&gt;"){if(a+b<c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="+"&&comp=="="){if(a+b!=c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}


if(op=="-"&&comp=="&lt;"){if(a-b>c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="-"&&comp=="&gt;"){if(a-b<c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op=="-"&&comp=="="){if(a-b!=c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}


if(op!="-"&&op!="+"&&comp=="&lt;"){if(a*b>c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op!="-"&&op!="+"&&comp=="&gt;"){if(a*b<c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
if(op!="-"&&op!="+"&&comp=="="){if(a*b!=c){score++;   blee.play();document.getElementById("score").innerHTML=score;
f4();}else{retry.play();document.getElementById("content").innerHTML="";
document.getElementById("gameover").innerHTML="Game over<hr>";
document.getElementById("decision").innerHTML="Incorrect Answer..";
document.getElementById("scre").innerHTML="Score= "+score;
k=1;
f8();}}
}
function f4(){
var ran=Math.floor(Math.random() * 6);
if(ran==1||ran==2||ran==0){
document.getElementById("op").innerHTML="+";
var ele=Math.floor(Math.random() * 14);ele++;
document.getElementById("a").innerHTML=ele;
ele=Math.floor(Math.random() * 14);ele++;
document.getElementById("b").innerHTML=ele;
}
else if(ran==3||ran==4){
document.getElementById("op").innerHTML="-";
var ele=Math.floor(Math.random() * 10);ele=ele+10;
document.getElementById("a").innerHTML=ele;
var temp=ele;
ele=Math.floor(Math.random() * 14);ele++;

document.getElementById("b").innerHTML=ele;
}
else{
document.getElementById("op").innerHTML="&times;";
var ele=Math.floor(Math.random() * 9);ele++;
document.getElementById("a").innerHTML=ele;
ele=Math.floor(Math.random() * 9);ele++;
document.getElementById("b").innerHTML=ele;
}
var con=Math.floor(Math.random() * 3);
if(con==0){
document.getElementById("comp").innerHTML="=";
f5();
}
else if(con==1){
document.getElementById("comp").innerHTML=">";
f5();
}
else{
document.getElementById("comp").innerHTML="<";
f5();
}

}


function f5(){
var comp=document.getElementById("comp").innerHTML;
var op=document.getElementById("op").innerHTML;
var a1=document.getElementById("a").innerHTML;
var b1=document.getElementById("b").innerHTML;
a=parseInt(a1);
b=parseInt(b1);

var r=Math.floor(Math.random() * 2);
if(r==0&&comp=="="){

if(op=="+"){document.getElementById("c").innerHTML=a+b;}
else if(op=="-"){document.getElementById("c").innerHTML=a-b;}
else{document.getElementById("c").innerHTML=a*b;}
}
else{
if(op=="+"){
var c=Math.floor(Math.random() * 35);c++;
document.getElementById("c").innerHTML=c;
}
else if(op=="-"){
var c=Math.floor(Math.random() * 10);c++;
document.getElementById("c").innerHTML=c;
}
else {
var c=Math.floor(Math.random() * 81);c++;
document.getElementById("c").innerHTML=c;
}
}
}


if(localStorage.getItem("hisc") == null) {
				 localStorage.setItem("hisc", 0);
			}
if(sessionStorage.getItem("higscore") == null) {
 sessionStorage.setItem("higscore", 0);
			}
function f8(){
var da=localStorage.getItem("hisc");
var bests;
var sds=parseInt(da);
if(score>sds){
localStorage.setItem("hisc",score);
bests=localStorage.getItem("hisc");
 document.getElementById("bestscore").innerHTML="Highscore= "+bests;
}
else{
var nobest=localStorage.getItem("hisc");
 document.getElementById("bestscore").innerHTML="Highscore= "+nobest;
}
var dhi=sessionStorage.getItem("higscore");
var sessionbest;
var sesbest=parseInt(dhi);

if(score>sesbest){
sessionStorage.setItem("higscore",score);
sessionbest=sessionStorage.getItem("higscore");
 document.getElementById("sessionbest").innerHTML="Session Highscore= "+sessionbest+"<hr>";
 document.getElementById("repeate").innerHTML='<button type="button" onClick="window.location.reload()" class="btn btn-info btn-lg" id="replay"><span class="glyphicon glyphicon-play-circle"></span></button>';

}
else{
var noses=sessionStorage.getItem("higscore");
 document.getElementById("sessionbest").innerHTML="Session Highscore= "+noses+"<hr>";
 document.getElementById("repeate").innerHTML='<button type="button" onClick="window.location.reload()" class="btn btn-info btn-lg" id="replay"><span class="glyphicon glyphicon-play-circle"></span></button>';

 
}
}
var c=1,a=60,count=0;
function f6(){

if(a==0){
if(k!=1&&count==0){
retry.play();
document.getElementById("content").innerHTML="";
document.getElementById("decision").innerHTML="Sorry Timeup ..";
document.getElementById("scre").innerHTML="Score= "+score;
count=1;
f8();
}
}
else{
a=a-1;
setTimeout("f6()",30);
}}
function f7(){
if(a<=0){
c=1;
}
a=60*c;
c++;
}
 var blee=new Audio();
	   blee.src="CLICK.WAV";
      var retry=new Audio();
	 retry.src="gamelost.mp3";
	 
