function pertanyaan(question, callback) {
    const { stdin, stdout } = require('process');
    const rl = require('readline').createInterface({ input: stdin, output: stdout });

    rl.question(question, (input) => {
        rl.close();
        callback(input);
    });
}

pertanyaan("Siapa kamu?", (nama) => {
    pertanyaan("Nomor kamu?", (nomor) => {
        // Print the results after both inputs are done
        console.log('Nama:', nama);
        console.log('Nomor:', nomor);
    });
});