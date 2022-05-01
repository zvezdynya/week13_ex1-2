let name = prompt(`Как тебя зовут?`);
alert(`Привет, ${name}!`);

function sum() {
        let a = prompt("Первое слагаемое:", ""),
            b = prompt("Второе слагаемое:", "");
        return +a + +b;
}

function sub() {
    let a = prompt("Введи уменьшаемое:", ""),
        b = prompt("Введи вычитаемое:", "");
    return a - b;
}

function multi() {
    let a = prompt("Введи множимое:", ""),
        b = prompt("Второе множитель:", "");
    return a * b;
}

function divied() {
    let a = prompt("Введи делимое:", ""),
        b = prompt("Введи делитель:", "");
    return a / b;
}