const fs = require('fs');

const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

console.log(``);
readline.question("Siapa nama kamu? ", name => {
    console.log(`Nama kamu adalah ${name}!`);
    console.log(``);
    readline.question("Nomor telepon? ", telepon => {
        console.log(`Nomor kamu adalah ${telepon}!`);
        console.log(``);
        readline.question("Email? ", email => {
            console.log(`Email kamu adalah ${email}!`);
            console.log(``);
            readline.close();
        });
    });
});
