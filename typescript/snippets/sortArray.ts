const arr = [2,1,3];

// Sorts the array in place
arr.sort((a, b) => a - b);

console.log(arr);

const num1 = 2;

const sum = (num2: number) => num1 + num2;

console.log(sum(3));

interface Person {
    name: string;
    age?: number;
}

const person: Person = {
    name: 'John',
    age: 31
};

const person2 = {
    name: 'Caca',
} satisfies Person;


const mergePersons = {
    ...person,
    ...person2
};

console.log(mergePersons);