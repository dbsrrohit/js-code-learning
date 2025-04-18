const myObject = {
    js: 'JavaScript',
    php: 'PHP',
    css: 'CSS',
    html: 'HTML',
    python: 'Python',
    ruby: 'Ruby',
}

for (const key in myObject) {
//    console.log(`${key}: ${myObject[key]}`);
}

const programmingLanguages = ['JavaScript', 'PHP', 'CSS', 'HTML', 'Python', 'Ruby'];
for (const language in programmingLanguages) {
 //   console.log(programmingLanguages[language]);
}

// Maps are iterable, but the for...in loop is not the best way to iterate over them.
const map = new Map()
map.set('js', 'JavaScript');
map.set('php', 'PHP');
map.set('css', 'CSS');
map.set('html', 'HTML');
map.set('python', 'Python');

// for (const key in map) {
//     console.log(`these are the values in ${key}: ${map[key]}`);
// }

for (const [key, value] of map) {
    // console.log(`these are the values in ${key}: ${value}`);
}

const coding = ["js", "php", "css", "html", "python"];

coding.forEach( (value, index, arr) => {
    // console.log(`these are the values in ${index}: ${value} of [ ${arr} ]`);
}
);

function printme(item,) {
    // console.log(`these are the values in ${item}`);
}
coding.forEach(printme);

const myCodeing = [
    {
        name: 'JavaScript',
        type: 'scripting language',
        year: 1995,
    },
    {
        name: 'PHP',
        type: 'scripting language',
        year: 1994,
    },
    {
        name: 'Python',
        type: 'programming language',
        year: 1991,
    },
]

myCodeing.forEach((item, index) => {
     console.log(`This ${item.type} was called ${item.name} and was created in ${item.year}`);
}
);

