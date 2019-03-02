// print out a bunch of names


// const firstName = 'Zoe';
// const lastName = "Ames"
// //console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

// const firstName1 = 'Britney';
// const lastName1 = 'Spears';

// console.log(`${firstName1} ${lastName1}`)

// const firstName2 = 'Tori';
// const lastName2 = 'Amos';

// console.log(`${firstName2} ${lastName2}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');





const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('pig'));

// dogBreed funtion 
// 1. input will be a string "border collie"
// output = favorite dog breed is border collie

const dogBreed = (dog) => {
    return `My favorite dog breed is a ${dog}`;
};

console.log(dogBreed('Border Collie'));
console.log(dogBreed('Lab'));