// Типы данные - маалымат турлору
// 1 - Undefined - Неопределнный тип (Белгисиз тип )
// 2 - Boolean (Булевой логический тип) true - истина, (чындык) false - ложь (жалган)
// 3 - Number - Число - 12233, 45,65,77,88 (сандар - 22, 33, 41, 567.)
// 4 - String - Строка - "", '', ``, "text". Тырмакчанын ичине жазылган тексттер.
// 5 - Bigint - чон сандар мн иштейт 24243253456463466, 13204129429728346328.
// 6 - Symbol - Символ, *,/,+,=, $, 66, # ж. 6.
// 7 - NULl (He существует)
// 8 - Object - (Обьект) - {} - обьект.

//1 Lesson 1 number + переменные

// Переменные - Переменныйды жаваскрипттин диви дел тушунсок болот.
// ал биздин жаваскрипт кодубузду, потикабызды сактап турат.
// Переменныйда буюндар салынган кутучага оксоштурсак болот.
// Переменныйдын 3 туру бар.

// var - Эски переменный бул азыр переменныйды колдонгонго аракет жасасак
// бул каталарды, ,багдарды чигарып берет. Колдонуудан чыгып калган переменный.
// let - Жаны переменный, азыркы учурдагы колодонулуп жаткан переменный.
// маанисин (значение) озгорто алабыз.
// const - Константа деген создон алынган. Маанисин озгорто албайбыз.

// Операторлор

// + - плюс (кошуу)
// - - минус (кемитуу)
// * - умножение (кобойтуу)
// / - деление (болуу)
// % - остаток от деление (болуунун калдыгы)

// console. log() - Резултатаын чыгарып берет.

// % - остаток от деление (болуунун калдыгы)
// утурдон кийин канча сан калса ошону эсептейтю
// Мисалы: 5 / 2 = 2.5 | 5 % 2 = 1 (5)

// 5 / 2 = 2.5
// 5 % 2 = 1
// 5 % 2 = 2.55 = 2
// 5 % 2 = 2.555 = 3
// 67 % 7 = 9.5714 = 4
// 10 / 2 = 5
// 10 % 2 = 0
// 7 / 2 = 3.5
// 7 % 2 = 1

// Number - Числовой тип данных: (Сандар - 22, 112, 45.)

// var a = 5
// console. log(a)

// let a= 5
// a = 12
// console. log(a)

// const a= 5
// a = 12
// console.log(a)

// let a = 12
// let b = 23
// console.log(a + b)

// let a = 14
// console.log(a / 2)


// let a = 45
// let b = 11
// console.log(a - b)

// let a = 28
// let b = 11
// console.log(a * b)

// let a = 5
// let b = 21
// let c = 4
// let d = 5
// console.log(a + b + c + d)

// let a = 45
// let b = 21
// let c = 34
// let d = 66
// let result = a + b + c + d
// console.log(result)

// let a = 10
// console.log(a)

// let a = 10
// let b = 5
// let c = 4
// let results = a + b + c
// console.log(results)

// let a = 375
// let results = a * 2
// console.log(results)

// let a = "age-"
// let age = 19
// let b = "name-"
// let name = "Nursu"
// console.log(a + age + b + name)

// let text = "123"
// console.log(text[0])
// console.log(text[1])
// console.log(text[2])

// let a = '123'
// let b = '43'
// let c = '6'
// console.log( +a+ +b+ +c )

// let a = '123'
// console.log(a.split("").reverse().join(""))

// let a = 'absd efg'
// console.log(a.length)

// 1. Вам  дана переменная num, присвойте ей значение. Выведите значение
// этой переменной в консоль.
// let num = 7
// console.log(num)

//
// let num = 5
// console.log(num)

// let num = 137
// console.log(num)

// let num = 78
// console.log(num)
//

// 2. Вам даны перемнные a=10, b=2, c=5. Выведите в консуль их сумму.
// let a = 10
// let b = 2
// let c = 5
// console.log(a + b + c)

//
// let a = 78
// let b = 65
// let c = 98
// console.log(a + b + c)

// let a = 376
// let b = 290
// let c = 187
// console.log(a + b + c)
//

// 3. Вам дана переменная со значением 100, выведите в консуль умноженную переменную на 2.
// let a = 100
// console.log(a * 2)

//
// let a = 379
// console.log(a * 2)

// let a = 685
// console.log(a * 3)

// let a = 48
// console.log(a * 5)
//

// 4. Вам дана переменная со значением 67. Выведите в консоль остаток от деления на 7.
// let a = 67
// console.log(a % 7)

//
// let a = 45
// console.log(a % 5)

// let a = 359
// console.log(a % 4)

// let a = 546
// console.log(a % 5)
//

// 5. Вам даны переменные  a=10, b=2. Выведите в консуль их сумму, разность,
// произведение и частное ( результат деление)

// let a = 10
// let b = 2
// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;
// console.log('Сумма:', sum);
// console.log('Разность:', difference);
// console.log('Произведение:', product);
// console.log('Частное:', quotient);


// let a = 10
// let b = 2
// console.log(a + b - a / b)

// let a = 10
// let b = 2
// let c = a + b
// let d = a - b
// console.log(c / d)

//
// let a = 50
// let b = 5
// console.log (a + b / a - b)

// let a = 89
// let b = 9
// let c = a + b
// let d = a - b
// console.log(c / d)

// let a = 100
// let b = 12
// console.log (a + b / a - b)
//

// 6. Вам даны переменные c=15 и d=2. Просуммируйте их, а результат присвойте
// переменной result. Выведите в консоль значение переменной result.

// let a = 15
// let b = 2
// let results = a + b
// console.log( results)

//
// let a = 78
// let b = 89
// let results = a + b
// console.log(results)

// let a = 789
// let b = 356
// let results = a - b
// console.log(results)

// let a = 256
// let b = 298
// let results = (a + b) * 2
// console.log(results)
//

// 7. Вам даны переменные a=30, и b=15 Сложите переменные a и b и результат
// присвойте переменной c. Затем выведите в консоль остаток деления на 4 переменной c.

// let a = 30
// let b = 15
// let c = a + b
// console.log(c % 4)

//
// let a = 98
// let b = 89
// let c = a + b
// console.log(c % 6)

// let a = 727
// let b = 123
// let c = a - b
// console.log(c % 4)

// let a = 67
// let b = 32
// let c = a * b
// console.log(c % 10)
//

// 8. Вам даны переменные a=17 и b=10. Отнимите от a переменную b и результат
// присвойте переменной c. Затем создайте переменную d, присвойте ей значение.
// Сложите переменные c и d, а результат запишите в переменную result.
// Выведите в консоль значение переменной result.

// let a = 17
// let b = 10
// let c = a - b
// let d = 7
// let result = c + d
// console.log(result)

//
// let a = 32
// let b = 46
// let c = a + b
// let d = 8
// let results = c - d
// console.log(results)

// let a = 67
// let b = 98
// let c = a * b
// let d = 20
// let results = c / d
// console.log(results)

// let a = 45
// let b = 9
// let c = a / b
// let d = 6
// let result = c * d
// console.log(result)

// let a = 874
// let b = 454
// let c = a - b
// let d = 42
// let result = c / d
// console.log(result)
//

// 9. Вам даны a='10' и b='99'. Сложите переменные a и b и присвойте результат
// переменной result и выведите её в консоль.

// let a = 10
// let b = 99
// let result = a + b
// console.log(result)

// let a = '10'
// let b = '99'
// let result = a + b
// console.log(result)

//
// let a = '34'
// let b = '78'
// let result = a + b
// console.log(result)

// let a = '89'
// let b = '46'
// let result = a + b
// console.log(result)

// let a = 20
// let b = 24
// let result = a + b
// console.log(result)

// let a = '20'
// let b = '24'
// let result = a + b
// console.log(result)
//

// 10. Вам даны переменные name='Аскар', number=10. Сложите данные переменные,
// присвойте результат переменной result и выведите её в консоль.

// let name = 'Аскар'
// let number = 10
// let result = name + number
// console.log(result)

//
// let a = '3.'
// let b = 'Sara'
// let result = a + b
// console.log(result)

// let a = '5-'
// let b = 'Li'
// let result = a + b
// console.log(result)

// let a = '10`'
// let b = 'Han'
// let result = a + b
// console.log(result)
//

// 1. Создайте переменную a и присвойте ей значение 10.
// Создайте переменную b и присвойте ей значение 3.14.
// Выведите их на экран с помощью console.log().

// let a = 10
// let b = 3.14
// console.log(a)
// console.log(b)

// 2. Создайте две переменные x и y, присвойте им числовые значения.
// Найдите их сумму и выведите результат на экран.

// let x = 30
// let y = 65
// console.log(x + y)

// 3. Создайте переменные num1 и num2, присвойте им числовые значения.
// Найдите разность num1 и num2 и выведите результат.

// let num1 = 48
// let num2 = 6
// console.log(num1 - num2)

// 4. Создайте две переменные a и b, присвойте им числовые значения.
// Найдите произведение a и b и выведите результат.

// let a = 7
// let b = 2
// console.log(a * b)

// 5. Создайте переменные num1 и num2, присвойте им числовые значения.
// Найдите результат деления num1 на num2 и выведите его.

// let num1 = 70
// let num2 = 14
// console.log(num1 / num2)

// 6. Создайте переменные dividend и divisor, присвойте им числовые значения.
// Найдите остаток от деления dividend на divisor и выведите его.

// let dividend = 89
// let divisor = 7
// console.log(dividend % divisor)

// 7. Создайте переменную number, присвойте ей значение 10.
// Увеличьте её на 1 и уменьшите на 1, а затем выведите результаты на экран.

// let a = 10
// let b = a + 1
// console.log(b)
// console.log(b - 1)

// String ("", '', ``)

// String - Тырмакчанын ичиндеги жазылган тексттер.
// Тексттовой типы данных. Тырмакчаннын ичинде кандайдыр бир текст жазылган
// болсо ал типы данные боюнча String болуп эсептелет.
// Мисалы: "Hello world", 'text',`и.т.д`. Ал эми эгерде
// тырмакчанын ичинде сан, цифра жазылган болсо (1,2,3,4,5,6,7,...)
// "45", '1234', `121`, ж.б. Ал дагы типы данные боюнча String болуп саналат.
// Мисалы: тырмакчанын ичиндеги сан менен бири кошо турган болсок ("41"+ "11"=4111)
// Ал жон гана суммасын чыгарбастан бириктирип койот жана типы данные боюнча String болуп кала берет.
// Stringтин ар кандай кызмат аткарган озунун методдору бар.
// Алар: slice(), splice(), split(), length(), toLowerCase(), toUperCase(), ж.б.


// Тырмакчаннын (ковычки) 3 туру бар.
// "" - двойные ковычки
// '' - одинарные ковычки
// `` - обратные ковычки

// Stringтин методдору.
// length - узундугун санап берет.
// toUperCase - тексттерди чон тамга менен жазып берет.
// (верхний регистр, чон тамга: "MAXIMUM")
// toLowerCase - тексттерди кичине тамга менен жазып берет.
// (нижний регистр, кичине тамга: "minimum")
// slice - санап туруп кесип беретю
// splice - удалитетип берет, кошуп берет.
// split - удалитетип берет.

// Javascriptте мындай эреже бар:
// Эгерде переменныйга 2 же андан ашык создон турган название
// бере турган болсок (hero-general) анда ал camellCase менен жазылат.
// Camellcase - верблюжая нотация, (тоо кейпиндеги жазылыш).
// Ар бир создун биринчи тамгасы баш тамга менен жазылат.
// Мисалы: hero-general эмес heroGeneral, numberOne, blockTwo, (hero+Block+Genral+Two)

// Индекс 0 дон баштап эсептейт.
// length 1 ден баштап эсептейт.

// ${} - интерпаляция, элементти чыкырып берет.

//

// let str = "Idev"
// console.log(str)

// let str = "Kyrgyzstan"
// console.log(str)

// let str = "Kyrgyzstan"
// console.log(str.toUpperCase())

// let str = "Kyrgyzstan"
// console.log(str.toLowerCase())

// let str = "Kyrgyzstan"
// console.log(str.length)

// let str = "Kyrgyzstan"
// console.log(str.slice(1,5))

// let str = "Javascript"
// console.log(str.slice(4))

// let str = "Front-end"
// console.log(str.slice(6))

// let name = "Abdullahanoglukemal"
// console.log(name.slice(0,7).toUpperCase() + name.slice(7,14).toLowerCase() + name.slice(14).toUpperCase())

