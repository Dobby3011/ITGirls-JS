//Расчет времени для туриста из Пскова 
let time;
time = 34;
console.log('Старт поездки. Осталось минут: ' + time);
time1 = time - 15;
console.log('Немного сторис в соцсетях. Осталось минут: ' + time1);
time2 = time1 - 10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time2);
time = 0;
console.log('Вы приехали. Добро пожаловать в Москву');

//Депозит
let deposit;
deposit = 30000;
rub = "руб."
console.log('Ваш депозит на начало расчётного периода составлял ' + deposit + rub);
const ante = 18.5;
console.log('Согласно вашему тарифу, вам была присвоена ставка ' + ante + '%.');
profit = 150;
deposit1 = deposit + profit;
console.log('К концу расчётного периода прирост составил ' + profit + rub + ', и на данный момент ваш депозит cоставляет ' + deposit1 + rub);


//Расчет вклада под 7%. Не могу найти ошибку, выводит 0 в итоге.

const rubl = "руб.";
const money = document.getElementById("#money");
const procent = 7;

let itog = Number(money);
itog = itog + itog * (procent / 100);
let a = document.getElementById("s").value = ("Через год у вас будет " + itog + rubl + " на счету.");

function f() {
    document.getElementById("s").innerHTML = a;
}

//Это расчет вклада для вывода в консоль 

/*let vklad = prompt('Введите размер вклада в рублях');
let procent = prompt('Введите размер процента');
let srok = prompt('Введите срок в месяцах');
let itog = Number(vklad); // перевод в число
rub = "руб."

for (n = 1; n <= srok; n++) {
    itog = itog + itog * (procent / 100 / 12);
    itog = Math.round(itog); // округление до целого
    console.log('Месяц ' + n + ': ' + itog + rub);
}

console.log('Через ' + srok + ' месяцев прибыль составит ' + (itog - vklad) + rub);*/






