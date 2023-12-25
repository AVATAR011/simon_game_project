var color=["green","red","yellow","blue"];
var choosen=[];
var userChoosen=[];
var level=0;
var i;

$(".btn").click(function(){
  var clickedBtn=this.id;
  userChoosen.push(clickedBtn);
  animatedFun(clickedBtn);
  playSounds(clickedBtn);
  answer(i++);
});

$(document).keypress(function(){
  if(level===0){
  $("h1").text("level "+level);
  ran();
}
});

function playSounds(name){
  $("#"+name).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio=new Audio('./sounds/'+name+'.mp3');
  audio.play();
}
function ran(){
  userChoosen=[];
  var random=Math.floor(Math.random()*3);
  var randomChoosen=color[random];
  choosen.push(randomChoosen);
  $("h1").text("level "+ (level+1));
  animatedFun(randomChoosen);
  playSounds(randomChoosen);
  i=0;
}
function animatedFun(colorName){
  $("."+colorName).addClass("pressed");
  setTimeout(function(){
    $("."+colorName).removeClass("pressed");
  },100);
}
function answer(startLevel){
  if(startLevel<level && choosen[startLevel]===userChoosen[startLevel]){
    console.log(startLevel);
    console.log(level);
    console.log("success");
  }
  else if(startLevel===level && choosen[startLevel]===userChoosen[startLevel]){
    console.log("success");
    console.log(choosen);
    console.log(userChoosen);
    level++;
    setTimeout(function(){
      ran();
    },1000);
  }
  else{
    var audio=new Audio('./sounds/wrong.mp3');
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    console.log("fail");
    startOver();
  }
}

function startOver(){
  choosen=[];
  level=0;
  $("h1").text("Game Over, Press any key to start");
}
