#program to print the character from string and get longest from them
var str="ABC A2D456 AFGRT5 ZZZ_FGST";
var trimmeWords=str.match(/[a-zA-Z]+/gi);
 
var firstWord=trimmeWords[0];

var word=null;
var long=0;

for(var i=0;i<=trimmeWords.length;i++)
{
  if(long<trimmeWords[i].length)
  { 
    long=trimmeWords[i].length;
    word=trimmeWords[i];
  }
}
console.log("Logest word is" + word + "with count of" + long);
