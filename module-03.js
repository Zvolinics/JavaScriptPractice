//Задача

// TODO: Створи функцію 'getFirstItem(items)', яка повертає перший єлемент масиву. Якщо масив порожній, поверний рядок 'Кошик порожній'. Перевір масив '['Молоко','Хліб', 'Яблука]'

//Рішення

// function getFirstItem(items) {
//   if (items.length === 0) {
//     return 'Кошик порожній';
//   }
//   return items[0];
// }

// console.log(getFirstItem(['Молоко', 'Хліб', 'Яблука']));

//Задача

// TODO: Створи 'calculateAverage(ratings)'. Якщо масив порожній, поверни 0. Інакше циклом знайди сумму й поділи її на кількість оцінок. Перевір '[5, 4, 5, 3, 3]'.

//Рішення

// function calculateAverage(ratings) {
//   if (ratings.length === 0) {
//     return 0;
//   }

//   let sum = 0;
//   let count = 0;

//   for (const rating of ratings) {
//     if (typeof rating === 'number') {
//       sum += rating;
//       count += 1;
//     }
//   }

//   return sum / count;
// }

// console.log(calculateAverage([5, 4, 5, 3, 3]));

//Задача

// TODO: Ціни та кількості зберігаються у двох масивах з однаковими індексами. Створи 'calculateCartTotal(prices, quantities)', яка додає 'price * quantity' для кожної позиції. Перевір '[80,25,40] i [2,3,4].

//Рішення

// function calculateCartTotal(prices, quantities) {
//   let total = 0;

//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i] * quantities[i];
//   }

//   return total;
// }

// console.log(calculateCartTotal([80, 25, 40], [2, 3, 4]));

//Задача

// TODO: Створи 'applyDiscount(prices, percent), яка повертаж новий масив цін після знижок. Для округлення до двох знаків використай 'Number(value.toFixed(2)). Не використовуй 'map()'. Перевір '[100, 250, 80], 10'

//Рішення

// function applyDiscount(prices, percent) {
//   let newPrices = [];

//   for (const price of prices) {
//     newPrices.push(price - (price * percent) / 100);
//   }

//   return newPrices;
// }

// console.log(applyDiscount([100, 250, 80], 10));

//Задача

// TODO: Створи 'cleanTags(tags)', Для кожного рядка прибери крайні пробіли, переведи його у нижній регістр, пропусти порожні й не додавай дублікати. Перевір '['JavaScript', 'web, '', 'javascript', 'WEB']'.

//Рішення

// function cleanTags(tags) {
//   const newTags = [];

//   for (const tag of tags) {
//     const normalizeTag = tag.trim().toLowerCase();
//     if (normalizeTag && !newTags.includes(normalizeTag)) {
//       newTags.push(normalizeTag);
//     }
//   }

//   return newTags;
// }

// console.log(cleanTags([' JavaScript ', 'web', '', 'javascript', ' WEB ']));

//Задача

// TODO: Створи 'searchNames(names, querry)'. Поверни новий масив назв, що містять запит без урахування регістру. Використай цикл та рядковий 'includes()'. Перевір '['JavaScript Basics', 'React Start', 'Advanced JavaScript'], 'script'

//Рішення

// function searchNames(names, querry) {
//   const newNames = [];

//   for (const name of names) {
//     const normalizeName = name.toLowerCase().trim();

//     if (normalizeName.includes(querry.toLowerCase())) {
//       newNames.push(normalizeName);
//     }
//   }

//   return newNames;
// }

// console.log(
//   searchNames(
//     ['JavaScript Basics', 'React Start', 'Advanced JavaScript'],
//     'script'
//   )
// );

//Задача

// TODO: Створи 'limitHistory(history, limit)', Яка повертає новий масив лише з останніх 'limit' запитів. Початковий масив не змінений. Перевір 5 запитів і ліміт 3.

//Рішення
const history = ['HTML', 'CSS', 'JS', 'ReactJS', 'Node'];

function limitHistory(history, limit) {
  const limitedHistory = [];
  //   for (let i = history.length - limit; i < history.length; i++) {
  //     if (history[i]) {
  //       limitedHistory.push(history[i]);
  //     }
  //   }

  const startIndex = history.length > limit ? history.length - limit : 0;

  return history.slice(startIndex);
  //   return limitedHistory;
}

console.log(limitHistory(history, 3));