// let nameTwo = "Abdullahanoglukemal"
// console.log(nameTwo.slice(0,10).toUpperCase() + nameTwo.slice(10).toLowerCase())

// let itCourse = "Idev"
// console.log(`${itCourse} айти курсунда арзандатуулар болуп жатат`)

// let str = "James"
// console.log(`Hello ${str}`)

//

// let name = "Lanadelrey"
// console.log(name)

// let name = "Lanadelrey"
// console.log(name.length)

// let name = "Lanadelrey"
// console.log(name.toUpperCase())

// let name = "Lanadelrey"
// console.log(name.toLowerCase())

// let name = "Lanadelrey"
// console.log(name.slice(4,7))

// let name = "Lanadelrey"
// console.log(name.slice(0,5).toUpperCase() + name.slice(5,10).toLowerCase())

// let name = "Lanadelrey"
// console.log(name.slice(0,4).toUpperCase() + name.slice(4,7).toLowerCase() + name.slice(7,10).toUpperCase())

// let name = "Lanadelrey"
// console.log(name.slice(0,4).toLowerCase() + name.slice(4,7).toUpperCase() + name.slice(7,10).toLowerCase())

// let name = "Lanadelrey"
// console.log(name.slice(0,1).toUpperCase() + name.slice(1,4).toLowerCase() + name.slice(4,5).toUpperCase() + name.slice(5,7).toLowerCase() + name.slice(7,8).toUpperCase() + name.slice(8,10).toLowerCase())

// let name = "Lanadelrey"
// console.log(`${name} — американская поэтесса, автор-исполнительница песен.`)

//

//
// let name = "Gabriella"
// console.log(name)

// let name = "Gabriella"
// console.log(name.length)

// let name = "Gabriella"
// console.log(name.toUpperCase())

// let name = "Gabriella"
// console.log(name.toLowerCase())

// let name = "Gabriella"
// console.log(name.slice(3,6))

// let name = "Gabriella"
// console.log(name.slice(0,7))

// let name = "Gabriella"
// console.log(name.slice(0,5) + name.slice(5).toUpperCase())

// let name = "Gabriella"
// console.log(name.slice(5,6).toUpperCase() + name.slice(6,9).toLowerCase())

// let name = "Gabriella"
// console.log(name.slice(0,5).toLowerCase() + name.slice(5,9).toUpperCase())

//

//

// абракадабра //
// let word = "Gobbledygook"
// console.log(word)

// let word = "Gobbledygook"
// console.log(word.length)

// let word = "Gobbledygook"
// console.log(word.toUpperCase())

// let word = "Gobbledygook"
// console.log(word.toLowerCase())

// let word = "Gobbledygook"
// console.log(word.slice(0,6))

// let word = "Gobbledygook"
// console.log(word.slice(4,8))

// let word = "Gobbledygook"
// console.log(word.slice(8,12))

// let word = "Gobbledygook"
// console.log(word.slice(0,3))

// let word = "Gobbledygook"
// console.log(word.slice(0,6).toUpperCase() + word.slice(6,12).toLowerCase())

// let word = "Gobbledygook"
// console.log(word.slice(0,4).toLowerCase() + word.slice(4,8).toUpperCase() + word.slice(8,12).toLowerCase())

// let word = "Gobbledygook"
// console.log(word.slice(0,4).toUpperCase() + word.slice(4,8).toLowerCase() + word.slice(8,12).toUpperCase())

// let word = "Gobbledygook"
// console.log(word.slice(0,1).toUpperCase() + word.slice(1,4).toLowerCase() + word.slice(4,5).toUpperCase() + word.slice(5,8).toLowerCase() + word.slice(8,9).toUpperCase() + word.slice(9,12).toLowerCase())

// let word = "Gobbledygook"
// console.log(`${word} — якобы магическое слово.`)

//


// Строки:
//  1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.

// let str = 'Привет, Мир!'
// console.log(str)

// let str = "Hello World!"
// console.log(str)

// let str = "West coast"
// console.log(str)

// 2. Вам даны переменные str1='Привет,' и str2='Мир!'.
// С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.

// let str1 = 'Привет,'
// let str2 = 'Мир!'
// console.log(str1 + str2)

// let str1 = "Hello,"
// let str2 = "world!"
// console.log(str1 + str2)

// let str1 = "West "
// let str2 = "coast"
// console.log(str1 + str2)

// 3. Вам дана переменная name, присвойте ей ваше имя.
// Выведите в консоль фразу 'Привет, *Имя*!'.

// let name = "Rayn"
// console.log(`Привет,${name}.`)

// let word = "Games"
// console.log(`Video ${word}`)

// let word = "Sadness"
// console.log(`Summertime ${word}`)

// 4. Вам дана переменная age , присвойте ей ваш возраст.
// Выведите в консоль 'Мне *Возраст* лет!'.

// let age = 18
// console.log(`Мне ${age} лет!`)

// let word = "Mountain"
// console.log(`Diet ${word} Dew`)

// let word = "and"
// console.log(`Young ${word} Beautiful`)

// 5. Вам даны четыре переменные.
//  Первая - для хранения количества дней. Присвойте ей значение "365".
//  Вторая - для хранения названия нашей планеты "Земля".
//  Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
//  Четвертая - для хранения слова "Солнце".
//  Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
//  "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

// let num = "365"
// let world = "Земля"
// let population = "7 млрд."
// let sun = "Солнце"
// console.log(`В нашем году ${num} дней. Днём у нас светит ${sun}. Население планеты ${world} составляет примерно ${population} человек`)

// let one = "lord"
// let two = "man"
// let three = "heaven"
// let four = "me"
// console.log(`Dear ${one}, when I get to ${three}, Please let ${four} bring my ${two}.`)

// let one = "Каждый"
// let two = "глаза"
// let three = "рай"
// let four = "темный"
// console.log(`${one} раз, как я закрываю ${two}, будто наступает ${four} ${three}`)

//
// 1. Преобразование строки в верхний регистр
// Напиши код, который преобразует строку "hello world" в "HELLO WORLD"

// let str = "hello world"
// console.log(str.toUpperCase())

// let str = "West coast"
// console.log(str.toUpperCase())

// let str = "Summertime sadness"
// console.log(str.toUpperCase())

// 2. Получение длины строки
// Определи длину строки "JavaScript" и выведи её в консоль.

// let str = "Javascript"
// console.log(str.length)

// let str = "West coast"
// console.log(str.length)

// let str = "Summertime sadness"
// console.log(str.length)

// 3. Найди индекс первого вхождения подстроки "script" в строке "JavaScript".

// let str = "Javascript"
// console.log(str.slice(4))

// let str = "West coast"
// console.log(str.slice(5))

// let str = "Summertime sadness"
// console.log(str.slice(6))

// 4. Замена подстроки
// Замените в строке "Hello, world!" подстроку "world" на "there", используя метод replace.

// let str = "Hello world!"
// let res = str.replace("world", "three")
// console.log(res)

// let str = "West coast"
// let res = str.replace("West", "South")
// console.log(res)

// let str = "Summertime sadness"
// let res = str.replace("sadness", "joy")
// console.log(res)

// 5. Проверка начала строки
// Проверьте, начинается ли строка "JavaScript" с подстроки "Java".

// let str = "Javascript"
// let str2 = str.startsWith('Java')
// console.log(str2)

// let str = 'Aibek'
// let strTwo = str.endsWith('a')
// console.log(strTwo)

// let str = "West coast"
// let str2 = str.startsWith('West')
// console.log(str2)

// let str = "Summertime sadness"
// let str2 = str.startsWith('Summer')
// console.log(str2)

// 6. Проверка конца строки
// Проверьте, заканчивается ли строка "JavaScript" на подстроку "Script".

// let str = "Javascript"
// let str2 = str.endsWith('script')
// console.log(str2)

// let str = "West coast"
// let str2 = str.endsWith('coast')
// console.log(str2)

// let str = "Summertime sadness"
// let str2 = str.endsWith('sadness')
// console.log(str2)

// 7. Определение наличия символа
// Проверьте, содержит ли строка "Hello, world!" символ "w".

// let str = "Hello world!"
// let str2 = str.includes('w')
// console.log(str2)

// let str = "West coast"
// let str2 = str.includes('c')
// console.log(str2)

// let str = "Summertime sadness"
// let str2 = str.includes('m')
// console.log(str2)

// 8. Получение подстроки из строки.
// Извлеките подстроку "script" из строки "JavaScript".

// let str = "Javascript"
// console.log(str.slice(4))

// 9. Извлечение определённого количества символов
// Извлеките первые 5 символов из строки "Programming".

// let str = "Programming"
// console.log(str.slice(0,5))

// Boolean (Булевой логический тип) (true, false)

// Операторлор

// == - (равно)
// === - (строго равно)
// != - (не равно)
// !== - (строго не равно)
// = - (присваивание)
// ! - (Логическое НЕ)
// && - (Логическое И) (жана)
// || - (логическое ИЛИ) (же, же болбосо)
// typeof - (возвращает тип операнда) (кайсы тип данный экенин аныктап берет)
// ? : - (Тернарный оператор) (if else нин кыскартылып жазылыш)
// + - (плюс) (кошуу)
// - - (минус) (кемитуу)
// / - (деление) (болуу)
// * - (умножение) (кобойтуу)
// % - (остаток от деления) (болуунун калдыгы)
// > - (больше) (чон)
// < - (меньше) (кичине)
// >= - (больше или равно) (чон же барабар)
// <= - (меньше или равно) (кичине же барабар)
// ++ - (инкремент) (кобойуу)
// -- - (декремент) (азайуу)
// += - (сложение с присвоением)
// -= - (вычитание с присваением)
// *= - (умножение с присвоением)
// /= - (деление с присвоением)
// %= - (остаток от деление с присваением)


// Boolean (true, false) - Булевой логический тип выражение. Бул типы данный да шарт (условие) тузулот.
// Boolean 2 нерсени алат, true-истина (чындык) жана false-ложь (жалган).
// if() {}, else if () {}, else
// if () {} - если (эгерде), else if () {} - кошумча шарт,  else {} - иначе, (андай болбосо).
// else {} ге логика, шарт тузулбойт. Же болбосо озун чыгарып бер дегендей эле жазылат.

// let a = 11
// if (a === 10) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let a = 10
// if (a === 10) {
//     console.log('чындык')
// } else {
//     console.log('жалган')
// }

// let a = 21
// let b = 12
// if (a > b) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let a = 12
// let b = 70
// if (a > b) {
//     console.log('чон')
// } else {
//     console.log('кичине')
// }

// let a = 30
// if (a % 2 === 0) {
//     console.log("четный")
// } else {
//     console.log("нечетный")
// }

// let a = 4
// if (a > 0) {
//     console.log("он сан")
// } else if (a === 0) {
//     console.log("равно")
// } else {
//     console.log("терс сан")
// }


// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// let a = 10
// if (a === 10) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 29
// if (a === 20) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 36
// if (a === 36) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 573
// if (a === 573) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// let a = 50
// let b = 100
// if (a > b) {
//     console.log('a больше b')
// } else {
//     console.log('a меньше b')
// }

// let a = 36
// let b = 75
// if (a > b) {
//     console.log('a больше b')
// } else if (a === b) {
//     console.log('a равно b')
// } else {
//     console.log('a меньше b')
// }

// let a = 77
// let b = 77
// if (a > b) {
//     console.log('a больше b')
// } else if (a === b) {
//     console.log('a равно b')
// } else {
//     console.log('a меньше b')
// }

// let a = 25
// let b = 13
// if (a > b) {
//     console.log('a больше b')
// } else if (a === b) {
//     console.log('a равно b')
// } else {
//     console.log('a меньше b')
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// let a = -2
// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log('равно')
// } else {
//     console.log('negative')
// }

// let a = 45
// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log('равно')
// } else {
//     console.log('negative')
// }

// let a = -32
// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log('равно')
// } else {
//     console.log('negative')
// }

// let a = 0
// if (a > 0) {
//     console.log('positive')
// } else if (a === 0) {
//     console.log('равно')
// } else {
//     console.log('negative')
// }


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let number = 45
// if (number % 2 === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }

// let number = 27
// if (number % 2 === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }

// let number = 82
// if (number % 2 === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }

// let number = -22
// if (number % 2 === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток от деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// let a = 10
// let b = 2
// if (a % b === 0) {
//     console.log("Нечетное число")
// } else {
//     console.log("Четное число")
// }

// let a = 56
// let b = 8
// if (a % b === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }

// let a = 79
// let b = 4
// if (a % b === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }

// let a = 81
// let b = 9
// if (a % b === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }


// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s = 11
// let type = typeof s
// if (type === 'boolean') {
//     console.log('boolean');
// } else if (type === 'number') {
//     console.log('number');
// } else if (type === 'string') {
//     console.log('string');
// }

// let s = true
// if (typeof s === 'boolean') {
//     console.log("boolean")
// } else if (typeof s === 'number') {
//     console.log("number")
// } else if (typeof s === 'string') {
//     console.log("string")
// }

// let s = "Bonjour"
// let type = typeof s
// if (type === 'boolean') {
//     console.log('boolean');
// } else if (type === 'number') {
//     console.log('number');
// } else if (type === 'string') {
//     console.log('string');
// }

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 4
// if (a > 1 && a < 9) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 8
// if (a > 1 && a > 5) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 17
// if (a === 17 && a < 29) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// let a = 3
// if (a === 3 || a === 7) {
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }

// let a = 9
// if (a < 5 || a === 9) {
//     console.log(a + 4)
// } else {
//     console.log(a - 5)
// }

// let a = 27
// if (a < 45 || a > 20) {
//     console.log(a - 15)
// } else {
//     console.log(a + 65)
// }

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// let a = -1
// let b= 5
// if (a === 0 || a < 0) {
//     console.log(a + b)
// } else if (b > 5 || b ===5) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }

// let a = 4
// let b = 2
// if (a === 1 || a > 1 && b < 5 || b === 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }

// let a = 9
// let b = 7
// if (a === 2 || a > 1 && b < 4 || b === 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 5
// let b = 10
// if (a > 4 && a < 10 || b >= 7 && b < 17) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 7
// let b = 9
// if (a > 2 && a < 7 || b >= 4 && b < 6) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let a = 54
// let b = 35
// if (a > 24 && a < 32 || b <= 79 && b < 99) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }


// Проверка равенства двух чисел

// let a = 7
// let b = 7
// if (a === b) {
//     console.log('Равны')
// } else {
//     console.log('Неравны')
// }

// let a = 12
// let b = 21
// let result = a === b
// console.log(result)

// Проверка возраста для получения водительских прав

// let a = 17
// if (a >= 17) {
//     console.log('Можно')
// } else {
//     console.log('Нельзя')
// }

// Проверка, что число четное или нечетное

// let a = 24
// if (a % 2 === 0) {
//      console.log('четное')
// } else {
//     console.log('нечетное')
// }

// Проверка, что строка не пустая

// let a = ''
// if (a === '') {
//     console.log('строка пустая')
// } else {
//     console.log('строка не пустая')
// }

// let a = 'uhu'
// if (a === '') {
//     console.log('строка пустая')
// } else {
//     console.log('строка не пустая')
// }


// Проверка, что число положительное или отрицательное

// let a = 7
// if (a > 0) {
//     console.log('Число положительное')
// } else {
//     console.log('Число отрицательное')
// }

// Проверка, что строка равна "JavaScript"

// let a = "JavaScript"
// if (a === "JavaScript") {
//     console.log("Строка равна 'JavaScript'.");
// } else {
//     console.log("Строка не равна 'JavaScript'.");
// }

// let a = "uhu"
// if (a === "JavaScript") {
//     console.log("Строка равна 'JavaScript'.");
// } else {
//     console.log("Строка не равна 'JavaScript'.");
// }


// Проверка, что значение переменной равно true

// let a = false
// if (a === true) {
//     console.log("a равна true.");
// } else {
//     console.log("a не равна true.");
// }

// Проверка пароля пользователя

// let a = 'B1438AX'
// if (a === 'B1438AX') {
//     console.log('Верный пароль')
// } else {
//     console.log('Неверный пароль')
// }

// let a = 'S3574HG'
// if (a === 'B1438AX') {
//     console.log('Верный пароль')
// } else {
//     console.log('Неверный пароль')
// }


// Function () {}

// Function - функция бул блоктук код болуп эсептелет. Сайттагы логикалар ар кандай тасктар (тапшырмалар),
// функциянын ичине жазфылат. Функцичия бизге сайттарга логика жазфп ар кандай тапшырмаларды аткаруу учун сайттын
// интерактивдуулук (коп болушу мумкун 4, 5, 6, ж.б.) кабыл алат жана консольдон аргумент беребиз.
// например: function sum (a,b)
//           console.log(5,12)

// Javascript функциясы - бул белгилуу бир тапшырманы аткаруу учун иштелип чыккан код блогу.
// Негизи javascript функциялары башка программалоо тилдериндеги процедруалар же подпрограммалар сыяктуу эле.
// Javascript функциясы ага бир нерсе киргенде гана аткарылат (аны чакырат).

// Функциянын 6 турлору бар:
// function declaration - деклоративная функция
// function expression - обычная функция
// arrows function - стрелочная функция
// IIFE - Immediate invoked function expression
// callback - () => - колбэк функция
// anonymous function - анонимная функция


// function declaration

// function sum (a,b) {
//     return a + b
// }
// console.log(sum(21,12))

// function task (a,b) {
//     if (a > b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(task(12,5));

// function num (a,b) {
//     if (a < b) {
//         return 'Верно';
//     } else {
//         return 'Неверно';
//     }
// }
// console.log(num(40,50));

// function task (a) {
//     if (a % 2 === 0) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }
// console.log(task(50));

// function task (a,b) {
//     if (a > 5 && a < 10) {
//         return 'true';
//     } else if (b >= 11 || b < 20) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }
// console.log(task(8,11));

// 1. Вам дана переменная num, присвойте ей значение. Выведите значение
// этой переменной в консоль.

// function num (a) {
//     return a
// }
// console.log(num(7))

// 2. Вам даны переменные a=10, b=2 и c=5. Выведите в консоль их сумму.

// function num (a,b,c) {
//     return a + b + c
// }
// console.log(num(7,23,65))

// 3. Вам дана переменная со значением 100, выведите в консоль умноженную переменную на 2.

// function num (a) {
//     return a * 2
// }
// console.log(num(100))

// 4. Вам дана переменная со значением 67. Выведите в консоль остаток деления на 7.

// function num (a) {
//     return a % 7
// }
// console.log(num(67))

// 5. Вам даны переменные a=10 и b=2. Выведите в консоль их сумму, разность,
// произведение и частное (результат деления).

// function sum (a,b) {
//     return a + b
// }
// console.log('Сумма:',sum(10,2))
//
// function dif (a,b) {
//     return a - b
// }
// console.log('Разность:',dif(10,2))
//
// function pro (a,b) {
//     return a * b
// }
// console.log('Произведение:',pro(10,2))
//
// function quo (a,b) {
//     return a / b
// }
// console.log('Частное (результат деления):',quo(10,2))

// 6. Вам даны переменные c=15 и d=2. Просуммируйте их, а результат присвойте
// переменной result. Выведите в консоль значение переменной result.

// function num (a,b) {
//     return a + b
// }
// console.log(num(15,2))

// 7. Вам даны переменные a=30, и b=15 Сложите переменные a и b и результат
// присвойте переменной c. Затем выведите в консоль остаток деления на 4 переменной c.

// function num (a,b) {
//     return (a + b) % 2
// }
// console.log(num(30,15))

// 8. Вам даны переменные a=17 и b=10. Отнимите от a переменную b и результат
// присвойте переменной c. Затем создайте переменную d, присвойте ей значение.
// Сложите переменные c и d, а результат запишите в переменную result. Выведите
// в консоль значение переменной result.

// function num (a,b,c) {
//     return (a - b) + c
// }
// console.log(num(17,10,7))

// 9. Вам даны a='10' и b='99'. Сложите переменные a и b и присвойте результат
// переменной result и выведите её в консоль.

// function num (a,b) {
//     return a + b
// }
// console.log(num(10,99))

// let a = 12
// console.log(a ? a === 12 : true)


// 10. Вам даны переменные name='Аскар', number=10. Сложите данные переменные,
// присвойте результат переменной result и выведите её в консоль.

// function num (name,number) {
//     return name + number
// }
// console.log(num('Аскар',10))


// 1. Создайте переменную a и присвойте ей значение 10.
// Создайте переменную b и присвойте ей значение 3.14.
// Выведите их на экран с помощью console.log().

// function num (a,b) {
//     return a + b
// }
// console.log(num('10','3,14'))

// 2. Создайте две переменные x и y, присвойте им числовые значения.
// Найдите их сумму и выведите результат на экран.

// function num (x,y) {
//     return x + y
// }
// console.log(num(76,45))

// 3. Создайте переменные num1 и num2, присвойте им числовые значения.
// Найдите разность num1 и num2 и выведите результат.

// function num (num1,num2) {
//     return num1 - num2
// }
// console.log(num(27,14))

// 4. Создайте две переменные a и b, присвойте им числовые значения.
// Найдите произведение a и b и выведите результат.

// function num (a,b) {
//     return a * b;
// }
// console.log(num(24,6));

// 5. Создайте переменные num1 и num2, присвойте им числовые значения.
// Найдите результат деления num1 на num2 и выведите его.

// function num (num1,num2) {
//     return num1 / num2
// }
// console.log(num(70,14))

// 6. Создайте переменные dividend и divisor, присвойте им числовые значения.
// Найдите остаток от деления dividend на divisor и выведите его.

// function num(dividend,divisor) {
//     return dividend % divisor;
// }
// console.log(num(89,8));

// 1. Преобразование строки в верхний регистр
// Напиши код, который преобразует строку "hello world" в "HELLO WORLD"

// function name (text) {
//     return text.toUpperCase()
// }
// console.log(name('hello world'))

// 2. Получение длины строки
// Определи длину строки "JavaScript" и выведи её в консоль.

// function task (text) {
//     return text.length
// }
// console.log(task('Javascript'));

// 3. Найди индекс первого вхождения подстроки "script" в строке "JavaScript".

// function task (text) {
//     return text.slice(4)
// }
// console.log(task('Javascript'));

// 4. Замена подстроки
// Замените в строке "Hello, world!" подстроку "world" на "there", используя метод replace.

// function task (text) {
//     return text.replace('world', 'three');
// }
// console.log(task('Hello world'));

// 5. Проверка начала строки
// Проверьте, начинается ли строка "JavaScript" с подстроки "Java".

// function task (text) {
//     return text.startsWith('Java')
// }
// console.log(task('Javascript'))

// 6. Проверка конца строки
// Проверьте, заканчивается ли строка "JavaScript" на подстроку "Script".

// function task (text) {
//     return text.endsWith('Script')
// }
// console.log(task('JavaScript'));

// 7. Определение наличия символа
// Проверьте, содержит ли строка "Hello, world!" символ "w".

// function task (text) {
//     return text.includes('w')
// }
// console.log(task('Hello world'))

// 8. Извлечение определённого количества символов
// Извлеките первые 5 символов из строки "Programming".

// function task (text) {
//     return text.slice(0,5)
// }
// console.log(task('Programming'));

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// function task (a) {
//     if (a === 10) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(task(14))

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// function task (a,b) {
//     if (a > b) {
//         return 'a больше b'
//     } else{
//         return 'a меньше b'
//     }
// }
// console.log(task(50,100))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// function task (a) {
//     if (a > 0) {
//         return 'positive'
//     } else if (a === 0) {
//         return 'равно'
//     } else {
//         return 'negative'
//     }
// }
// console.log(task(-2))

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// function task (number) {
//     if (number % 2 === 0) {
//         return 'Четное число'
//     } else {
//         return 'Нечетное число'
//     }
// }
// console.log(task(45))

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// function task (a,b) {
//     if (a % b === 0) {
//         return 'Нечетное число'
//     } else {
//         return 'Четное число'
//     }
// }
// console.log(task(10,5))

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// function task (s) {
//     if (typeof s ==='boolean') {
//         return 'boolean'
//     } else if (typeof s === 'string') {
//         return 'string'
//     } else if (typeof s === 'number') {
//         return 'number'
//     }
// }
// console.log(task(7))

// function task (s) {
//     if (typeof s ==='boolean') {
//         return 'boolean'
//     } else if (typeof s === 'string') {
//         return 'string'
//     } else if (typeof s === 'number') {
//         return 'number'
//     }
// }
// console.log(task('uhu'))

// function task (s) {
//     if (typeof s ==='boolean') {
//         return 'boolean'
//     } else if (typeof s === 'string') {
//         return 'string'
//     } else if (typeof s === 'number') {
//         return 'number'
//     }
// }
// console.log(task(true))

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// function task (a) {
//     if (a > 1 && a < 9) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(task(5))

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// function task (a) {
//     if (a === 3 || a === 7) {
//         return a + 7
//     } else {
//         return a - 10
//     }
// }
// console.log(task(3))

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// function task (a,b) {
//     if (a === 0 || a < 0 ) {
//         return a + b
//     } else if (b > 5 || b === 5) {
//         return a + b
//     } else {
//         return a - b
//     }
// }
// console.log(task(7,3))

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// function task (a,b) {
//     if (a > 4 && a < 10 || b >= 7 && b < 17) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(task(7,13))

