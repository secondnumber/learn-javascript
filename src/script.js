let userName = prompt('Ваше имя?', 'Name');
alert(userName);

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);