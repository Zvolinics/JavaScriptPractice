//Задача

//Створити змінну 'studentName' за допомогою `const`
// і запиши в неї своє ім'я.
// Виведи значення змінної в консоль

// Рішення

// const studentName = 'Vladislav';
// console.log(studentName);

//Задача

// Є name = "Олег", age = 17, group = "FS-12".
//  Створи один шаблонний рядок формату:
// Студент: Oner | Вік: 17 | Група: FS-12`

//Рішення

// const studentName = 'Олег';
// const age = '17';
// const group = 'FS-12';

// const message = `Студент: ${studentName} | Вік: ${age} | Група: ${group}`;

// console.log(message);

//Задача

// Є firstName = 'Анна' і  lastName = 'Коваль'.
// Отримай перші літери обох слів і створи рядок 'А.К'

//Рішення

// const firstName = 'Анна';
// const lastName = 'Коваль';

// const initials = `${firstName[0]}.${lastName[0]}`;

// console.log(initials);

//Задача

// Створи змінну 'isStudent' зі значенням 'true'.
// Виведи її в консоль

//Рішення

// const isStudent = true;
// console.log(isStudent);

//Задача

// Є рядок '        Student_User         '.
// Прибери крайні пробіли та перетвори всі літери на нижній регістр

//Рішення

// const string = '        Student_User         ';
// console.log(string.trim().toLowerCase());

//Задача

// Створи змінну city через let зі значенням "Київ".
// Потім зміни значення на "Львів" і виведи результат.

//Рішення

// let city = 'Київ';
// city = 'Львів';
// console.log(city);

// Задача

// Є рядок '    lviv   '.
// Прибери пробіли. Потім зроби першу літеру великою.
// Вхідне слово гарантовано написано маленькими.

//Рішення

// const city = '    lviv   ';
// const trimmedCity = city.trim();
// const formatedCity = trimmedCity[0].toUpperCase() + trimmedCity.slice(1);

// console.log(formatedCity);

// Задача

// Створи змінну 'language' зі значенням 'JavaScript'.
// За допомогою 'typeof' виведи тип її значення

//Рішення

// const language = 'JavaScript';

// console.log(typeof language);

// Задача

// Є 'email = 'student@gmail.com'.
// Отримай частину після символу '@'.
// Позицію '@' знайди методом 'indexOf()'

//Рішення

// const email = 'student@gmail.com';
// const atIndex = email.indexOf('@');
// const gmail = email.slice(atIndex + 1);

// console.log(gmail);

// Задача

// Створи змінну 'lessonNumber' зі значенням '3'.
// Виведи ти цього значення.

//Рішення

// const lessonNumber = 3;

// console.log(typeof lessonNumber);

// Задача

// Із рядка 'mentor@school.com' отримай частину до символу '@'.

//Рішення

// const email = 'mentor@school.com';
// const atIndex = email.indexOf('@');
// const username = email.slice(0, atIndex);

// console.log(username);

// Задача

// Є рядки з зайвими пробілами: 'firstName = '    іван    ',
// 'lastName = '      петренко   '.
// Очисти їх,
//  зроби першу літеру кожного слова великою, а решту - малими.
// Створи 'Петренко Іван'.

//Рішення

// const firstName = '    іван    ';
// const lastName = '      петренко   ';

// const trimmedFirstName = firstName.trim();
// const trimmedLastName = lastName.trim();

// const formatedFirstName =
//   trimmedFirstName[0].toUpperCase() + trimmedFirstName.slice(1).toLowerCase();
// const formatedLastName =
//   trimmedLastName[0].toUpperCase() + trimmedLastName.slice(1).toLowerCase();

// const message = `${formatedLastName} ${formatedFirstName}`;

// console.log(message);

// Задача

// Є 'fileName = 'lesson-notes.md'.
// Отримай останні три символи, щоб дістати рознирення '.md'

//Рішення

// const fileName = 'lesson-notes.md';
// const expansionIndex = fileName.indexOf('.');

// const expansion = fileName.slice(expansionIndex);

// console.log(expansion);

//Задача

