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

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
