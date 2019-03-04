
var RNumber;
var RTries;
limit = 50;
function Random() {

num = Math.floor((Math.random() * limit));
return num;
}
function Init(){
RNumber = Random();
RTries = 0;
document.FGame.Output.value='I am thinking of a number between 0 and ' + (limit-1) +' Guess it....';
document.FGame.Tries.value=RTries;
document.FGame.HighLow.value='';
document.FGame.Input.value='';
}
function Game(Number) {
if(Number==RNumber) {
RTries++;
document.FGame.Output.value='You guessed it in ' + RTries + ' tries! It was ' + RNumber + '! Hit Restart to play again.';
document.FGame.HighLow.value='Got It!';
}
else {
RTries++;
document.FGame.Output.value='Nope, ' + Number + ' is not the number I am thinking about!';
document.FGame.HighLow.value=(RNumber > Number) ? 'Higher!' : 'Lower!';
document.FGame.Tries.value=RTries;
   }
}
