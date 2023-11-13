const fs = require('fs');
const validator = require('validator');
const yargs = require('yargs');

const FILE_PATH = './Data/contacts.json'

let contacts = [];
checkFile();

const argv = yargs
    .option(
        'nama', {
        alias: 'n',
        describe: 'Nama anda',
        demandOption: true,
        type: 'string'
    })
    .option(
        'telepon', {
        alias: 't',
        describe: 'Nomor Telepon anda',
        demandOption: true,
        type: 'string'
    })
    .option(
        'email', {
        alias: 'e',
        describe: 'Alamat email anda',
        type: 'string'
    }).help().alias('help', 'h').argv;

cli();

function cli(){
    if(!validator.isMobilePhone(argv.telepon,'id-ID')){
        console.log("Nomor yang dimasukkan bukanlah nomor telepon!!!");
        console.log("Proses penyimpanan gagal!");
    } else {
        let contact = {'nama':argv.nama,'telepon':argv.telepon,'email':argv.email};
        contacts.push(contact);
        saveContact();
        console.log('kontak berhasil disimpan!');
    }
    process.exit();
}

async function checkFile() {
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
    fs.writeFileSync(FILE_PATH, JSON.stringify(contacts), 'utf-8', (err) => {
        if (err) {console.error('Terjadi kesalahan dalam menyimpan kontak:', err);}
        else {console.log('Kontak berhasil disimpan.');}
    });
}