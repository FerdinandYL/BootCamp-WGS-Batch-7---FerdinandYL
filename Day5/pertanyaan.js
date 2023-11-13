const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const pertanyaan = (ask) => {
    return new Promise((resolve, reject)=>{
        rl.question(ask, (input)=>{
            resolve(input);
        })
    });
}

const closeRL = () => {rl.close();}

module.exports = pertanyaan;