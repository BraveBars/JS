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
const name = 'Na\nharis';
console.log(name[7]);

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
