/*  for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } 
   let  k = 0;
  while (k != 3) {
        alert( `number ${k}!` );
        k++;
} 

 for (let numbers = 0; numbers < 100;){
    numbers = prompt('Введите число');
    if (numbers == null){
        break;
    }
} 
let numbers, n, k  = 0;
n = prompt('Введите крайнее число');
while (k < n){
  numbers = n % n;
    if (numbers > 0){
    alert(numbers);
  }
  k++;
}


if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }
  let number = +prompt('Введите число');
  switch (number){
      case 0:
        alert('Вы ввели число 0');
        break;
      case 1:
        alert('Вы ввели число 1');
        break;
      case 2:
      case 3:
        alert('Вы ввели число 2, а может и 3');
      break;
  }
  //Перепишите функцию, используя оператор '?' или '||'
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }
    function checkAge(age){
    (age > 18) ? true : confirm('Родители разрешили?');
    } */

/*     function checkAge(age) {
        return (age > 18) || confirm('Родители разрешили?');
      } */


//**********************************************************************
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.   
/* function minNumber(a, b){
    (a > b && a !== b) ? alert(`${a} больше ${b}`) : alert(`${b} больше ${a}`);
    }
   let c = prompt("Первое число");
   let k = prompt("Второе число");
   minNumber(c, k); */
/************************************************* */
/* Напишите функцию pow(x,n), которая возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат. */
/* let result;
function pow (x, n){
    return result (x ** n);
}
const c = prompt("");
const v = prompt("");
pow(c,v);
alert(result); */

/************************************************* */
//Перепишите с использованием функции-стрелки
/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

/* let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
 */
/* let user = {};
user["name"] = "john";
user["surname"] = "Smith";
console.log(user.surname); */

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
/* let test = {};
function isEmpty(obj) {
  for (let key in test) {
    return true;
  }
  return false;
}
console.log(isEmpty(test)); */

/* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0. */
/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries){
  sum = sum + salaries[key];
  console.log(sum);
    }
 */

//*******************************************************
/* Создайте функцию multiplyNumeric(obj),
которая умножает все числовые свойства объекта obj на 2. */
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
let key = 0;
function multiplyNumeric(obj) {
  for (key in menu) {
    if (typeof menu[key] === "number"){
  menu[key] = menu[key] * 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);