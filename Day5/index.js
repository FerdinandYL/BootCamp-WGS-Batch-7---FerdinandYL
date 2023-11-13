const fs = require('fs');
const validator = require('validator');
const yargs = require('yargs');

const FILE_PATH = './Data/contacts.json'
let contacts = [];

const argv = yargs
    .command(
        'add', 
        'Menambahkan data kontak baru', 
        {
            nama:{
                alias: 'n',
                describe: 'Nama anda',
                demandOption: true,
                type: 'string'
            },
            telepon:{
                alias: 't',
                describe: 'Nomor Telepon anda',
                demandOption: true,
                type: 'string'
            },
            email: {
                alias: 'e',
                describe: 'Alamat email anda',
                type: 'string'
            }
        }, 
        (argv)=>{
            checkFile();
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
    })
    .command(
        'list',
        'Melihat seluruh kontak', {},
        ()=>{
            checkFile();
            contacts.forEach(element => {
                console.log(`nama : ${element.nama}, telepon : ${element.telepon}`);
            });
            process.exit();
    })
    .command(
        'detail',
        'Melihat detail kontak berdasarkan nama pada arg -n',
        {
            nama:{
                alias: 'n',
                describe: 'Nama anda',
                demandOption: true,
                type: 'string'
            }
        },
        (argv)=>{
            checkFile();
            let index = contacts.findIndex(contact => contact.nama == argv.nama);
            if(index == -1){
                console.log(`Data tidak ditemukan`);
            } else {
                console.log(`nama    : ${contacts[index].nama}`);
                console.log(`telepon : ${contacts[index].telepon}`);
                console.log(`email   : ${contacts[index].email}`);
            }
            process.exit();
    }).help().alias('help', 'h').argv;

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
    });
}