let mark=parseFloat(prompt("enter your mark"));
let grade="";
switch(mark){
     case mark>=90 && mark<=100:
        grade="A+";
        break;
     case masrk>=80 && mark<=89:
        grade="A";
        break;
     case mark>=70 && mark<=79:
         grade="B";
        break;
     case mark>=60 && mark<=69:
          grade="C";
        break;
    case mark>=50 && mark<=59:
         grade="D";
        break;
    default : 
       grade="Fail";

   }
 
   document.write(grade);

