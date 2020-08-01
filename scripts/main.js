
"use strict";
function factorial_num()
{
  var n=document.getElementById("num").value;
  var answer = 1;
  if (n == 0 || n == 1)
  {
    answer=answer+"";
    document.getElementById("fac").innerHTML= answer;
  }
  else
  {
    for(var i = n; i >= 1; i--)
    {
      answer = answer * i;
    }
    answer=answer+"";
    document.getElementById("fac").innerHTML=answer;
  }
}
