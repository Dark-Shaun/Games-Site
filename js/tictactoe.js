var my=document.getElementById("secondhead")
var my2=$('#thirdhead')
var my3=$('#fourthhead')
var my4=$('#fifthhead')
function openWin() {
  window.open("game.html");
}

my2.click(function openWin1() {
  window.open("game2.html");
})
my3.click(function openWin1() {
  window.open("game3.html");
})

my4.click(function openWin() {
  window.open("game4.html");
})

my2.mouseover(function(){$(this).css("fontWeight","bold");})
my2.mouseout(function(){$(this).css("fontWeight","normal");})
my3.mouseover(function(){$(this).css("fontWeight","bold");})
my3.mouseout(function(){$(this).css("fontWeight","normal");})
my4.mouseover(function(){$(this).css("fontWeight","bold");})
my4.mouseout(function(){$(this).css("fontWeight","normal");})
my.addEventListener("mouseover",function(){my.style.fontWeight='bold';})
my.addEventListener("mouseout",function(){my.style.fontWeight='normal';})
my.addEventListener("click",openWin)