// Проверка равенства двух чисел

// function task (a,b) {
//     if (a === b) {
//         return 'Равны'
//     } else {
//         return 'Неравны'
//     }
// }
// console.log(task(7,7))

// Проверка возраста для получения водительских прав

// function task (a) {
//     if (a >= 17) {
//         return 'Имеет право получить водительское удостоверение'
//     } else {
//         return 'Неимеет право получить водительское удостоверение'
//     }
// }
// console.log(task(18))

// Проверка, что число четное или нечетное

// function task (a) {
//     if (a % 2 === 0) {
//         return 'четное'
//     } else {
//         return 'нечетное'
//     }
// }
// console.log(task(64))

// Проверка, что строка не пустая

// function task (a) {
//     if (a === '') {
//         return 'строка пустая'
//     } else {
//         return 'строка не пустая'
//     }
// }
// console.log(task(''))

// function task (a) {
//     if (a === '') {
//         return 'строка пустая'
//     } else {
//         return 'строка не пустая'
//     }
// }
// console.log(task('uhu'))

// Проверка, что число положительное или отрицательное

// function task (a) {
//     if (a > 0) {
//         return 'Число положительное'
//     } else {
//         return 'Число отрицательное'
//     }
// }
// console.log(task(7))

// Проверка, что строка равна "JavaScript"

// function task (a) {
//     if (a === 'JavaScript') {
//         return 'строка равна "JavaScript"'
//     } else {
//         return 'строка неравна "JavaScript"'
//     }
// }
// console.log(task('JavaScript'))

// Проверка пароля пользователя

// function task (a) {
//     if (a === 'B1438AX') {
//         return 'Верный пароль';
//     } else {
//         return 'Неверный пароль'
//     }
// }
// console.log(task('B1438AX'))

//

// function a (name) {
//     return name.slice(0,4).toUpperCase() + name.slice(4,7).toLowerCase() +name.slice(7).toUpperCase()
// }
// console.log(a('LanaDelRey'))

// function a (name) {
//     return name.slice(0,5).toUpperCase() + name.slice(5).toLowerCase()
// }
// console.log(a('West coast'))

// function a (name) {
//     return name.length
// }
// console.log(a('Summertime sadness'))

// function a (name) {
//     return name.includes('Del')
// }
// console.log(a('LanaDelRey'))

// function a (name) {
//     return name.startsWith('Lana')
// }
// console.log(a('LanaDelRey'))

// function a (name) {
//     return name.endsWith('Rey')
// }
// console.log(a('LanaDelRey'))

// function task (text) {
//     return `I am ${text}`
// }
// console.log(task('21 year'))

// function a (text) {
//     return `${text} - американская поэтесса`
// }
// console.log(a('LanaDelRey'))

// function a (text) {
//     return `Video ${text}`
// }
// console.log(a('Games'))

// function a (text) {
//     return `${text} Paradise`
// }
// console.log( a('Dark'));

// function a (one,two) {
//     return `${one} Mountain ${two}`
// }
// console.log(a('Diet', 'Dew'))

//


// arrow function - стрелочная функция
// Стрелочная функция кадимки функциялардын аныктамасын (определение)
// кыскартууга мумкундук берет. Стрелочная функциялары => операторунун
// жардамы менен аныкталат, анын алдында кашаанын ичиндеги функциянын
// параметрлери жана андан кийин функциянын денеси (тело) келет.

// let a = 10
// a = 9       // Мааниси (значениясы) озгорот.
// console.log(a)

// const a = 10
// a = 9       // Ошибка, значениясы озгорюойт.
// console.log(a)


// function task (a,b) {
//     if (a > b) {
//         return 'true'
//     } else {
//         return 'false'
//     }
// }
// console.log(task(5,3))

// const sum = (a) => {
//     return a
// }
// console.log(sum(7))

// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(4,7))

// const sum = (a, b) => {
//     if (a > b) {
//         return 'true'
//     } else {
//         return 'false'
//     }
// }
// console.log(sum(51,32))

// const task = (name) => {
//     return name.toUpperCase()
// }
// console.log(task('Nicolas'))

// const task = (text) => {
//     return text.endsWith('end')
// }
// console.log(task('Front-end'))

// const task = (a) => {
//     if (a > 5) {
//         return 'true'
//     } else if (a === 5) {
//         return 'ravno'
//     } else {
//         return 'false'
//     }
// }
// console.log(task(3))

// function num (a,b) {
//     if (a > b) {
//         console.log('true')
//     } else {
//         console.log('false')
//     }
// }
// num(56,78)

// const task = () => {
//     console.log('Hello world');
// }
// task()

// let sum = (a,b) => {
//     return a + b;
// }
// console.log(sum(5,5));


// 1. Вам дана переменная num, присвойте ей значение. Выведите значение
// этой переменной в консоль.

// const num = (a) => {
//     return a
// }
// console.log(num(7))

// 2. Вам даны переменные a=10, b=2 и c=5. Выведите в консоль их сумму.

// const num = (a,b) => {
//     return a + b;
// }
// console.log(num(7,6))

// 3. Вам дана переменная со значением 100, выведите в консоль умноженную переменную на 2.

// const num = (a) => {
//     return a * 2
// }
// console.log(num(7))

// 4. Вам дана переменная со значением 67. Выведите в консоль остаток деления на 7.

// const num = (a) => {
//     return a % 7
// }
// console.log(num(67))

// 5. Вам даны переменные a=10 и b=2. Выведите в консоль их сумму, разность,
// произведение и частное (результат деления).

// const num = (a,b) => {
//     return a + b
// }
// console.log('Сумма:',num(10,2))
//
// const dif = (a,b) => {
//     return a - b
// }
// console.log('Разность:',dif(10,2))
//
// const pro = (a,b) => {
//     return a * b
// }
// console.log('Произведение:',pro(10,2))
//
// const quo = (a,b) => {
//     return a / b
// }
// console.log('Частное (результат деления)',quo(10,2))

// 6. Вам даны переменные c=15 и d=2. Просуммируйте их, а результат присвойте
// переменной result. Выведите в консоль значение переменной result.

// const num = (a,b) => {
//     return a + b;
// }
// console.log(num(15,2))

// 7. Вам даны переменные a=30, и b=15 Сложите переменные a и b и результат
// присвойте переменной c. Затем выведите в консоль остаток деления на 4 переменной c.

// const num = (a,b,c) => {
//     return (a + b) % 4
// }
// console.log(num(30,15,4))

// 8. Вам даны переменные a=17 и b=10. Отнимите от a переменную b и результат
// присвойте переменной c. Затем создайте переменную d, присвойте ей значение.
// Сложите переменные c и d, а результат запишите в переменную result. Выведите
// в консоль значение переменной result.

// const num = (a,b,d) => {
//     return (a - b) + d
// }
// console.log(num(17,10,7))

// 9. Вам даны a='10' и b='99'. Сложите переменные a и b и присвойте результат
// переменной result и выведите её в консоль.

// const str = (a,b) => {
//     return a + b
// }
// console.log(str('10','99'))

// 10. Вам даны переменные name='Аскар', number=10. Сложите данные переменные,
// присвойте результат переменной result и выведите её в консоль.

// const str = (name,number) => {
//     return name + number
// }
// console.log(str('Askar','10'))

// 1. Создайте переменную a и присвойте ей значение 10.
// Создайте переменную b и присвойте ей значение 3.14.
// Выведите их на экран с помощью console.log().

// const str = (a,b) => {
//     return a + b
// }
// console.log(str('10','3.14'))


// 2. Создайте две переменные x и y, присвойте им числовые значения.
// Найдите их сумму и выведите результат на экран.

// const task = (x,y) => {
//     return x + y
// }
// console.log(task(7,9))

// 3. Создайте переменные num1 и num2, присвойте им числовые значения.
// Найдите разность num1 и num2 и выведите результат.

// const num = (num1,num2) => {
//     return num1 - num2
// }
// console.log(num(47,39))

// 4. Создайте две переменные a и b, присвойте им числовые значения.
// Найдите произведение a и b и выведите результат.

// const num = (a,b) => {
//     return a * b
// }
// console.log(num(34,9))

// 5. Создайте переменные num1 и num2, присвойте им числовые значения.
// Найдите результат деления num1 на num2 и выведите его.

// const num = (num1,num2) => {
//     return num1 / num2
// }
// console.log(num(98,7))

// 6. Создайте переменные dividend и divisor, присвойте им числовые значения.
// Найдите остаток от деления dividend на divisor и выведите его.

// const num = (dividend,divisor) => {
//     return dividend % divisor
// }
// console.log(num(78,9))

// 1. Преобразование строки в верхний регистр
// Напиши код, который преобразует строку "hello world" в "HELLO WORLD"

// const task = (text) => {
//     return text.toUpperCase()
// }
// console.log(task('hello world'))

// 2. Получение длины строки
// Определи длину строки "JavaScript" и выведи её в консоль.

// const task = (a) => {
//     return a.length
// }
// console.log(task('JavaScript'))

// 3. Найди индекс первого вхождения подстроки "script" в строке "JavaScript".

// const task = (text) => {
//     return text.slice(4)
// }
// console.log(task('JavaScript'))

// 4. Замена подстроки
// Замените в строке "Hello, world!" подстроку "world" на "there", используя метод replace.

// const task = (text) => {
//     return text.replace('world','three')
// }
// console.log(task('Hello, world'))

// 5. Проверка начала строки
// Проверьте, начинается ли строка "JavaScript" с подстроки "Java".

// const task = (text) => {
//     return text.startsWith('Java')
// }
// console.log(task('JavaScript'))

// 6. Проверка конца строки
// Проверьте, заканчивается ли строка "JavaScript" на подстроку "Script".

// const task = (text) => {
//     return text.endsWith('Script')
// }
// console.log(task('JavaScript'))

// 7. Определение наличия символа
// Проверьте, содержит ли строка "Hello, world!" символ "w".

// const task = (text) => {
//     return text.includes('w')
// }
// console.log(task('Hello, world!'))

// 8. Извлечение определённого количества символов
// Извлеките первые 5 символов из строки "Programming".

// const task = (text) => {
//     return text.slice(0,5)
// }
// console.log(task('Programming'))

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// const num = (a) => {
//     if (a === 10) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(num(14))

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// const num = (a,b) => {
//     if (a > b) {
//         return 'a больше b'
//     } else {
//         return 'a меньше b'
//     }
// }
// console.log(num(78,65))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// const task = (a) => {
//     if (a > 0) {
//         return 'positive'
//     } else if (a === 0) {
//         return 'равно'
//     } else if (a < 0) {
//         return 'negative'
//     }
// }
// console.log(task(-2))

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
//
// const task = (number) => {
//     if (number % 2 === 0) {
//         return 'Четное число'
//     } else {
//         return 'Нечетное число'
//     }
// }
// console.log(task(45))

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// const task = (a,b) => {
//     if (a % b === 0) {
//         return 'Нечетное число'
//     } else {
//         return 'Четное число'
//     }
// }
// console.log(task(10,2))

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// const task = (s) => {
//     if (typeof(s) === "boolean") {
//         return 'boolean'
//     } else if (typeof(s) === "number") {
//         return 'number'
//     } else if (typeof(s) === "string") {
//         return 'string'
//     }
// }
// console.log(task('uhu'))

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// const num= (a) => {
//     if (a > 1 && a < 9) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(num(7))

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// const num = (a) => {
//     if (a === 3 || a ===7) {
//         return a + 7
// } else {
//         return a - 10
//     }
// }
// console.log(num(7))

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// const task = (a,b) => {
//     if (a === 0 || a < 0) {
//         return a + b
//     } else if (b < 5 || b === 5) {
//         return a + b
//     } else {
//         return a - b
//     }
// }
// console.log(task(1,4))

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Верно'.

// const task = (a,b) => {
//     if (a > 4 && a < 10 || b >= 7 || b < 17) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(task(7,14))

// Проверка равенства двух чисел

// const task = (a,b) => {
//     if (a === b) {
//         return 'Равны'
//     } else {
//         return 'Неравны'
//     }
// }
// console.log(task(7,7))

// Проверка возраста для получения водительских прав

