var name1=prompt("Enter first player name")
var name2=prompt("Enter second player name")

var game_on = true;
var table = $('table tr');
$('#input_11').text(name1)
$('#input_22').text(name2)
m=$('button')
m=m.slice(1,31)
var k=[]
var l=[]
var w=[]
var r=[]
var s=[]
var t=[]
for(i=0;i<25;i=i+6){

  k.push(m.eq(i))

}
for(i=1;i<26;i=i+6){
  l.push(m.eq(i))

}
for(i=2;i<27;i=i+6){
  w.push(m.eq(i))

}
for(i=3;i<28;i=i+6){
  r.push(m.eq(i))

}
for(i=4;i<29;i=i+6){
  s.push(m.eq(i))

}
for(i=5;i<30;i=i+6){
  t.push(m.eq(i))

}

j=4;
z=4;
y=4;
c=4;
v=4;
b=4;

function color1(event){
  var x = event.key;
  if(x == "r" || x == "R"){
    k[j].css("background-color","red");

    }
  else if (x == "b" || x == "B"){
      k[j].css("background-color","#0FF2C9");
  }
  j=j-1


}

function color2(event){
  var x = event.key;
  if(x == "r" || x == "R"){
    l[z].css("background-color","red");

    }
  else if (x == "b" || x == "B"){
        l[z].css("background-color","#0FF2C9");
  }
  z=z-1

}
function color3(event){
  var x = event.key;
  if(x == "r" || x == "R"){
    w[y].css("background-color","red");

    }
  else if (x == "b" || x == "B"){
      w[y].css("background-color","#0FF2C9");
  }
  y=y-1

}
function color4(event){
  var x = event.key;
  if(x == "r" || x == "R"){
    r[c].css("background-color","red");

    }
  else if (x == "b" || x == "B"){
      r[c].css("background-color","#0FF2C9");
  }
  c=c-1

}

function color5(event){
  var x = event.key;
  if(x == "r" || x == "R"){
    s[v].css("background-color","red");

    }
  else if (x == "b" || x == "B"){
      s[v].css("background-color","#0FF2C9");
  }
  v=v-1

}
function color6(event){
  var x = event.key;
  if(x == "r" || x == "R"){
    t[b].css("background-color","red");

    }
  else if (x == "b" || x == "B"){
      t[b].css("background-color","#0FF2C9");
  }
  b=b-1

}

function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        if(returnColor(row,col)==='rgb(255, 0, 0)'){
          $('#input_12').text(name1+' wins')
          $('table').fadeOut(1000);
          $('#input_12').fadeOut(1000);
          $('#input_11').fadeOut(1000);
          $('#input_22').fadeOut(1000);
            $('#input_1').fadeOut(1000);
              $('#input_13').fadeOut(1000);
        }else{
          $('#input_12').text(name2+' wins')
          $('table').fadeOut(1000);
          $('#input_12').fadeOut(1000);
          $('#input_11').fadeOut(1000);
          $('#input_22').fadeOut(1000);
          $('#input_1').fadeOut(1000);
            $('#input_13').fadeOut(1000);
        }
        return true;
      }else {
        continue;
      }
    }
  }
}

function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        if(returnColor(row,col)==='rgb(255, 0, 0)'){
          $('#input_12').text(name1+' wins')
          $('table').fadeOut(1000);
          $('#input_12').fadeOut(1000);
          $('#input_11').fadeOut(1000);
          $('#input_22').fadeOut(1000);
          $('#input_1').fadeOut(1000);
            $('#input_13').fadeOut(1000);
        }else{
          $('#input_12').text(name2+' wins')
          $('table').fadeOut(1000);
            $('#input_12').fadeOut(1000);
            $('#input_11').fadeOut(1000);
            $('#input_22').fadeOut(1000);
            $('#input_1').fadeOut(1000);
              $('#input_13').fadeOut(1000);
        }
        return true;
      }else {
        continue;
      }
    }
  }
}
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        if(returnColor(row,col)==='rgb(255, 0, 0)'){
          $('#input_12').text(name1+' wins')
          $('table').fadeOut(1000);
            $('#input_12').fadeOut(1000);
            $('#input_11').fadeOut(1000);
            $('#input_22').fadeOut(1000);
            $('#input_1').fadeOut(1000);
              $('#input_13').fadeOut(1000);
        }else{
          $('#input_12').text(name2+' wins')
          $('table').fadeOut(1000);
            $('#input_12').fadeOut(1000);
            $('#input_11').fadeOut(1000);
            $('#input_22').fadeOut(1000);
            $('#input_1').fadeOut(1000);
              $('#input_13').fadeOut(1000);
        }
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        if(returnColor(row,col)==='rgb(255, 0, 0)'){
          $('#input_12').text(name1+' wins')
          $('table').fadeOut(1000);
            $('#input_12').fadeOut(1000);
            $('#input_11').fadeOut(1000);
            $('#input_22').fadeOut(1000);
            $('#input_1').fadeOut(1000);
              $('#input_13').fadeOut(1000);
        }else{
          $('#input_12').text(name2+' wins')
          $('table').fadeOut(1000);
            $('#input_12').fadeOut(1000);
            $('#input_11').fadeOut(1000);
            $('#input_22').fadeOut(1000);
            $('#input_1').fadeOut(1000);
            $('#input_13').fadeOut(1000);
        }
        return true;
      }else {
        continue;
      }
    }
  }
}

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}



k[0].keypress(function(){
  color1(event)
diagonalWinCheck()
verticalWinCheck()
horizontalWinCheck()
})
l[0].keypress(function(){
  color2(event)
diagonalWinCheck()
verticalWinCheck()
horizontalWinCheck()
})
w[0].keypress(function(){
  color3(event)
diagonalWinCheck()
verticalWinCheck()
horizontalWinCheck()
})
r[0].keypress(function(){
  color4(event)
diagonalWinCheck()
verticalWinCheck()
horizontalWinCheck()
})
s[0].keypress(function(){
  color5(event)
diagonalWinCheck()
verticalWinCheck()
horizontalWinCheck()
})
t[0].keypress(function(){
  color6(event)
diagonalWinCheck()
verticalWinCheck()
horizontalWinCheck()
})


$('#button_1').click(function(){
    $('#input_12').text("Result:")
    for(i=0;i<5;i++){
      k[i].css("background-color","rgb(128, 128, 128)")
      l[i].css("background-color","rgb(128, 128, 128)")
      w[i].css("background-color","rgb(128, 128, 128)")
      r[i].css("background-color","rgb(128, 128, 128)")
      s[i].css("background-color","rgb(128, 128, 128)")
      t[i].css("background-color","rgb(128, 128, 128)")
      j=4;
      z=4;
      y=4;
      c=4;
      v=4;
      b=4;
    }
    $('table').fadeIn(1000);
    $('#input_12').fadeIn(1000);
    $('#input_11').fadeIn(1000);
    $('#input_22').fadeIn(1000);
    $('#input_1').fadeIn(1000);
    $('#input_13').fadeIn(1000);

})
