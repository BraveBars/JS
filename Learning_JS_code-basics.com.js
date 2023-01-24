//1.Наберите в редакторе код из задания символ в символ и нажмите «Проверить».
console.log('Hello, World!');

//2. Создайте однострочный комментарий с текстом: You know nothing, Jon Snow!.
// You know nothing, Jon Snow!

/*3. Выведите на экран друг за другом три имени: Robert, Stannis, Renly. В результате на экране должно отобразиться:
Robert
Stannis
Renly*/
console.log("Robert");
console.log("Stannis");
console.log("Renly");

//4.Просто тренировка. Выведите на экран число 9780262531962.
console.log(9780262531962);

//5. Выведите на экран What Is Dead May Never Die
console.log("What Is Dead May Never Die");

//6. Выведите на экран результат деления числа 81 на 9.
console.log(81 / 9);

//7. Напишите программу, которая посчитает разность между числами 6 и -81 и выведет ответ на экран.
console.log(6 - -81);

//8. Напишите программу, которая считает и выводит последовательно на экран значения следующих математических выражений: «3 в степени 5» и «-8 разделить на -4».
console.log(3 ** 5);
console.log(-8 / -4);

/*9. Реализуйте программу, которая вычисляет и выводит на экран значение выражения:
8 / 2 + 5 - -3 / 2*/
console.log(8 / 2 + 5 - -3 / 2);

/*10. Дано выражение 70 * 3 + 4 / 8 + 2.
Расставьте скобки так, чтобы оба сложения (3 + 4) и (8 + 2) высчитывались в первую очередь. Выведите результат на экран.*/
console.log(70 * (3 + 4) / (8 + 2));

//11. Вычислите и выведите на экран произведение двух чисел: 0.39 и 0.22
console.log(0.39 * 0.22);

//12. Распечатайте на экран сумму бесконечностей, поделенную на 10
console.log(Infinity / 10);

//13. Выполните операцию, которая приводит к NaN, и распечатайте её результат на экран с помощью console.log().
console.log(NaN * 23);

/*14. Выведите на экран результат следующего вычисления: «разница между пятью в квадрате и произведением трёх и семи».
Расставьте скобки таким образом, чтобы не нарушать правило no-mixed-operators.*/
console.log((5 ** 2) - (3 * 7));

/*15. Напишите программу, которая выведет на экран:
"Khal Drogo's favorite word is "athjahakar""*/
console.log('"Khal Drogo\'\s favorite word is "athjahakar""');

/*16.Напишите программу, которая выводит на экран:
- Did Joffrey agree?
- He did. He also said "I love using \n".
При этом программа использует только один console.log(), но результат на экране должен выглядеть в точности, как показано выше.*/
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');

/*17. Выведите на экран 
Winter came for the House of Frey. 
используя конкатенацию слов.*/
console.log("Winter came for " + "the House of Frey.");


//18. Найдите в интернете таблицу кодов ASCII и выведите на экран символы ~, ^ и % (каждый на своей собственной строке).
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));

//19. Создайте переменную с именем motto и содержимым What Is Dead May Never Die!. Распечатайте содержимое переменной.
let motto = 'What Is Dead May Never Die!'
console.log(motto);

/*20. В упражнении определена переменная, внутри которой находится строка. 
Переопределите значение этой переменной и присвойте ей ту же строку, но в перевернутом виде, 
т.е. расположите символы первоначальной строки в обратном порядке.*/
let name = 'Brienna';
name = 'anneirB';
console.log(name);

//21. Создайте переменную, описывающую дословно "количество моих братьев", и присвойте ей значение 2. Распечатайте содержимое переменной.
let theNumberOfMyBrothers = 2;
console.log(theNumberOfMyBrothers);

//22. Найдите в программе необъявленную переменную и объявите ее, присвоив ей значение 'Dragon'.
let family = 'Targaryen';
let pet = 'Dragon';
console.log(family);
console.log('and');
console.log(pet);

/*23. Напишите программу, которая берет исходное количество евро, записанное в переменную eurosCount, переводит евро в доллары и выводит на экран.
Затем полученное значение переводит в рубли и выводит на новой строчке.
Считаем, что:
- 1 евро = 1.25 долларов
- 1 доллар = 60 рублей*/
let eurosCount = 100;
let dollarsCount = eurosCount * 1.25;
console.log(dollarsCount)
let rublesCount = dollarsCount * 60;
console.log(rublesCount)

/*24. Напишите программу, которая будет генерировать заголовок и тело письма, используя уже готовые переменные, и выводить получившиеся строки на экран.
Для заголовка используйте переменные firstName и greeting, запятую и восклицательный знак. Выведите это на экран в правильном порядке.
Для тела письма используйте переменные info и intro, при этом второе предложение должно быть на новой строке.
Результат на экране будет выглядеть так:
Hello, Joffrey!
Here is important information about your account security.
We couldn't verify your mother's maiden name.
Выполните задание, используя только два console.log().*/
let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';
let firstName = 'Joffrey';
let greeting = 'Hello';
console.log(greeting + ', ' + firstName + '!');
console.log(intro + '\n' + info);

