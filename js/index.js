
//Task 1 Создайте объект ноутбука 

//====1====>

const noteBook1 = {
    serialNumber: '3V5E7EA',
    model: 'HP 255 G8',
    display: {
        matrixType: 'IPS',
        screenResolution: [1920, 1080],
    },
    processor: {
        cores: '8/16',
        name: 'AMD Ryzen 7 5700U',
        frequency: '1.8 - 4.3 ГГц',
    },
    ram: {
        total: '8 Gb',
        type: 'DDR4',
    },
    storage:{
        hdd: NaN,
        sdd: '256 Gb',
    },
    graphics: 'AMD Radeon Graphics',
    frame:{
        color: 'Серебристый',
        weight: '1,7',
        dimensions: '(Ш х Г х В) 358 x 242 x 19'
    }
}
console.log(noteBook1);

//Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля.
//Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)

//====2====>
class CreatUser{
    constructor(login, pass){
        this.login = login;
        this.pass = pass;
    }
}

let user1, user2, user3, user4;

const users = [
    user1 = new CreatUser('Gelekopter', 'Ratatata666'),
    user2 = new CreatUser('Azik', 'Quatero'),
    user3 = new CreatUser('Yur1yBeLLa', 'DRAGsrter'),
    user4 = new CreatUser('CrazyShket', 'lol9999')
]

console.log(users);

//Task 3 Из полученого массива в задании 2 сделайте карту (map).
//в качестве ключа используйте логин

//====3====>

const usersMap = new Map();
users.forEach(element => usersMap.set(element.login, element));
console.log(usersMap);

//Task 4* разными способами решите вопрос соединения двух массивов без повторов

//====4====>

const array1 = [user1, user2], array2 = [user3, user4];

//====4.1====>

const unitedArray1 = array1.concat(array2);
console.log(unitedArray1);

//====4.2====>
const unitedArray2 = [...array1,...array2];
console.log(unitedArray2);

