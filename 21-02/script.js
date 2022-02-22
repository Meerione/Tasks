/*************  (&&) *****************/

//ex:1
let number = 569;
let number2 = 568;
let result = number < 965 && number2  < 865;
console.log(result);  //true

//ex:2
let number3 = 45;
let number4 = 45;
let result2 = number3 > 45 && number4 > 44;
console.log(result2); //false

//ex:3
let number5 = 11;
let number6 = 12;
let result3 = number5 === 14 && number6 ===12;
console.log(result3); //false

//ex:3
let number7 = 1;
let number8 = 2;
let result4 = number7 < 2 && number8 < 1;
console.log(result4); //false

/*************  (||) *****************/

//ex:1
let age = 22;
let age1 = 23;
let result5 = age === 22 || age1 === 23;
console.log(result5); //true

//ex:2
let age2 = 98;
let age3 = 99;
let result6 = age2 >= 99 || age3 >= 99;
console.log(result6); //true

//ex:3
let age4 = 55;
let age5 = 77;
let result7 = age4 <= 44 || age5 <= 78;
console.log(result7); //true

//ex:4
let age6 = 75;
let age7 = 77;
let result8 = age6 ===99 || age7 >= 78;
console.log(result8); //false



let num = 1;
num +=  12;
num -= 14
num *= 5
num /= 7
num++;
num --;

alert(num);



var num2 = 10;
num2++;
++num2;
num2--;
alert(num2);