/*25. Cоздайте две переменные с именами «первое число» и «второе число» на английском языке, используя lowerCamelCase.
Запишите в первую переменную число 11, во вторую — -100. Выведите на экран произведение чисел, записанных в получившихся переменных.*/
let firstNumber = 11;
let secondNumber = -100;
console.log(firstNumber * secondNumber);

/*26. Вы столкнулись с таким кодом, который выводит на экран общее количество комнат во владении нынешнего короля:
let king = 'King Balon the 6th';
console.log(king + ' has ' + (6 * 17) + ' rooms.');
Избавьтесь от магических чисел, создав новые переменные, и выведите текст на экран.
Получится так:
King Balon the 6th has 102 rooms.
Названия переменных должны передавать смысл чисел, но должны при этом оставаться достаточно короткими и ёмкими для комфортного чтения.*/
let king = 'King Balon the 6th';
let floorsInTheCastle = 6;
let roomsOnTheFloor = 17;
console.log(king + " has " + floorsInTheCastle * roomsOnTheFloor + ' rooms. ');

//27. Создайте константу army, присвойте ей значение the white walkers и распечатайте её значение на экран.
const army = "the white walkers";
console.log(army);

/*28. Выведите на экран строку Do you want to eat, <name>?, где вместо <name> должна использоваться константа stark. 
Вывод должен получиться таким:
Do you want to eat, Arya? */
const stark = 'Arya';
const sentence = 'Do you want to eat';
console.log(`${sentence}, ${stark}?`);

//29.Выведите на экран последний символ строки, находящейся в константе name
const name2 = 'Na\nharis';
console.log(name2[7]);

//30. Выведите на экран число -0.304.
console.log(-0.304);

//31. Выведите на экран значение undefined, не указывая его явно (через присваивание или передав напрямую в console.log()).
let on;
console.log(on);

/*32. Вам даны три константы с фамилиями разных людей. Составьте и выведите на экран в одну строку слово из символов в таком порядке:
Третий символ из первой строки
Второй символ из второй строки
Четвертый символ из третьей строки
Пятый символ из второй строки
Третий символ из второй строки
Попробуйте использовать интерполяцию: внутри фигурных скобок можно помещать не только целые переменные, но и отдельные символы с помощью квадратных скобок.*/
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);

//33. Выведите на экран результат выражения: 7 - (-8 - -2). Попробуйте сделать число 7 не числом, а строкой. 
console.log(7 - (-8 - -2));
console.log('7' - (-8 - -2));

//34. В коде программы определены две константы, содержащие имена компаний. Посчитайте их общую длину в символах и выведите ее на экран.
const company1 = 'Apple';
const company2 = 'Samsung';
console.log(company1.length + company2.length);

/*35. Выведите на экран абсолютное значение числа, находящегося в константе soldiersCount, используя функцию Math.abs(). 
Эта функция возвращает абсолютное значение переданного числа. Абсолютное значения числа — это само это число без знака перед ним.*/
const soldiersCount = -2309;
console.log(Math.abs(soldiersCount));

//36. Напишите программу, которая использует функцию Math.ceil() с константой number и выводит результат на экран.
const number = 923.2238;
console.log(Math.ceil(number));

//37. Округлите число, записанное в константу number, до двух знаков после запятой и выведите результат на экран.
const number2 = 10.1234;
console.log(number2.toFixed(2));

/*38. Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:
First: N
Last: t
Постарайтесь создать только одну константу, в которую сразу запишется нужный текст перед печатью на экран. 
В этом уроке мы отрабатываем умение собирать составное выражение.*/
const text = 'Never forget what you are, for surely the world will not';
const result = `First: ${text[0]}\nLast: ${text[text.length - 1]}`;
console.log(result);

/*39. Посчитайте программно (а не в голове) минимальное число среди 3, 10, 22, -3, 0 — и выведите его на экран. 
Воспользуйтесь функцией Math.min(), которая работает аналогично Math.max().*/
console.log(Math.min(3, 10, 22,-3, 0));

/*40. Функция Math.random() возвращает случайное число от 0 до 1 с большим количеством знаков после запятой. 
Но в реальных задачах бывает нужно получать случайные целые числа, например, в диапазоне от 0 до 10. 
Реализуйте код, который печатает на экран именно такие числа. Для этой задачи вам понадобятся функции Math.random() и Math.round()
Попробуйте решить это задание в одну строчку*/
console.log(Math.round(Math.random() * 10));

