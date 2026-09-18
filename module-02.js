//Задача

// Створи змінну 'isLogginIn' зі значенняи 'true'. Якщо користувач увійшов у систему, ввиведи 'Кабінет відкрито'

//Рішення

// const isLogginIn = true;

// if (isLogginIn) {
//   console.log('Кабінет відкрито');
// }

//Задача

// Створи функцію 'getScoreLevel(score)': від 80 включно - 'Високий', від 50 включно - 'Середній, інакше - 'Початковий'. Перевір 68.

//Рішення

// function getScoreLevel(score) {
//   let message;

//   if (score >= 80) {
//     message = 'Високий';
//   } else if (score >= 50) {
//     message = 'Середній';
//   } else {
//     message = 'Початковий';
//   }

//   return message;
// }

// console.log(getScoreLevel(68));

//Задача

// Створи функцію 'validateRegistration(name, email, password, acceptedRules)'. Приорітет перевірок: порожнє ім'я - 'Вкажіть ім'я'; email без '@' - 'Некоректний email'; пароль коротший за 8 - 'Короткий пароль'; правила не прийняті - 'Прийміть правила'; інакше - 'Реєстрація дозволена'. Перевір 'Анна', 'anna@mail.com', 'jsStart8', true.

//Рішення

// function validateRegistration(name, email, password, acceptedRules) {
//   if (name.trim() === '') {
//     return 'Вкажіть ім`я';
//   } else if (!email.includes('@')) {
//     return 'Некоректний email';
//   } else if (password.length < 8) {
//     return 'Короткий пароль';
//   } else if (!acceptedRules) {
//     return 'Прийміть правила';
//   } else {
//     return 'Реєстрація дозволена';
//   }
// }

// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart8', true));

//Задача

// Є 'hasUnreadMessage = false'. Якщо непрочитаних повідомлень немає, виведи 'Нових повідомлень немає'

//Рішення

// const hasUnreadMessage = false;

// if (!hasUnreadMessage) {
//   console.log('Нових повідомлень немає');
// }

//Задача

//Створи 'getLessonState(isPublished, isLocked). Якщо урок не опублікованний - 'Чернетка'; якщо опублікованний, але заблокований - 'Заблоковано'; інакше - 'Доступно'. Перевір 'true`, `false`.

//Рішення

// function getLessonState(isPublished, isLocked) {
//   if (!isPublished) {
//     return `Чернетка`;
//   } else if (isLocked) {
//     return 'Заблоковано';
//   } else {
//     return 'Доступно';
//   }
// }

// console.log(getLessonState(true, false));
// console.log(getLessonState(true, true));
// console.log(getLessonState(false, false));
// console.log(getLessonState(false, true));

//Задача

//Створи 'validateLogin(login)', Після 'trim()' поверни 'Логін порожній', якщо рядок порожній; 'Логін закороткий', якщо довжина менша за 4; інакше - 'Логін прийнято'. Перевір '    js     `.

//Рішення

// function validateLogin(login) {
//   const trimmedLogin = login.trim();

//   if (trimmedLogin === ``) {
//     return `Логін порожній`;
//   } else if (trimmedLogin.length < 4) {
//     return 'Логін закороткий';
//   } else {
//     return 'Логін прийнято';
//   }
// }

// console.log(validateLogin('    js     '));

//Задача

//Створи 'getFileType(fileName)'. Без урахування регістру поверни 'JavaScript', якщо назва закінчується на '.js'; HTML якщо на '.html'; 'CSS' якщо на '.css'; інакше - 'Невідомий тип'. Перевір 'STYLE.CSS'

//Рішення

// function getFileType(fileName) {
//   const normalizeFileName = fileName.toLowerCase();

//   if (normalizeFileName.endsWith('.js')) {
//     return 'JavaScript';
//   } else if (normalizeFileName.endsWith('.html')) {
//     return 'HTML';
//   } else if (normalizeFileName.endsWith('.css')) {
//     return 'CSS';
//   } else {
//     return 'Невідомий тип';
//   }
// }

// console.log(getFileType('STYLE.CSS'));

//Задача

//Створи 'getModuleAccess(role, isPaid, completedIntro, isBlocked). Заблокованому завжди повертається 'Доступ Заблокований', студент отримує 'Доступ Відкрито', тільки якщо курс оплачено й вступ завершено. Інакше - 'Виконайте умови вступу'. Перевір 'student', 'true', 'true' 'false'

//Рішення

// function getModuleAccess(role, isPaid, completedIntro, isBlocked) {
//   if (isBlocked) {
//     return 'Доступ Заблокований';
//   } else if (role === 'mentor' || role === 'admin') {
//     return 'Повний Доступ';
//   } else if (isPaid && completedIntro) {
//     return 'Доступ Відкрито';
//   } else {
//     return 'Виконайте умови вступу';
//   }
// }

// console.log(getModuleAccess('student', true, true, false));

//Задача

//Створи 'checkUsername(username)', Коректне ім'я має довжину від 5 до 12 символів включно та не повинно містити пробілю Поверни 'Коректне' або 'Некоректне'. Перевір 'js_student'

//Рішення

// function checkUsername(username) {
//   const usernameLength = username.trim().length;
//   if (usernameLength >= 5 && usernameLength <= 12) {
//     return 'Коректне';
//   } else {
//     return 'Некоректне';
//   }
// }

// console.log(checkUsername('js_student'));

//Задача

//Створи 'getDeadLineStatus(daysLeft, isSubmitted)'. Якщо роботу здано - 'Здано'; інакше, якщо днів не більше 0 - 'Термін минув'; якщо залишився 1 день - 'Останній день'; інакше - 'Є час'. Перевір '1, false`

//Рішення

function getDeadLineStatus(daysLeft, isSubmitted) {
  if (isSubmitted) {
    return 'Здано';
  } else if (daysLeft === 0) {
    return 'Термін минув';
  } else if (daysLeft === 1) {
    return 'Останній день';
  } else {
    return 'Є час';
  }
}

console.log(getDeadLineStatus(1, false));
