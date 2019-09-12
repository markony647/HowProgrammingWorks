'use strict';

const user = {
    name: 'John'
};

let user2 = {
    name: 'Smith'
};

user.name = 'Vit';
user2.name = 'Her';

const anotherUser = {
    name: 'Sven'
};

user2 = anotherUser;

console.log(user);
console.log(user2);

const createUser = (name, city) => {
    const obj = {
        name,
        city
    };
    return obj;
};

createUser('Vit', 'Che');

const telephoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Fldfs Jfe', phone: '+3811111111' }
];

function findPhoneByName(name) {
    for (const person of telephoneBook) {
        if (person.name === name) {
            return person.phone;
        }
    }
    console.log('Did not find');
}

console.log(telephoneBook);
console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Marcus'));


let phonesHash = {
    'Marcus Aurelius': '+3811111111',
    'Fldfs Jfe': '380445554433'
};

console.log(typeof map);

console.log(typeof(phonesHash));

const findPhone = name => {
    return phonesHash[name];
}

console.log(findPhone('Fldfs Jfe'));