//Є email = 'student@example.com`.
// Залиш видимими перші дві літери імені користувача та весь домен.
// Решту шмені заміни п'ятьма зірочками.
// Очікуванний формат: 'st.....@example.com'

//Рішення

// const email = 'student@example.com';

// const firstLetters = email.slice(0, 2);
// const indexOfEmail = email.indexOf('@');

// const message = `${firstLetters}.....${email.slice(indexOfEmail)}`;

// console.log(message);

// const atIndex = email.indexOf('@');

// const userName = email.slice(0, atIndex);
// const domain = email.slice(atIndex);

// const maskedEmail = userName.slice(0, 2) + '.'.repeat(5) + domain;

// console.log(maskedEmail);

//Задача

//Є заголовок 'JavaScript String Basics'.
//Перетвори його на нижній регістр і замінни всі пробіли дефісами.

//Рішення

// const title = 'JavaScript String Basics';
// const lowerTitle = title.toLowerCase();

// const slug = lowerTitle.replaceAll(' ', '-');

// console.log(slug);

// const slug1 = lowerTitle.split(' ').join('-');

// console.log(slug1);

//Задача

//Є 'my-first-javascript-homework.js'.
// Отримай назву без '.js' заміни всі дефіси пробілами та
// додай префікс 'Файл: '.

//Рішення

// const file = 'my-first-javascript-homework.js';
// const atIndex = file.indexOf('.');
// const fileName = file.slice(0, atIndex);

// const slug = fileName.replaceAll('-', ' ');

// const message = `Файл: ${slug}`;

// console.log(message);

//Задача

//Є текст 'JavaScript is a programming language'.
// Отримай перші 10 символів і додай в кінці три крапки.

//Рішення

// const title = 'JavaScript is a programming language';

// const message = title.slice(0, 10) + '.'.repeat(3);

// console.log(message);

//Задача

//Є 'archive.backup.zip'.
//Знайди останню крапку.
//Окремо отримай назву 'archive.backup' та розширення 'zip'.

//Рішення

// const file = 'archive.backup.zip';

// const dotIndex = file.lastIndexOf('.');

// const fileName = file.slice(0, dotIndex);
// const fileExpansion = file.slice(dotIndex + 1);

// console.log(fileName);
// console.log(fileExpansion);

// ------------ Practice 2 -------------//

//Задача

// Створити змінні 'firstNumber = 18' і 'secondNumber = 11'.
// За допомою оператора '>' перевір,
// чи перше число більше за друге.
// Ввиведи результат порівнянн в консоль

//Рішення
// function compareNumbers(firstNumber, secondNumber) {
//   const result = firstNumber > secondNumber;
//   return result;
// }

// console.log(compareNumbers(18, 11));

//Задача

// Створи функцію 'haveSameType(firstValue, secondValue)', яка порівнює результати 'typeof' для двох параметрів. Перевір число '8' і число '15'.

//Рішення

// function haveSameType(firstValue, secondValue) {
//   const result = typeof firstValue === typeof secondValue;
//   return result;
// }

// console.log(haveSameType(8, 15));

//Задача

//Створи 'score = 60' і 'minimumScore = 60'. Перевір оператором '>=', чи набраний бал не менший за мінімальний.

//Рішення

// function compareScore(score, minimumScore) {
//   return score >= minimumScore;
// }

// console.log(compareScore(60, 60));

//Задача

//Створи допоміжну функцію 'normalizeTitle(title)', яка прибирає крайні пробіли, переводить текст у нижній регістр і замінює все дефіси пробілами. Потім створи 'areTitlesEqual(firstTitle, secondTitle)', яка порівнює нормалізовані результати. Перевір '    JS-Basics    ' і 'js basics'.

//Рішення

// function normalizeTitle(title) {
//   return title.trim().toLowerCase().replaceAll('-', ' ');
// }

// function areTitlesEqual(firstTitle, secondTitle) {
//   return normalizeTitle(firstTitle) === normalizeTitle(secondTitle);
// }

// console.log(areTitlesEqual('    JS-Basics    ', 'js basics'));

//Задача

