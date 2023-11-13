const fs = require('fs');
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const validator = require('validator');

const FILE_PATH = './Data/contacts.json'

let nama;
let nomor;
let alamatEmail;
let contacts = [];
checkFile();

async function main(){
    // Input Proses
    nama = await pertanyaan("Siapa nama kamu? ");
    do{
        nomor = await pertanyaan("Apa nomor telepon kamu? ");
        if(!validator.isMobilePhone(nomor,'id-ID')){console.log(`${nomor} bukan nomor telepon!`);console.log('');}
    }while(!validator.isMobilePhone(nomor,'id-ID'));
    do{
        alamatEmail = await pertanyaan("Apa alamat email kamu? ");
        if(!validator.isEmail(alamatEmail)){console.log(`${alamatEmail} bukan alamat email!`); console.log('');}
    }while(!validator.isEmail(alamatEmail));
    rl.close();
    
    //Saving data process
    let contact = {nama:nama, nomor:nomor, email:alamatEmail}; // Variabel untuk menyimpan data kontak. Akan di-assign pada getEmail() setelah mendapat semua data.
    contacts.push(contact);
    saveContact();
}
main();

function pertanyaan(ask){
    return new Promise((resolve, reject)=>{
        rl.question(ask, (input)=>{
            resolve(input);
        })
    });
}

function checkFile() {
    // Cek direktori apakah ada? Kalau tidak, buat folder.
    if (!fs.existsSync('Data')) {fs.mkdirSync('Data');}
    // Cek file apakah ada? Kalau tidak, buat file. Kalau ada, read file tersebut.
    if (!fs.existsSync(FILE_PATH)) {fs.writeFileSync(FILE_PATH, '[]', 'utf-8');} 
    else {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        contacts = JSON.parse(data);
    }
}

function saveContact() {
    fs.writeFile(FILE_PATH, JSON.stringify(contacts), 'utf-8', (err) => {
        if (err) {console.error('Terjadi kesalahan dalam menyimpan kontak:', err);}
        else {console.log('Kontak berhasil disimpan.');}
    });
}