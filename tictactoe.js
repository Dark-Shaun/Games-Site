var my=document.getElementById("secondhead")
function openWin() {
  window.open("game.html");
}
my.addEventListener("mouseover",function(){my.style.fontWeight='bold';})
my.addEventListener("mouseout",function(){my.style.fontWeight='normal';})
my.addEventListener("click",openWin)
