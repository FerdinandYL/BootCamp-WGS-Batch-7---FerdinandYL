const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const validator = require('validator');

const pertanyaan = async (ask) => {
    return new Promise((resolve, reject)=>{
        rl.question(ask, (input)=>{
            resolve(input);
        })
    });
}

module.exports = pertanyaan;