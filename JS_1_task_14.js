var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//console.log(result)
document.write("var a = "+a);
document.write("<br>var b = "+b);
document.write("<br>");

--a;
document.write("<br>--a = "+a);
--b;
result = a - b
document.write("<br>--a - --b = "+result);

result = a - b + ++b;
document.write("<br>--a - --b + ++b = "+result);

result = --a - --b + ++b + b;
document.write("<br>--a - --b + ++b + b = "+result);