// const task = (a) => {
//     if (a >= 17) {
//         return 'Имеет право получить водительское удостоверение'
//     } else {
//         return 'Неимеет право получить водительское удостоверение'
//     }
// }
// console.log(task(19))

// Проверка, что число четное или нечетное

// const task = (a) => {
//     if (a % 2 === 0) {
//         return 'четное'
//     } else {
//         return 'нечетное'
//     }
// }
// console.log(task(78))

// Проверка, что строка не пустая

// Проверка, что строка не пустая

// const task = (a) => {
//     if (a === '') {
//         return 'строка пустая'
//     } else {
//         return 'строка не пустая'
//     }
// }
// console.log(task(''))

// Проверка, что число положительное или отрицательное

// const task = (a) => {
//     if (a > 0) {
//         return 'Число положительное'
//     } else {
//         return 'Число отрицательное'
//     }
// }
// console.log(task(77))

// Проверка, что строка равна "JavaScript"

// const task = (a) => {
//     if (a === 'JavaScript') {
//         return 'строка равна "JavaScript"'
//     } else {
//         return 'строка неравна "JavaScript"'
//     }
// }
// console.log(task('JavaScript'))

// Проверка пароля пользователя

// const task = (a) => {
//     if (a === 'B1438AX') {
//         return 'Верный пароль';
//     } else {
//         return 'Неверный пароль'
//     }
// }
// console.log(task('B1438AX'))

// array - массив []

// Массив бул квадратный скобка ([]), массивдин ичинде ар кандай нерселер,
// элементтер, типы данныйлар болушу мумкун.
// Мисалы: number (1234567), string (qwerty), boolean, обьектер, сандар, тексттер,
// массивдин ичинде массив ж.б. Массив ар кандай типы данныйдагы элементерди озуно камтып, сактап турат.
// Негизи биз 1ден баштап санап эсептейбиз ал эми массивде индекс менен санайт.
// Javascript менен 0дон баштап санайт.
// Бекенддин (Backend) данныйлары массив болуп келет. Масссив типы данный боюнча (маалымат туру) обьект кирет.
// Массивдин озунун ар башка кызмат аткарган ар кандай методдору бар.
// Алар: push(), shift(), unshift(), pop(), map(), splice(), sort() ж.б.

// [1] - индексти тушундурот.

// Методдор
// push() - Добавляет элемент в конце массива. (Массивдин аягына кошуп берет.)
// shift() - Удаляет элемент в начале массива. (Массивдин башындагы элементти удалитетет.)
// unshift() - Добавляет элемент в конце массива. (Массивдин башына элемент кошуп берет.)
// pop() - Удаляет элемент в конце массива. (Массивдин аягындагы элементти удалитетет.)

// let arr = [123, 'text', true, [1,2,3,4,5,6,7]]
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[3][4])

// let arr = ['html', 'css', 'javascript']
// console.log(arr.push('python'))
// console.log(arr.shift())
// console.log(arr.unshift('html'))
// console.log(arr.pop())
// console.log(arr)

// push()
// let arr = ['Han', 'Li', 'Kim', 'Pak']
// console.log(arr.push('Chan'))
// console.log(arr)
// push()

// shift()
// let arr = ['Han', 'Li', 'Kim', 'Pak']
// console.log(arr.shift())
// console.log(arr)
// shift()

// unshift()
// let arr = ['Han', 'Li', 'Kim', 'Pak']
// console.log(arr.unshift('Chan'))
// console.log(arr)
//unshift()

// pop()
// let arr = ['Han', 'Li', 'Kim', 'Pak']
// console.log(arr.pop())
// console.log(arr)
//pop()

// let arr = ['Italia', 'France', 'Switzerland', 'South Korea']
// console.log(arr.splice(0, 2))

// const arr = ['Italia', 'France', 'Switzerland', 'South Korea', 'Japan']
// console.log(arr.length)
// console.log(arr)


// 1. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ['a', 'b', 'c']
// console.log(arr.push('1, 2, 3'))
// console.log(arr)

// 2. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let arr = [1, 2, 3]
// let arrTwo = [4, 5, 6]
// console.log(arr.push(arrTwo))
// console.log(arr)

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3]
// console.log(arr.push(4, 5, 6))
// console.log(arr)

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3]
// console.log(arr.unshift(4, 5, 6))
// console.log(arr)

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq']
// console.log(arr.splice(0, 1))

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq']
// console.log(arr.splice(2))

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0,3))

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(3))

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(1,2))
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let array = [1, 2, 3, 4, 5]
// let extra = array.splice(1, 3)
// console.log(extra)

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array = [1, 2, 3, 4, 5]
// array.splice(3, 0, 'a', 'b', 'c')
// console.log(array)

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let array = [1, 2, 3, 4, 5]
// array.splice(1, 0, 'a', 'b')
// array.splice(6, 0, 'c')
// array.splice(8, 0, 'e')
// console.log(array)


// map()

// map() - Мэп методу жаны массивди создавайтетип берет. Бир нерсени (элементти) кайтарып берет
// жана жаны массивдин ичине чыгарып берет. Map callback function, index, array, element параметрлерин
// кабыл алат (Принимайтетет). Коп учурда элементти жана индексти кабыл алат.
// Массивдин ичиндеги ар бир элементке (индекс боюнча) кайрылат жана массивден чыгырып берет.
// mар() тин дагы озунун методдору бар. Алар: Math.random(), Math.floor(), Math.sqrt(), Math.round() ж.6.
// коптогон методдору бар. Ар бир метод ар башка кызмат аткарат.
// mар() методу массивдин ар бир элементи учун корсотулгон функцияны
// чакыруунун натыйжасында жаны массивди тузот.

// Параматрлери

// callbackFunction - колбек функция () => (arr массивинин ар бир элементи учун чакырылган функция)
// index - учурдагы массивдин индекси
// element (currentValue) - учурдагы массивдин элементи.
// array - учурдагы массив.

// const arr = [1,2,3,4,5,6]
// const result = arr.map(el => {
//     return el + el
// })
// console.log(result)

// const arr =[1,2,3,4,5,6,7,8,9,10]
// const result = arr.map(el => {
//     return el > 4
// })
// console.log(result)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const result = arr.map(el => {
//     return el * 2
// })
// console.log(result)

// const arr = [1,2,3,4,5,6]
// const result = arr.map(el => {
//     return el - el
// })
// console.log(result)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const result = arr.map(el => {
//     return el / el
// })
// console.log(result)

// const arr = [1,2,3,4,5,6,7,8]
// const res = arr.map(el => el + 2)
// console.log(res)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.map(el => el + el))

// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.map(el => el - el))

// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.map(el => el * 2))

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const result = arr.map(el => {
//     if (el > 4) {
//         return el
//     } else {
//         return false
//     }
// })
// console.log(result)

// map() тин методдору

// Math.floor() - калдык жок кылып чыгарып берет,
// болчок санды бутун сан кылып чыгарып берет.
// Math.floor() - кичинесине карап толуктап берет.

// const arr = [1.5, 2.4, 5.5]
// console.log(arr.map(Math.floor))

// const arr = [1.2,3.4,5.6,7.8]
// const result = arr.map(Math.floor)
// console.log(result)

// Math.round() - жогору санга жана жакынкы санга толуктап берет. (2.5 = 3)

// const arr = [1.5, 7.3, 2.5, 5.3]
// console.log(arr.map(Math.round))

// const arr = [1.5, 7.3, 2.5, 5.3]
// const res = arr.map(Math.round)
// console.log(res)

// Math.random() - ар турдуу, случайно (рандомный) кылып чыгарып берет.

// const arr = [1,2,3,4,5,6,7,8]
// const res = arr.map(Math.random)
// console.log(res)

// Math.sqrt() - цифранын квадратный кореньнин чыгарып берет. (квадраттык тамырын)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const res = arr.map(Math.sqrt)
// console.log(res)

// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.

// const arr = [5,15,315,2,13,20,9]
// const res = arr.map(el => {
//     return el + el
// })
// console.log(res)

// const arr = [5,15,315,2,13,20,9]
// const res = arr.reduce((acc,el) => {
//     return acc + el
// },0)
// console.log(res)

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
//
// const arr = [5,12,314,2,13,20,9]
// const res = arr.map(el  => {
//     if (el % 2 === 0) {
//         return el + el
//     } else {
//         return false
//     }
// })
// console.log(res)

// const arr = [5,12,314,2,13,20,9]
// const res = arr.reduce((acc, el) => {
//     if (el % 2 === 0) {
//         return acc + el
//     } return acc
// },0)
// console.log(res)

// const arr = [5,12,314,2,13,20,9]
// const res = arr.map(el => {
//     return el % 2 === 0 ? el + el : el
// })
// console.log(res)

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.

// const arr = [5,12,314,2,13,20,9]
// const res = arr.map(el => {
//     if (el > 10) {
//         return el + el
//     } else {
//         return el
//     }
// })
// console.log(res)

// const arr = [5,12,314,2,13,20,9]
// const res = arr.reduce((acc, el) => {
//     if (el > 10) {
//         return acc + el
//     } return acc
// },0)
// console.log(res)

// const arr = [5,12,314,2,13,20,9]
// const res = arr.map(el => {
//     return el > 10 ? el + el : el
// })
// console.log(res)

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.

// const arr = [5,12,314,2,13,20,9]
// const res = arr.map(el => {
//     if (el > 10) {
//         return el - el
//     } else {
//         return el
//     }
// })
// console.log(res)

// const arr = [5,12,314,2,13,20,9]
// const res = arr.reduce((acc,el) => {
//     if (el > 10) {
//         console.log('acc', acc)
//         console.log('el', el)
//         return el - acc
//     } return acc
// },0)
// console.log(res)

// const arr = [5,12,314,2,13,20,9]
// const res = arr.map(el => {
//     return el > 10 ? el - el : el
// })
// console.log(res)

// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.

// const arr = ['Аскар', 'Баяман', 'Калмамат']
// const res = arr.map(el => {
//     return el.length
// })
// console.log(res)

// const str = ['Аскар', 'Баяман', 'Калмамат']
// const res = str.reduce((acc, el, idx) => {
//     return acc + el
// },'')
// console.log(res.length)

// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.

// const arr = ['Аскар', 'Баяман', 'Калмамат']
// const res = arr.map(el => {
//     return el.toUpperCase()
// })
// console.log(res)

// const str = ['Аскар', 'Баяман', 'Калмамат']
// const res = str.reduce((acc, el, idx) => {
//     if (el) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         return acc
//     }
// },[])
// console.log(res)

// const str = ['Аскар', 'Баяман', 'Калмамат']
// const res = str.reduce((acc,el) => {
//     acc.push(el.toUpperCase())
//     return acc
// },[])
// console.log(res)

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.

// const arr = ['Аскар', 'Баяман', 'Калмамат']
// const result = arr.map(el => {
//     if (el.length === 6 ) {
//         return el.toUpperCase()
//     } else {
//         return el
//     }
// })
// console.log(result)

// const str = ['Аскар', 'Баяман', 'Калмамат']
// const res = str.reduce((acc,el, idx) => {
//     if (idx % 2 !== 0) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// },[])
// console.log(res)

// const arr = ['Аскар', 'Баяман', 'Калмамат']
// const newArr = arr.map((el, idx) => {
//     if (idx === 1) {
//         return el.toUpperCase()
//     } return el
// })
// console.log(newArr)

// const arr = ['Аскар', 'Баяман', 'Калмамат']
// const res = arr.map((el, index) => {
//     return index === 1 ? el.toUpperCase() : el
// })
// console.log(res)

// 8. Напишите функцию, которая принимает str, target. И возвращает true или false, если targer присутствует в str.
//    Использовать .reduce для этого.
//     Пример: isPresent ('abcd', 'b') => true
//             isPresent ('efghi', 'a') // => false

// function isPresent (str, target) {
//     return Array.from(str).reduce((acc, el) => acc || el === target, '');
// }
// console.log(isPresent('abcd', 'b'));
// console.log(isPresent('efghi', 'a'));

// function isPresent (str, target) {
//     return Array.from(str).reduce((acc, char) => {
//         return acc || char === target
//     },'')
// }
// console.log(isPresent('abcd', 'b'))
// console.log(isPresent('efghi', 'a'))

// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//    Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// const arr = ['асКар', 'бЯяман', 'калМмамат']
// const res = arr.map(el => {
//     return el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase()
// })
// console.log(res)

// const str = ['асКар', 'бЯяман', 'калМмамат']
// const res = str.reduce((acc,el,idx) => {
//     acc.push(el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase())
//     return acc
// },[])
// console.log(res)

// const arr = ['асКар', 'бЯяман', 'калМмамат']
// const res = arr.map((el,idx) => {
//     if (idx === 1) {
//         return el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase()
//     } return el
// })
// console.log(res)

// const arr = ['асКар', 'бЯяман', 'калМмамат']
// const res = arr.map((el, index) => {
//     return index === 1 ? el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase() : el
// })
// console.log(res)

// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.

// const arr = ['Баяман', 'Калмамат']
// const res = arr.map(el => {
//     if (el.includes('Б')) {
//         return el = 'Каяман'
//     } else if (el.includes('К')) {
//         return 'Балмамат'
//     } else {
//         return el
//     }
// })
// console.log(res)

// const strings = ['Баяман', 'Калмамат'];
// const swapFirstLetters = (arr) => arr.reduce((acc, str, index) => {
//     if (index === 0) {
//         // Сохранение первой буквы первого элемента
//         acc.firstLetter = str[0];
//         // Заменяем первую букву первого элемента пустым символом
//         acc.newFirst = str.slice(1);
//     } else if (index === 1) {
//         // Сохранение первой буквы второго элемента
//         acc.secondLetter = str[0];
//         // Заменяем первую букву второго элемента пустым символом
//         acc.newSecond = str.slice(1);
//     }
//     return acc;
// }, { firstLetter: '', secondLetter: '', newFirst: '', newSecond: '' });
//
// const swapped = (swapFirstLetters(strings));
// const result = [
//     swapped.secondLetter + swapped.newFirst,
//     swapped.firstLetter + swapped.newSecond
// ];
//
// console.log(result);

// const nameString = ['Баяман', 'Калмамат']
// const arrGroup = (arr) => {
//     return arr.reduce((acc,str,idx) => {
//         if (idx === 0) {
//             acc.firstWord = str[0]
//             acc.newFirstWord = str.slice(1)
//         } else if (idx === 1) {
//             acc.secondWord = str[0]
//             acc.newSecondWord = str.slice(1)
//         }
//         return acc
//     },[])
// }
// const addNames = arrGroup(nameString)
// const  result = [
//     addNames.secondWord + addNames.newFirstWord,
//     addNames.firstWord + addNames.newSecondWord
// ]
// console.log(result)

// const arr = ['Баяман', 'Калмамат']
// const res = arr.map(el => {
//     return el.includes('Б') ? 'Каяман' : el.includes('К') ? el = 'Балмамат' : el
// })
// console.log(res)

// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет,
// все ли элементы массива относятся к одному типу данных.

// const arr = [true, '1234', 325]
// const res = arr.map(el => {
//     if (typeof el === 'string') {
//         return 'string'
//     } else if (typeof el === 'number') {
//         return 'number'
//     } else if (typeof el === 'boolean') {
//         return 'boolean'
//     } return el
// })
// console.log(res)

// const arr = [true, '1234', 325]
// function task (array) {
//     return array.reduce((acc, el) => {
//         if (typeof el === 'boolean') {
//             acc.push('boolean')
//         } else if (typeof el === 'string') {
//             acc.push('string')
//         } else if (typeof el === 'number') {
//             acc.push('number')
//         }
//         return acc
//     },[])
// }
// console.log(task(arr))

// const arr = [true, '1234', 325]
// const res = arr.map(el => {
//     return typeof el === 'string' ? 'string' : typeof el === 'number' ? 'number' : typeof el === 'boolean' ? 'boolean' : el
// })
// console.log(res)

// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// const arr = ['тестинг']
// const res = arr.map(el => {
//     if (el.length % 2 === 0) {
//         return el
//     } else {
//         return el.slice(0,3).toLowerCase() + el.slice(3,4).toUpperCase() + el.slice(4,7).toLowerCase()
//     }
// })
// console.log(res)

// const arr = ['тестинг']
// const res = arr.reduce((acc, el, idx) => {
//     if (el.length % 2 === 0) {
//         return el
//     } else {
//         return el.slice(0,3).toLowerCase() + el.slice(3,4).toUpperCase() + el.slice(4,7).toLowerCase()
//     }
// },[])
// console.log(res)

// const arr = ['тестинг']
// const res = arr.map(el => {
//     return el.length % 2 === 0 ? el : el.slice(0,3).toLowerCase() + el.slice(3,4).toUpperCase() + el.slice(4,7).toLowerCase()
// })
// console.log(res)

// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.

// const arr = [5, -3, 13, -7, 45]
// const res = arr.map(el => {
//     if (el > 0) {
//         return el + el
//     } else {
//         return el
//     }
// })
// console.log(res)

// const arr = [5, -3, 13, -7, 45]
// const res = arr.reduce((acc, el) => {
//     if (el > 0) {
//         return el + el
//     } else {
//         return el
//     }
// },0)
// console.log(res)

// const arr = [5, -3, 13, -7, 45]
// const res = arr.map(el => {
//     return el > 0 ? el + el : el
// })
// console.log(res)

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел,
// которые больше (меньше) -10.

// const arr = [5, -54, 13, -7, 45, -15, -34]
// const res = arr.map(el => {
//     if (el < 0 && el < -10) {
//         return el + el
//     } else {
//         return el
//     }
// })
// console.log(res)

// const arr = [5, -54, 13, -7, 45, -15, -34]
// const res = arr.reduce((acc, el) => {
//     if (el < 0 && el < -10) {
//         console.log('el', el)
//         return el + el
//     } else {
//         return el
//     }
// },0)
// console.log(res)

// const arr = [5, -54, 13, -7, 45, -15, -34]
// const res = arr.map(el => {
//     return el < 0 && el < -10 ? el + el : el
// })
// console.log(res)

// let a = 11
// console.log(a > 10 ? 'true' : 'false')

// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары.
// Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.

// const arr = [1, 65, 13 , 30, 100]
// const res = arr.map(el => {
//     return el * 84.20
// })
// console.log(res)


// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit'].
// Выведите каждый нечетный индекс в строке в верхнем регистре.

// const arr = ['Lorem ipsum dor sit omet devour il ela sit']
// const res = arr.map(el => {
//     return el.slice(0,19).toUpperCase() + el.slice(19,34).toLowerCase() + el.slice(34).toUpperCase()
// })
// console.log(res)

// const arr = ['Lorem ipsum dor sit omet devour il ela sit']
// const res = arr.reduce((acc, el, idx) => {
//     return el.slice(0,19).toUpperCase() + el.slice(19,34).toLowerCase() + el.slice(34).toUpperCase()
// },[])
// console.log(res)

// const arr = ['Let me photograph you in this light, In case it is the last time']
// const res = arr.map(el => {
//     return el.slice(0,3).toUpperCase() + el.slice(3,17).toLowerCase() + el.slice(17,22).toUpperCase() + el.slice(22,30).toLowerCase() + el.slice(30,35).toUpperCase() + el.slice(35,50).toLowerCase() + el.slice(50,54).toUpperCase() + el.slice(54).toLowerCase()
// })
// console.log(res)

// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// const arr = ['Aскар', 'Баяман', 'Калмамат']
// const result = arr.map((el,idx) => {
//     return idx + 1 + '-' + el
// })
// console.log(result)

// const arr = ['Aскар', 'Баяман', 'Калмамат']
// const res = arr.reduce((acc, el, idx) => {
//     return acc + (idx + 1) + '-' +  el
// },'')
// console.log(res)

// const arr = ['Aскар', 'Баяман', 'Калмамат']
// function numNames (array) {
//     return array.reduce((acc, el , idx) => {
//         acc.push(idx + 1+ '-' + el)
//         return acc
//     },[])
// }
// console.log(numNames(arr))

// const arr = ['Aскар', 'Баяман', 'Калмамат']
// const res = arr.reduce((acc, el ,idx) => {
//     acc.push(`${idx + 1}-${el}`)
//     return acc
// },[])
// console.log(res)

// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию ,
// которая вставляет дефис (-) между каждыми двумя четными числами.
// Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// const arr = [2,456,6,8]
// const res = arr.map(el => {
//     if (el % 2 === 0) {
//         return el + '-'
//     } else {
//         return el
//     }
// })
// console.log(res)

// const arr = [2,456,6,8]
// const res = arr.map(el => {
//     return el % 2 === 0 ? el + '-' : el
// })
// console.log(res)

// const arr = [2,456,6,8]
// const res = (array) => {
//     return array.reduce((acc, el) => {
//         return acc + '-' + el
//     })
// }
// console.log(res(arr))

//
// const arr = [2,456,6,8]
// const res = (array) => {
//     return array.reduce((acc, el) => {
//         console.log('acc', acc)
//         console.log('el', el)
//         return acc + '-' + el
//     })
// }
// console.log(res(arr))
//

// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое число в массиве.

// const arr = [5,15,315,2,13,20,9]
// const res = arr.reduce((acc, el) => {
//     return acc + el
// },0)
// console.log(res / arr.length)

// reduce()

// reduce() - массивдин ичиндеги каждый (ар бир)
// элепменти бир-бирден озгортконго жардам берет.
// Ар бир элементти бирден колдонуп берет.
// солдон онго карай эсептеп берет.
// reduce() тун озунун параметирлери бар.
// Алар: currentValue, index array, accumulator, initialValue.
// reduce() тун ичине функция ачылат. Мисалы: callback => function
// функция жок reduce() (редус) иштебейт.
// reduce() методу редактор функциясын массивдин ар элементине (солдон онго карай)
// колдонот, натыйжага бир маанини кайтарып берет.

// Параметрлери

// accumulator (acc) - аккумулятор функциянын иштешине ток берет деп тшуунсок болот.
// массивдин ичиндеги биринчи элементке барабар болот.
// Аккумулятор туура эмес эсертеп коюшу мумкун. Биз ага значения беришибиз керек.
// Башка элементерди дагы биринчи элементке барабар кылып койот.
// Биз аны башка нерсеге барабар кылышыбыз керек.
// Аккумулятор функциясына утур (,) коюп, массив [] ге барабар кылабыз,
// эгер массив менен иштеп жатсак, number менен иштеп жатсак 0 (ноль),
// string менен иштеп жатсак тырмакча ('') койобуз.

// accumulator value ну кошкондо общий сумманы жалпы результатты кайтарат.
// Value (el - element). Массивдин ичиндеги ар бир элементти бирден
// accumulator го кошуп чыгат. Бул жерде фибаначи жолу журот.
// Фибаначи (1 + 2 + 3 + 5 + 8 + 13 + 21 + 34)
// accumulator менен value (el) ну кошкондо фибаначи жолу журот.

// currentValue (Value) - (el) - учурдагы массивдин элементи
// reduce() - тун параметрлеринин бири
// index - учурдагы массивдин индекси
// arr - учурдагы массив

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const res = arr.reduce((acc, value, idx, arr) => {
//     return acc + value
// },0)
// console.log(res)

// const arr = [1,2,3,5,8,13,21,34]
// const res = arr.reduce((acc, value,idx, arr) => {
//     return acc + value
// })
// console.log(res)

// const arr = [1,2,3,5,8,13,21,34]
// const calculateSam = (array) => {
//     return array.reduce((acc, value, idx, arr)  => {
//         console.log('acc', acc)
//         console.log('value', value)
//         return acc + value
//     },0)
// }
// console.log(calculateSam(arr))

// const str = ['C', 'H', 'A', 'R', 'L', 'E', 'S']
// const calculateSum = (array) => {
//     return array.reduce((acc, value) => {
//         console.log('acc', acc)
//         console.log('value', value)
//         return acc + value
//     },'')
// }
// console.log(calculateSum(str))

// const arr = ['Vincent', 'Carlos', 'Lecler', 'Blake', 'Sains', 'Dylan']
// const res = arr.reduce((acc, el, idx) => {
//     if (idx % 2 !== 0) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// }, [])
// console.log(res)


// const name = ['Vincent', 'Carlos', 'Lecler', 'Blake', 'Sains', 'Dylan']
// console.log(name.reduce((acc, el, idx) => {
//     if (idx % 2 !== 0) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// },[]))

// const nameRed = ['Vincent', 'Carlos', 'Lecler', 'Blake', 'Sains', 'Dylan']
// const res = nameRed.reduce((acc,el,idx) => {
//     if (idx % 2 !== 0) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// },[])
// console.log(res)


// const names = ['Nargiza', 'Jyrgalbek', 'Timur', 'Adilet', 'Myrzagul', 'Jaina']
// console.log(names.reduce((acc,el,idx) => {
//     if (idx % 2 !== 0) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// },[]))

// const names = ['Nargiza', 'Jyrgalbek', 'Timur', 'Adilet', 'Myrzagul', 'Jaina']
// const result = names.reduce((acc,el,idx) => {
//     if (idx % 2 !== 0) {
//         acc.push(el.toUpperCase())
//         return acc
//     } else {
//         acc.push(el.toLowerCase())
//         return acc
//     }
// },[])
// console.log(result)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const result = arr.reduce((acc, el) => {
//     if (el > 4) {
//         return acc + el
//     } else {
//         return acc
//     }
// },0)
// console.log(result)

// filter()
// Массивдин методу. Filter - бул map() дей эле иштейт.
// Бул фильтерлеп берет. Map() дей эле копчулук учурда element ти алат.
// Мисалы учун map() менен массивдеги элементтерге кандайдыр
// бир озгоруу киргизе турган болсок ал бизге true жана false кылып
// чыгарып берип койсо, ал эми filter() биздин массивдин ичиндеги элементтерге
// жараша чыгарып берет.

// Параметрлери
// el - (element) -учурдагы массивдин элементи
// idx - (index) - учурдагы массивдин индекси
// arr - (array) - учурдагы элементтин масссиви

// const frontEnd = ['html', 'css', 'javascript', 'javascript-dom', 'react', 'github']
// const mapMethod = frontEnd.map(el => {
//     return el.length > 4
// })
// console.log(mapMethod)

// const frontEnd = ['html', 'css', 'javascript', 'javascript-dom', 'react', 'github']
// const filterMethod = frontEnd.filter(el => {
//     return el.length > 4
// })
// console.log(filterMethod)


// object {}

// Обект - Бэкенддин (Backend) данныйлары обьект болуп калат.
// Массив болот, массивдин ичинде обьектер болот.
// Бул бэкенддин (Backend) данныйлары кандай болуп келиши.
// Ар бир типы данный озунун тиешелуу менен билинет.
// Мисалы: string тер тырмакчалар менен ("", '', ``)
// number лер сандар (1234, 46, 35, 6, 7)
// boolean дар true жана false менен билинет.
// Массив [] квадратный скобка менен билинет.
// Ал эми обьект бул фигурный скобка {}
// Обьекттин ичинде ар кандай типы данныйдагы элементтер болот.
// Мисалы: number, string, boolean, тексттер, массив,
// функциялар, обьектин ичинде дагы обьект болот.
// Жана ошондой эле обьекттин ичинде ключ жана значение деген нерсе болот.
// Ключ (ачкыч соз), значение(мааниси)
// Мисалы: (name: 'Gabriel', nationality: 'Franch')
// Обьект бул касиеттердин жыйындысы. Ар бир сыпат ат менен баалуулуктан турат.
// Аты сап же символ болушу мумкун, ал эми мааниси каалаган нерсе болушу мумкун.
// Обьекттер Javascript тин бардык жериндеб озгочо маалымттарды сактоо учун колдонулат.
// Обьекттер Javascript дин озгочо туру.


// let obj = {
//     name: 'Han',
//     surname: 'Lee',
//     age: 25,
//     profession: 'Racer',
//     nationality: 'Japanese',
//     placeOfBirth: 'Kyoto',
//     placeOfResidence: 'Osaka',
//     'spoken language': {
//         japan: 'native',
//         english: 'advanced',
//         french: 'intermediate'
//     },
//     hobby: 'Drive'
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.name.length)
// console.log(obj.age)
// console.log(obj.profession)
// console.log(obj.nationality)
// console.log(obj['spoken language'])


// delete - удаляет обьект (очуруп салат)
// Object.freeze() - замараживает (тондуруп койот)

// Object.freeze(obj)
// delete obj.name
// delete obj.profession
// console.log(obj)

// Object.freeze(obj)
// delete obj.hobby
// console.log(obj)


// Эгерде delete ти жазып туруп анан Object.freeze() ди
// жаза турган болсок обьекттин ичиндеги данныйлары очуп кетет.
// Себеби delete ти жазып биз изначально, эн башына очуруп жаткан
// болобуз. Ал эми тескеринче Object.freeze() ди жазып
// анан delete ти жазсак очуро албайбыз, бул учурда биз башында
// тондуруп алганыбыз.


// let obj = {
//     name: 'Carlos',
//     surname: 'Sainz',
//     age: 30,
//     profession: 'Racing driver',
//     nationality: 'Spaniard',
//     placeOfBirth: 'Madrid',
//     placeOfResidence: 'Valencia',
//     'spoken language': {
//         Spanish: 'native',
//         english: 'advanced',
//         french: 'intermediate'
//     },
//     hobby: 'Drive'
// }
// console.log(Object.keys(obj))
// console.log(Object.keys(obj).length)
// console.log(Object.keys(obj).map(key => {
//     return [key]
// }))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(Object.assign(obj))


// Обьекттин меттоддору

// Object.keys()
// Обьекттин ключтарына иштеп берет.
// Ключатарын чыгарып берет.
// Object.keys()

// Object.values()
// Обьекттин ключтарын алып салат.
// Маанилерин (значения) чыгарып берет.
// Object.values()

// Object.entries()
// Обьекттерди, исиндеги ключ, значеничларын кошуп
// массивге айладырып берет.
// Обьект: { name: 'Rocky'}
// Массив: ['name', 'Rocky']
// Object.entries()

// Object.assign()
// Обьекти копировайтетип берет.
// Object.assign()

// let userOne = {
//     name: 'Russell',
//     age: 26,
//     profession: 'Racer'
// }
//
// let userTwo = {
//     name: 'Johnny',
//     age: 61,
//     profession: 'Actor',
//     money: 10000,
//     car: 'MClaren'
// }
//
// let userThree = {
//     name: 'Ryan',
//     age: 47,
//     profession: 'comic',
//     money: 5000
// }
//
// let copy = Object.assign({},  userOne, userTwo, userThree)
// console.log(copy)


 // let names = [
 //     {
 //         id: 1,
 //         name: 'John',
 //         age: 22,
 //         money: '1000'
 //     },
 //     {
 //         id: 2,
 //         name: 'Jane',
 //         age: 18,
 //         money: '5000'
 //     },
 //     {
 //         id: 3,
 //         name: 'Carlos',
 //         age: 26,
 //         money: '10000'
 //     }
 // ]
// console.log(names)

// let result = names.filter(el => {
//     return el.age < 20
// })
// console.log(result)

// let result = names.map(el => {
//     if (el.money === '5000') {
//         el.money = '30'
//         return el
//     } else {
//         return el
//     }
// })
// console.log(result)

// let result = names.map(el => {
//     if (el.id === 2) {
//         el.name = 'Norris'
//         el.age = 24
//     } return el
// })
// console.log(result)

// Каррирование

// Каррирование - (Карринг) - функциянын ичндеги функциялар
// алардын ар бири-бирден озунчо параметрди кабыл алат.
// Карринг (англис тининен currying, кээде currying) коп аргументтерден ар бири
// бир аргументтин функциясы болгон функциялардын жыйындысына айландыруу.
// Мындай трансформациянын мумкундугу биринчи жолу 1920-жылдары Мозес Шейнфинкель
// тарабынан системалуу турдо изилденген Готлоб Фрегенин эмгектеринде белгиленген жана
// комбинатордук логиканы иштеп чыгуучу Хаскел Карринин ысымы менен аталган, мында бирдиктуу
// аргументтин функцияларын кыскартуу негизги мааниге ээ.
// Карринг программалоо тилдеринде, биринчи кезекте функционалдык программалоо парадигмасын
// колдогон тилдерде кенири колдонулат. Кээ бир тилдерде функциялар демейки боюнча кирриленген,
// башкача айтканда, коп орундуу функциялар жогорку даражадагы унардык функциялар катары
// ишке ашырылат жана аларгы аргументтерди колдонуу жарым-жартылай колдонмолордон ырааттуулугу
// болуп саналат.
// Карринг - функциялар менен иштоонун алдынкы ыкмасы. Ал Javascript гана эмес, башка тилдерде да колдонулат.
// Карринг - бул функциялардын аргументтерди f(a, b, c) катары эмес,
// f(a)(b)(c) катары кабыл алышы учун тарнсформациясы.
// Карринг функцияны чакыбайт. Бул жон гана аны озгортот.

// function generationLink (http) {
//     return function (www) {
//         return function (name) {
//             return function (domain) {
//                 return `${http}://${www}.${name}.${domain}`
//             }
//         }
//     }
// }
// console.log(generationLink('http')('www')('youtube')('com'))

// const generationLink = (http) => (www) => (name) => (domain) => {
//     return `${http}://${www}.${name}.${domain}`
// }
// console.log(generationLink('http')('www')('youtube')('com'))

// function link (http) {
//     return function (www) {
//         return function (name) {
//             return function (domain) {
//                 return `${http}://${www}.${name}.${domain}`
//             }
//         }
//     }
// }
// console.log(link('http')('www')('youtube.com/watch?v=kPa7bsKwL-c')('com'))

// const link = (http) => (www) => (name) => (domain) => {
//     return `${http}://${www}.${name}.${domain}`
// }
// console.log(link('http')('www')('youtube.com/watch?v=kPa7bsKwL-c')('com'))

// function wikipedia (http) {
//     return function (www) {
//         return function (name) {
//             return function (domain) {
//                 return `${http}://${www}.${name}.${domain}/wiki/Steve_Jobs`
//             }
//         }
//     }
// }
// console.log(wikipedia('http')('en')('wikipedia')('org'))

// const appleLink = (http) => (www) => (name) => (domain) => {
//     return `${http}://${www}.${name}.${domain}`
// }
// console.log(appleLink('http')('www')('apple')('com'))

//

// function instagram (http) {
//     return function (www) {
//         return function (name) {
//             return function (domain) {
//                 return `${http}://${www}.${name}.${domain}`
//             }
//         }
//     }
// }
// console.log(instagram('http')('www')('instagram')('com'))

// const instagram = (http) => (www) => (name) => (domain) => (mm) => {
//     return `${http}://${www}.${name}.${domain}/${mm}/`
// }
// console.log(instagram('http')('www')('instagram')('com')('adeleaccess'))

// const instagram = (http) => (www) => (name) => (domain)  => {
//     return `${http}://${www}.${name}.${domain}/adele/`
// }
// console.log(instagram('http')('www')('instagram')('com'))

// function task (a,b,c) {
//     return a + b + c
// }
// console.log(task(4,6,8))

// function curry (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// console.log(curry (3)(4)(7))

// function curry (name) {
//     return function (age) {
//         return function (job) {
//             return `${name}. ${age}. ${job}`
//         }
//     }
// }
// console.log(curry('My name is John')('I`m 25 years old')('I work at M-digital company'))

// function curry (firstSentence) {
//     return function (secondSentence) {
//         return function (thirdSentence) {
//             return `${firstSentence}, ${secondSentence},${thirdSentence}`
//         }
//     }
// }
// console.log(curry('Каждый раз')('как я закрываю глаза')('будто наступает темный рай'))

// function curry (firstSentence) {
//     return function (secondSentence) {
//         return function (thirdSentence) {
//             return `${firstSentence}, ${secondSentence},${thirdSentence}`
//         }
//     }
// }
// console.log(curry('Dear lord')('when I get to heaven')('Please let me bring my man'))

// function currying (a) {
//     return function (b) {
//         if (a > b) {
//             return 'true'
//         } else {
//             return 'false'
//         }
//     }
// }
// console.log(currying(15)(6))

// function curring (a) {
//     return function (b) {
//         return function (c) {
//             if (a > b) {
//                 return 'Верно'
//             } else if (a > b && a < c) {
//                 return 'Верно'
//             } else {
//                 return 'Неверно'
//             }
//         }
//     }
// }
// console.log(curring(35)(30)(40))

//  Вам даны четыре переменные.
//  Первая - для хранения количества дней. Присвойте ей значение "365".
//  Вторая - для хранения названия нашей планеты "Земля".
//  Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
//  Четвертая - для хранения слова "Солнце".
//  Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
//  "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

// function curryString (day) {
//     return function (earth) {
//         return function (quantity) {
//             return function (sun) {
//                 return `В нашем году ${day} дней. Днём у нас светит ${sun}. Население планеты ${earth} составляет примерно ${quantity} человек.`
//             }
//         }
//     }
// }
// console.log(curryString('365')('Земля')('7 млрд.')('Солнце'))

// const curry = (a) => (b) => (c) => {
//     return a + b + c
// }
// console.log(curry(100)(200)(300))

// Задача 1: Сложение двух чисел
// Описание: Напишите функцию, которая принимает первое число и возвращает другую функцию,
// принимающую второе число и возвращающую их сумму.

// function curryiedFunc (numberOne) {
//     return function (numberTwo) {
//         return numberOne + numberTwo
//     }
// }
// console.log(curryiedFunc(12)(24))

// function curryiedFunc (a) {
//     return function (b) {
//         return a + b
//     }
// }
// const numberOne = curryiedFunc(12)
// const numberTwo = numberOne(24)
// console.log(numberTwo)

// function curryiedTask (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// const numberOne = curryiedTask(12)
// const numberTwo = numberOne(24)
// const numberThree = numberTwo(36)
// console.log(numberThree)

// Задача 2: Умножение двух чисел
// Описание: Создайте каррированную функцию, которая умножает два числа.

// function currying (numberOne) {
//     return function (numberTwo) {
//         return numberOne * numberTwo
//     }
// }
// console.log(currying(5)(4))

// function currying (a) {
//     return function (b) {
//         return a * b
//     }
// }
// const numOne = currying(5)
// const numTwo = numOne(4)
// console.log(numTwo)

// Задача 3: Конкатенация строк
// Описание: Реализуйте каррированную функцию, которая объединяет две строки.

// function concatenate (strOne) {
//     return function (strTwo) {
//         return function (strThree) {
//             return strOne + strTwo + strThree
//         }
//     }
// }
// console.log(concatenate('Кон')('кате')('нация'))

// const concatenate = (textOne) => (textTwo) => (textThree)  => {
//     return textOne + textTwo + textThree
// }
// const strOne = concatenate('Кон')
// const strTwo = strOne('кате')
// const strThree = strTwo('нация')
// console.log(strThree)

// const concatenate = (str1) => (str2) => str1 + str2;
// const greet = concatenate("Hello, ");
// console.log(greet("world!")); // "Hello, world!"

// Задача 6: Фильтрация массива
// Описание: Напишите каррированную функцию, которая фильтрует массив по заданному условию.

// function curry (a) {
//     return function () {
//         return a.filter(el => {
//             return el % 2 === 0
//         })
//     }
// }
// const res = curry([1,2,3,4,5,6,7,8,9,10])
// const resTwo = res()
// console.log(resTwo)

// function curry (a) {
//     return a.filter(el => {
//         return el % 2 === 0
//     })
// }
// const res = curry([1,2,3,4,5,6,7,8,9,10])
// console.log(res)

// Задача 7: Создание объекта
// Описание: Реализуйте каррированную функцию, которая создает объект с заданными свойствами.

// function curry (key) {
//     return function (meaning) {
//         return `${key}: ${meaning}`
//     }
// }
// const one = curry('name')
// const two = one ('Carlos')
// console.log(two)
//
// const three = curry('age')
// const four = three ('30')
// console.log(four)
//
// const five = curry('profession')
// const six = five('race driver')
// console.log(six)


// function curryeidObject (obj) {
//     return function () {
//         return obj
//     }
// }
// const res = curryeidObject({name: 'Samat', age: 21, job: 'bulder'});
// const resTwo = res()
// console.log(resTwo)

// function curryiedObject (obj) {
//     return obj
// }
// const res = curryiedObject({name: 'Charles', age: 21, job: 'driver'});
// console.log(res)


// function createObject(key) {
//     return function(value) {
//         const obj = {};
//         obj[key] = value;
//         return obj;
//     };
// }
//
// // Использование:
// const createName = createObject('name');
// const user = createName('Alice');
// console.log(user); // { name: 'Alice' }


// function curryiedObj (key) {
//    return function (value) {
//         const obj = {}
//        obj[key] = value;
//         return obj;
//     }
// }
//
// const res = curryiedObj('name')
// const result = res('Alice')
// console.log(result)

// Замыкание (closure)

// Замыкание в JavaScript - это возможность функции "помнить" переменные из своей внешней функции,
// даже когда внешняя функция уже завершила работу.|
// Пример для понимания:
// Представьте, что у вас есть коробка (внешняя функция), в которой есть игрушка (переменная) .
// Когда вы закрываете коробку, игрушка всё равно остаётся внутри.
// Даже если вы больше не можете видеть коробку, вы всё ещё можете достать игрушку,
// когда открываете её снова (вызов внутренней функции) .

// function closure () {
//     let name = 'Lando'
//     function displayName () {
//         console.log(name)
//     }
//     displayName()
// }
// closure()

// function makeFunc () {
//     let name = 'Mozilla'
//     function displayName () {
//         console.log(name)
//     }
//     return displayName
// }
// let myFunc = makeFunc()
// myFunc()

// function makeFunc () {
//     let name = 'Norris'
//     function displayName () {
//         console.log(name)
//     }
//     return displayName
// }
// let res = makeFunc()
// res()

// function closure () {
//     const name = 'Bish'
//     return function (nameTwo) {
//         return name + nameTwo
//     }
// }
// const result = closure ()
// console.log(result('kek'))

// function task (a) {
//     return function (b) {
//         return a + b
//     }
// }
// const numOne = task(4)
// console.log(numOne(3))

// Карринг

// function task (a) {
//     return function (b) {
//         return a + b
//     }
// }
// const numOne = task(7)
// const numTwo = numOne(5)
// console.log(numTwo)

// function closure (x) {
//     return function (y) {
//         return x + y
//     }
// }
// let num = closure(5)
// let res = closure(7)
//
// console.log(num(8))   // 13
// console.log(res(9))   // 16

// function closureFunc (x) {
//     return function (y) {
//         return x + y
//     }
// }
// const num = closureFunc(4)
// console.log(num(7))

// function closureText (textOne) {
//     return function (textTwo) {
//         return `${textOne}: ${textTwo}`
//     }
// }
// const res = closureText('Hello')
// console.log(res('Russell'))

// function textFunc () {
//     let textOne = 'Bish'
//     return function (textTwo) {
//         return textOne + textTwo
//     }
// }
// const res = textFunc()
// console.log(res('kek'))

// Цыклы for (), while(), do while {}

// Цыкл - бул кайталанып кете берчу нерселер.
// Мисалы: бир нерсенин циклы, сааттын жылышы, 4 мезгил, убакыттын,
// минуттун, саат, жума, ай, жылдардын отушу, жашонун циклы.
// Циклдын for(), while(), do() while{} деген турлору бар.
// Кобунчо for() колдонулат.
// Мисалы: цикл менен бизге html ден 4 блок керек болгон учурда 4 див ачабыз.
// Ал эми цикл менен 1 див ачып аны 4 ко кобойтуп коюу деп тушунсок болот.
// Башкача айтканда 1 эле эелемент менен озубуз каалаганча кобойтуп алсак болот.
// for дун ичине переменный ачылат. Let переменныйы for(let i = 0; i < 10; i++)
// i - index тин кыскартышы. ++ - (инкремент). Бирден кошулуп кете бериши учун.
// i - индекс менен санап берет. Чон же барабар кылсак (<=) биз корсоткон жерге чейин,
// цифрага чейин чыгарып берет. Мисалы: 10 го чейин, эгерде 10 го чейин жазаган болсок. (0-10)
// Цыклдер бир нерсени бир нече  жолу жасоонун жонокой жолу.
// Цыклдердин ар кандай турлору бар, бирок алардын бардыгы бир эле нерсени аткарышат:
// алар кандайдыр бир аракетти бир нече жолу кайталашат.

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i <= 30; i++) {
//     console.log(i)
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let i = 10; i <= 15; i++) {
//     console.log(i)
// }

// break - останавливает (токтотуп берет)

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log(i)
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 6) {
//         break
//     }
//     console.log(arr[i])
// }

//

// continue - игнорирует функцию. секирип аттап кетет.

// for (let i = 0; i <= 10; i++) {
//     if (i === 6) {
//         continue
//     }
//     console.log(i)
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         continue
//     }
//     console.log(arr[i])
// }

//

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// let result = 0
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         result += i
//     }
// }
// console.log(result)   // четные числа

// let result = 0
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         result += i
//     }
// }
// console.log(result)   // нечетные числа

// let result = 0
// for (let i = 0; i <= 10; i++) {
//     result *= i
// }
// console.log(result)

// let result = 1
// for (let i = 1; i <= 10; i++) {
//     result *= i
// }
// console.log(result)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let result = 1
// for (let i = 0; i < arr.length; i++) {
//     result *= arr[i]
// }
// console.log(result)

// for (let i = 0; i <= 10; i++) {
//     console.log(i + i)
// }

// while() - while оператору текшерилип жаткан шарт чын болсо,
// берилген буйрукту аткарган циклды тузот.
// Шарттын логикалык мааниси цикл денеси (тело) аткарылганга чейин бааланат.
// Логикалык мааниси циклге кируунун алдында ар бир жолу текшерилип турган туюнтма.
// Эгерде маани чын болсо, анда инструкция аткарылат.
// Маани жалган болгондо, while циклинен кийинки код аткарылат.
// Шарт туура болгон сайын аткарылуучу корсотмо. Циклде бир нече операторду аткаруу учун,
// аларды топтоо учун блок операторун ({ ... }) колдонобуз.

// let i = 0
// while (i < 5) {     // выводит 0, затем 1, затем 2
//     console.log(i)
//     i++
// }

// let i = 0
// while (i < 7) {
//     console.log(i)
//     i++
// }

// do() while() - do...while оператору шарт жалган деп бааланганга
// чейин корсотулгон туюнтманы аткарган цикди тузот.
// Шарт туюнтма аткарылгандан кийин текшерилет, демек,
// соз айкашы жок дегенже бир жолу аткарылат.
// Жок дегенде бир жолу аткарылуучу жана шарт чын болсо,
// циклдин ар бир кадамында аткарылуучу туюнтма. Туюнтма бир нече саптарды камтышы мумкун,
// бул учун сиз кодду блокко топтошунуз керек ({ ... }).
// Циклдин ар бир кадамынан кийин бааланган туюнтма. Эгерде шарт болсо, анда
// туюнтма кайра аткарылат. Шарт жалган болгондо, томонку туюнтма do...while аткарылат.

// let i = 6
// do {
//     console.log(i)
//     i++
// } while (i < 8)

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 6)


// 1. Выведите столбец чисел от 1 до 50.

// for (let i = 1; i <= 50; i++) {
//     console.log(i)
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push('x')
// }
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.

// let arr = [5, 3, 1, 2, 7]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.

// let arr = [5, 2, 1, 2]
// let result = 1
// for (let i = 0; i < 4; i++) {
//     result *= arr[i]
// }
// console.log(result)

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         continue
//     } else (
//         console.log(i)
//     )
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let result = 0
// for (let i = 1; i <= 100; i++) {
//     result += i
// }
// console.log(result)

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.

// let arr = [2, 4, 5, 6, 8]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result)

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран
// столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [3, 4, 6, 12, 3, 5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму
// положительных элементов массива.

// let arr = [3, -7, 2, -4, 9, -10, 17, -44]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         result += arr[i]
//     }
// }
// console.log(result)

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и
// выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [5, 1, 3, 7, 6, 4, 15, 3, 20]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         console.log('Есть!')
//     } else (
//         console.log(arr[i])
//     )
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива,
// которые начинаются на цифру 1, 2 или 5.

// const arr = [10, 20, 30, 40, 135, 2000]
// for (let i = 0; i < arr.length; i++) {
//     const result = arr[i].toString()
//     if (result.startsWith('1') || result.startsWith('2') || result.startsWith('5')) {
//         console.log(arr[i])
//     }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте
// строку '-1-2-3-4-5-6-7-8-9-'.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = '-'
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] + '-'
// }
// console.log(result)

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.

// let n = 1000
// for (let i = 1; n >= 50; i++) {
//     n /= 2
// }
// console.log(n)

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов,
// делить на количество).

// let arr = [1, 2, 3, 7, 6, 9]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result / arr.length)

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1, 2, 3, 4, 5]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     result += Math.pow(arr[i], 2)
// }
// console.log(result)

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только
// те элементы массива, которые больше нуля и меньше 10-ти.

// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// let arr = []
// for (let i = 1; i <= 10; i++) {
//     const randomNumbers = Math.floor(Math.random() * 10)
//     arr.push(randomNumbers)
// }
// console.log(arr)

// const arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] ** 2; // Возводим элемент в квадрат и добавляем к сумме
// }
//
// console.log(result); // Выводит 55

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// let result = 0
// for (let i = 0; i <= 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         result += i
//     }
// }
// console.log(result)

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл,
// который выводит нечетные числа, которые больше 10.

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] > 10) {
//         console.log(arr[i]);
//     }
// }

// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// let str = 'jzvzszrzpz'
// let result = ''
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 !== 0) {
//         result += str[i].toUpperCase()
//     } else {
//         result += str[i].toLowerCase()
//     }
// }
// console.log(result)