/*41. Оператор typeof позволяет определить тип передаваемого операнда. Название типа возвращается в виде строки.
Выведите на экран тип значения константы motto.*/
const motto2 = 'Family, Duty, Honor';
console.log(typeof motto2);

//42. Напечатайте на экран длину строки text.
const text2 = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
console.log(text2.length);

//43. Приведите строку text к нижнему регистру и напечатайте её на экран.
const text3 = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
console.log(text3.toLowerCase());

//44. Обновите переменную firstName записав в неё то же самое значение, но обработанное методом .trim(). Распечатайте то, что получилось, на экран.
let firstName2 = '  Grigor   \n';
console.log(firstName2.trim());

/*45.Выведите на экран первую и последнюю буквы предложения, записанного в константу text, в следующем формате:
First: N
Last: t
Ваша задача извлечь эти символы из строки и вставить в console.log(), не используя промежуточные переменные.*/
const text4 = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text4[0]}\nLast: ${text4[text4.length -1]}`);

/*46. С помощью метода slice() получите часть предложения, записанного в константу text, c 5 по 15 символы включительно. 
Полученную подстроку обработайте методом .trim() и выведите на экран длину итоговой подстроки. 
Выполните эти методы подряд в цепочке без создания промежуточных переменных.*/
const text5 = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text5.slice(5, 15).trim().length);

//47. Реализуйте функцию с именем printMotto(), которая выведет на экран фразу Winter is coming.
const printMotto = () =>{
  console.log("Winter is coming");
}
printMotto();

//48. Реализуйте функцию sayHurrayThreeTimes(), которая возвращает строку 'hurray! hurray! hurray!'.
const sayHurrayThreeTimes = () => {
  const hurray = 'hurray!';
  return `${hurray} ${hurray} ${hurray}`;
};
console.log(sayHurrayThreeTimes());

/*49. Допишите функцию truncate(), которая обрезает переданную строку до указанного количества символов,
добавляет в конце многоточие и возвращает получившуюся строку.
Функция принимает два параметра:
Строка, которую нужно обрезать
Число символов, которые нужно оставить*/
const truncate = (text, length) => {
  const reduce = `${text.slice(0, length)}...`;
  return reduce;
};

/*50.Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр)
в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения.
Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами,
функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.
// Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2); // "**5678"
getHiddenCard('1234567812345678', 3); // "***5678"
getHiddenCard('1234567812345678');    // "****5678" */
const getHiddenCard = (cardNumber, stars = 4) => {
  const starsCount = '*'.repeat(stars);
  const cardNumberCut = `${cardNumber}`.slice(12);
  return starsCount + cardNumberCut;
};
console.log(getHiddenCard(2034399002125681, 7));

/*51. Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:
const name = 'arya';
console.log(capitalize(name)); // => "Arya" */
const capitalize = (text) => text[0].toUpperCase() + text.slice(1);
console.log(capitalize('code'));

/*52. Напишите функцию isPensioner(), которая принимает один параметр — возраст человека и проверяет, является ли он пенсионным.
Пенсионером считается человек, достигший возраста 60 лет и больше.*/
const isPensioner = (age) => age >= 60;
console.log(isPensioner(61));
console.log(isPensioner(51));

//53. Напишите функцию isMister(), которая принимает строку и проверяет, является ли она словом 'Mister'.
const isMister = (text) => text === "Mister";
console.log(isMister('Mis'));

//54. Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.
const isInternationalPhone = (phoneNumber) => phoneNumber[0] === '+';
console.log(isInternationalPhone('123456789'));
console.log(isInternationalPhone('+123456789'));

/*55. Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет.
Год будет високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100.*/
const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0); 
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));

/*56. В этом уроке вам нужно будет реализовать две функции isPalindrome() и isNotPalindrome()
Функция isPalindrome() определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.
Для определения палиндрома необходимо перевернуть строку и сравнить ее с исходной. Для этого воспользуйтесь функцией reverse()
Функция isNotPalindrome() проверяет что слово НЕ является палиндромом:
Для этого, вызовите функцию isPalindrome() внутри isNotPalindrome() и примените отрицание.*/
const reverse = (s) => s.split('').reverse().join('');
const isPalindrome = (text) => text.toLowerCase() === reverse(text.toLowerCase());
const isNotPalindrome = (text) => !isPalindrome(text);
console.log(isPalindrome("Fasaf"));
console.log(isNotPalindrome("Fasaf"));

/* 57. Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный 
символ (по порядковому номеру, а не по его индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.*/
const getLetter = (text, position) => text[position - 1] || '';
console.log(getLetter('abcdef', 5));
console.log(getLetter('abcdef', 7));

/*58. Реализуйте функцию guessNumber(), которая принимает число и проверяет, равно ли число заданному (пусть это будет 42).
Если равно, то функция должна вернуть строку 'You win!', в противном случае нужно вернуть строку 'Try again!'.*/
const guessNumber = (number) => {
  if (number === 42) {
    return "You win!";
  }
  
  return "Try again!";
};
console.log(guessNumber(41));
console.log(guessNumber(42));

/*59. Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.
Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС
Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://. */ 
const normalizeUrl = (url) => {
  let noramalizedUrl;

  if (url.startsWith("https://")) {
    noramalizedUrl = url;
  } else {
    noramalizedUrl = "https://" + url;
  }

  return noramalizedUrl;
};
console.log(normalizeUrl("fdfdfwefwef"));
console.log(normalizeUrl("https://fdfdfwefwef"));


/*60 На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.
Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.
Правила определения:
Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными */
const whoIsThisHouseToStarks = (houseName) => {
  let whois;

  if (houseName === "Karstark" || houseName === "Tally") {
    whois = "friend";
  } else if (houseName === "Lannister" || houseName === "Frey") {
    whois = "enemy";
  } else {
    whois = "neutral";
  }

  return whois;
};
console.log(whoIsThisHouseToStarks("Tally"));
console.log(whoIsThisHouseToStarks("Lannister"));
console.log(whoIsThisHouseToStarks("Random"));

/*61. Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная,
возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений.
Если на вход передана пустая строка, функция должна вернуть пустую строку.
Перевернуть строчку можно используя функцию reverse(). В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть.
Есть разные подходы к решению этой задачи. Возможно, вам пригодится метод toUpperCase() и возможность получения символа из строки (например, str[0]).*/
const reverse2 = (s) => s.split('').reverse().join('');
const convertText = (text) => {
  if (text === '') {
    return text;
  }
  
  const reversible = text[0, 0] === text[0, 0].toUpperCase();
  return reversible ? text : reverse2(text);
};
console.log(convertText('Fgvbhjn'));
console.log(convertText(''));
console.log(convertText('fgvbhjn'));

/*62. Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:
getNumberExplanation(8);   // null
// Объяснения есть только для указанных ниже чисел
getNumberExplanation(666); // 'devil number'
getNumberExplanation(42);  // 'answer for everything'
getNumberExplanation(7);   // 'prime number' */
const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return "devil number";
    case 42:
      return "answer for everything";
    case 7:
      return "prime number";
    default:
      return null;
  }
};
console.log(getNumberExplanation(666));
console.log(getNumberExplanation(42));
console.log(getNumberExplanation(7));
console.log(getNumberExplanation(5));

/*63.Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. 
Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением,
а в теле цикла его нужно уменьшать до нижней границы.
printNumbers(4);
4
3
2
1
finished! */
const printNumbers = (initialNumber) => {
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log("finished!");
};
console.log(printNumbers(9));

/*64. Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона. Пример вызова:
multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120      */
const multiplyNumbersFromRange = (start, finish) => {
  let i = start;
  let prod = 1;
  while (i <= finish) {
    prod = prod * i;
    i = i + 1;
  }
  return prod;
};
console.log(multiplyNumbersFromRange(1, 5));

/* 65. Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:
joinNumbersFromRange(5, 10); // '5678910'    */
const joinNumbersFromRange = (start, finish) => {
  let result = "";
  let i = start;
  while (i <= finish) {
    result = `${result}${i}`;
    i = i + 1;
  }
  return result;
};
console.log(joinNumbersFromRange(5, 10));

/* 66. Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, как в примере из теории, но делает это в обратном порядке.*/
const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;
  }
};
const word = 'Arya';
printReversedWordBySymbol(word);

/* 67. Функция из теории учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:
countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2     */
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char || str[i].toUpperCase() === char.toUpperCase()) {
      count = count + 1;
    }
    i = i + 1;
  }
  return count;
};
console.log(countChars('HexlEt', 'e'))
console.log(countChars('HexlEt', 'E'))

// переворот строки
const reverse3 = (str) => {
  let i = 0;
  // Нейтральный элемент для строк это пустая строка
  let result = '';
  while (i < str.length) {
    // Соединяем в обратном порядке
    result = `${str[i]}${result}`;
    // То же самое через конкатенацию
    // result = str[i] + result;
    i = i + 1;
  }
  return result;
};
const name3 = 'Bran';
reverse3(name3); // 'narB'
console.log(reverse3(name3));
// Проверка нейтрального элемента
console.log(reverse3('')); // ''

// 68. Реализуйте функцию even(), которая возвращает новую строку, состоящую из чётных символов исходной строки.
const even = (str) => {
  let i = 1;
  let result = "";
  while (i < str.length + 1) {
    if (i % 2 === 0) {
      result = result + str[i - 1];
    }
    i = i + 1;
  }
  return result;
};
console.log(even("Bran"));
/* Решение учителя
const even = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (i % 2 !== 0) {
      result = `${result}${str[i]}`;
    }
    i = i + 1;
  }

  return result;
};
*/