//Створи функцію 'isNumberEqualToText(number, text)'. Усередині перетвори 'text' на число за допомогою 'Number()' і виконайц суворе порівняння. Перевір 42 та '42'.

//Рішення

// function isNumberEqualToText(number, text) {
//   return number === Number(text);
// }

// console.log(isNumberEqualToText(42, '42'));

//Задача

//Створи функцію 'isFirstTextLonger(firstText, secondText)', яка порівнює довжини двох рядків. Перевір 'keyboard' i 'mouse'

//Рішення

// function isFirstTextLonger(firstText, secondText) {
//   return firstText.length === secondText.length;
// }

// console.log(isFirstTextLonger('keyboard', 'mouse'));

//Задача

//Створи функцію 'getCleanLength(login)', яка повертає довжину логіна після 'trim'. Створи другу функцію 'isFirstLoginLonger(firstLogin, secondLogin)', яка повертає результати першої. Перевер '    coder_one     ' i 'dev2'.

//Рішення

// function getCleanLength(login) {
//   return login.trim().length;
// }

// function isFirstLoginLonger(firstLogin, secondLogin) {
//   return getCleanLength(firstLogin) > getCleanLength(secondLogin);
// }

// console.log(isFirstLoginLonger('    coder_one     ', 'dev2'));

//Задача

//Створи функцію 'createPersonalCode(firstName, lastName, year)'. Воан має взяти перші дві літери іменні, перші дві літери прізвища, перевести у верхній регістр та додати останні дві цифри року. Для 'Marta', 'Stone', '2026' очікуєтся 'MAST26'

//Рішення

// function createPersonalCode(firstName, lastName, year) {
//   return (
//     firstName.slice(0, 2).toUpperCase() +
//     lastName.slice(0, 2).toUpperCase() +
//     String(year).slice(-2)
//   );
// }

// console.log(createPersonalCode('Marta', 'Stone', 2026));

//Задача

//Створи функцію 'containsAtSign(text)', яка повертає результат наявності '@' у рядку. Перевір 'user@site.net' i 'usersite.net'

//Рішення

// function containsAtSign(text) {
//   return text.includes('@');
// }

// console.log(containsAtSign('user@site.net'));
// console.log(containsAtSign('usersite.net'));

//Задача

//Створи функцію 'makeLengthReport(firstText, secondText)'. Вона повинна повернути рядок 'First: 8 | Second: 5 | first Longer: true' для ззначень 'terminal' i 'mouse'. Довжини та результат обчисли всередині функції.

//Рішення

// function makeLengthReport(firstText, secondText) {
//   const firstTextLength = firstText.length;
//   const secondTextLength = secondText.length;
//   const isFirstLonger = firstTextLength > secondTextLength;

//   return `First: ${firstTextLength} | Secong: ${secondTextLength} | first Longer: ${isFirstLonger}`;
// }

// console.log(makeLengthReport('terminal', 'mouse'));

//Задача

//Створи функцію 'hasExtension(fileName, extension)', Функція повинна перевіряти закінчення назви файлу. Виклич її з 'notes.pdf' i '.pdf'

//Рішення

// function hasExtension(fileName, extension) {
//   //   const atFileIndex = fileName.lastIndexOf('.');
//   //   const fileExtension = fileName.slice(atFileIndex);
//   //   return fileExtension === extension;

//   return fileName.endsWith(extension);
// }

// console.log(hasExtension('notes.pdf', '.pdf'));

//Задача

//Створи функцію 'getDomain(email)', яка повертає частинку після '@'. Потім створи 'haveSameDomain(firstEmail, secondEmail)', яка порівнює домени в нижньому регістрі. Перевір 'one@School.ORG' i 'two@school.org'.

//Рішення

// function getDomain(email) {
//   const atEmailIndex = email.indexOf('@');
//   return email.slice(atEmailIndex + 1);
// }

// function haveSameDomain(firstEmail, secondEmail) {
//   return (
//     getDomain(firstEmail).toLowerCase() === getDomain(secondEmail).toLowerCase()
//   );
// }

// console.log(haveSameDomain('one@School.ORG', 'two@school.org'));
