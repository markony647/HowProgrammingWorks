const user = {
    name: 'John'
};

let user2 = {
    name: 'Smith'
};

user.name = 'Vit';
user2.name = 'Her';

let anotherUser = {
    name: 'Sven'
};

user2 = anotherUser;

console.log(user);
console.log(user2);

let createUser = (name, city) => {
    let obj = {
        name: name,
        city, city
    };
    return obj;
};

createUser('Vit', 'Che');

let telephoneBook = [ 
    {name: 'Marcus Aurelius', phone: '+380445554433'}, 
    {name: 'Fldfs Jfe', phone: '+3811111111'} 
];

function findPhoneByName(name) {
    for (person of telephoneBook) {
        if (person.name === name) {
            return person.phone;
        }
    }
    console.log('Did not find');
}


console.log(telephoneBook);
console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Marcus'));

