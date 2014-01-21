var operation = new Array('+', '-');
var fish_disp = {top: '+=50px', left: '+=50px'};
var fish_boundary = {};
var body_dim = {};

$(document).ready(function(){
  body_dim.left = $("body").outerWidth(true);
  body_dim.top = $("body").outerHeight(true);
  var vertical_center_body = body_dim.top / 2;
  var vertical_center_fish = vertical_center_body - ($("#fish").height() / 2);
  $("#fish").css({"top": vertical_center_fish + "px"});
});

$(document).ready(function(){
  $("#fish").mouseenter(function(){  
    randomizeDisp();
    $("#fish").animate({
      left: fish_disp.left,
      top: fish_disp.top
    });
  });
});

function randomizeDisp(){
  for (side in fish_disp){
    var randomOpIndex = randomOperationIndex();
    var randomOp = operation[randomOpIndex];
    var theOtherOp = operation[Math.abs(randomOpIndex - 1)];
    var randomDisp = Math.random()*1000;  
    var goAhead = checkFishBoundary(side, randomOp, randomDisp);
    if (goAhead)
      fish_disp[side] = randomOp + "=" + randomDisp;
    else
    {
      goAhead = checkFishBoundary(side, theOtherOp, randomDisp);
      if (goAhead)
        fish_disp[side] = theOtherOp + "=" + randomDisp;
      else
        fish_disp[side] = maxPossible(side, randomOp);
    }          
  }
}

function randomOperationIndex(){
  var r = Math.random();
  if (r < 0.5)
    r = 0;
  else
    r = 1;
  return r;
}

function checkFishBoundary(side, operation, disp){
  calculateFishBoundary();
  if (operation == "+")
  {
    if ((fish_boundary[side] + $("#fish").width() + disp) < body_dim[side])
      return true;
  }
  else
  {
    if ((fish_boundary[side] - disp) > 0)
      return true;
  }
  return false;
}

function maxPossible(side, operation){
  var disp;
  if (operation == "+")
    disp = body_dim[side] - (fish_boundary[side] + $("#fish").width());
  else
    disp = fish_boundary[side];
  console.log (side + ": " + operation + "=" + disp);
  return (operation + "=" + disp);
}

function calculateFishBoundary(){
  fish_boundary.left = $("#fish").offset().left;
  fish_boundary.top = $("#fish").offset().top;
}