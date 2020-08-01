
"use strict";
function factorial()
{
  var n=document.getElementById("num").value;
  var answer = 1;
  if (n == 0 || n == 1)
  {
    answer=answer+"";
    document.getElementById("factorial").innerHTML= answer;
  }
  else
  {
    for(var i = n; i >= 1; i--)
    {
      answer = answer * i;
    }
    answer=answer+"";
    document.getElementById("factorial").innerHTML=answer;
  }
}
