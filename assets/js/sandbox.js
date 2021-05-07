const regex1 = /\b[a-z]+\b/g;
const regex2 = new RegExp("[a-z]+", "g");

/*
  1.Написать регулярку, которая выбирает строку,
  если в ней есть только цифры
  2. Написать функцию, которая проверяет
  правильность введенного имени пользователя
  Требования:
    1) начинается не с цифры
    2) может содержать: a-z0-9_
    3) длина от 6-16 символов
  В случае успеха нужно вывести в консоль success,
  в случае ошибки выбросить new Error()
*/
//1
const regex = /^\d+$/g;
//2
const USERNAME_PATTERN = /^[a-z_]\w{5,15}$/;
function checkUsername(username) {
  if (USERNAME_PATTERN.test(username)) {
    console.log("Success");
  } else {
    throw new Error("Invalid username");
  }
}

/**
 * С помощью setInterval написать ф-ю, которая
 * будет выводить раз 500мс числа от 1 до 20.
 * Когда счетчик дойдет до 20 отключить интервал (clearInterval).
 */

function count() {
  let counter = 0;
  
  const id = setInterval(() => {
    console.log(++counter);
    if(counter >= 20) {
      clearInterval(id)
    }
  }, 500); 
}
count();
