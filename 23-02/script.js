
/*
1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/

//ex:1

let userSalaries ={
    Ella:25000,
    Sophia:30000,
    Ellie:35000
};

alert(userSalaries.Ella+" "+userSalaries.Sophia);

/*2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.
*/

//ex:2

let int = {
    a:5,
    b:6,
    c:10
};

console.log(int.a + int.b + int.c);

/* let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}
Сделайте рефакторинг кода, с помощью тернарного оператора.
*/

//ex:3


let data = true;
number = data === true ? '3' : '5';
console.log(number);


//ex:4

let user;
let answer = 'Президент';
user = prompt('Кто такой В.В.ПУТИН?');
    if (user === answer) {
        alert('Верно');
}   else {
        alert('Не знаете?');
    }






