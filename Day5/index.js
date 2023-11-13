const validator = require('validator');
const yargs = require('yargs');
const { checkFile, saveContact, getContacts } = require('./services');

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
        async (argv)=>{
            await checkFile();
            const contacts = getContacts();
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
        async ()=>{
            await checkFile();
            const contacts = getContacts();
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
        async (argv)=>{
            await checkFile();
            let contacts = getContacts();
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