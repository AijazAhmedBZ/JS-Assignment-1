var c = prompt("What is today's temperature?");

var f = (c * 9/5 ) + 32;
var c = (f-32) * 5/9;

document.write(+c);
document.write("C is "+f);
document.write("F");
document.write("<br>"+f);
document.write("F is "+c);
document.write("C");
