const fs = require('fs');
const validator = require('validator');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let nama = ''; // Variabel untuk menyimpan nama pengguna
let nomor = ''; // Variabel untuk menyimpan nomor telepon pengguna

console.log(``);
readline.question("Siapa nama kamu? ", name => {
    nama = name; // Menyimpan nama yang dimasukkan oleh pengguna
    getMobilePhone(); // Memanggil fungsi untuk meminta nomor telepon
});

function pertanyaan(pertanyaan, callback){
    readline.question(pertanyaan, callback);
}

function getMobilePhone(){
    pertanyaan("Masukkan nomor telephone : ", (telepon)=>{
        if(validator.isMobilePhone(telepon, 'id-ID')){
            nomor = telepon; // Menyimpan nomor telepon jika valid
            getEmail(); // Memanggil fungsi untuk meminta alamat email
        } else {
            console.log(`${telepon} bukanlah nomor telepon!`);
            console.log(``);
            getMobilePhone(); // Jika nomor telepon tidak valid, memanggil ulang fungsi untuk meminta telepon
        }
    });
}

function getEmail(){
    pertanyaan("Masukkan email : ", (email)=>{
        if(validator.isEmail(email)){
            console.log(``);
            console.log(`Nama : ${nama}`);
            console.log(`Telepon : ${nomor}`);
            console.log(`Email : ${email}`);
            console.log(``);
            readline.close(); // Menutup interface readline setelah selesai
        } else {
            console.log(`${email} bukanlah email!`);
            console.log(``);
            getEmail(); // Jika email tidak valid, memanggil ulang fungsi untuk meminta email.
        }
    });
}