const pertanyaan = require("./pertanyaan")
const fs = require('fs');
const validator = require('validator');
const path = './Data/contacts.json';

let contacts = []; // Variabel untuk menyimpan kontak yang akan di load oleh checkFile()
checkFile(); // Membuat file baru apabila error. Mempopulasi contacts apabila ditemukan file.

async function main(){
    let nama = await pertanyaan("Siapa nama kamu?"); // Variabel untuk menyimpan nama pengguna
    let nomor = await pertanyaan("Apa nomor telepon kamu?"); // Variabel untuk menyimpan nomor telepon pengguna
    let alamatEmail = await pertanyaan("Apa alamat email kamu?"); // Variabel untuk menyimpan alamat email pengguna
    let contact = {nama:nama, nomor:nomor, email:alamatEmail}; // Variabel untuk menyimpan data kontak. Akan di-assign pada getEmail() setelah mendapat semua data.
    console.log(contact);
}

main();

// console.log(``);
// readline.question("Siapa nama kamu? ", name => {
//     nama = name; // Menyimpan nama yang dimasukkan oleh pengguna
//     getMobilePhone(); // Memanggil fungsi untuk meminta nomor telepon
// });

// function pertanyaan(pertanyaan, callback){
//     readline.question(pertanyaan, callback);
// }

// function getMobilePhone(){
//     pertanyaan("Masukkan nomor telephone : ", (telepon)=>{
//         if(validator.isMobilePhone(telepon, 'id-ID')){
//             nomor = telepon; // Menyimpan nomor telepon jika valid
//             getEmail(); // Memanggil fungsi untuk meminta alamat email
//         } else {
//             console.log(`${telepon} bukanlah nomor telepon!`);
//             console.log(``);
//             getMobilePhone(); // Jika nomor telepon tidak valid, memanggil ulang fungsi untuk meminta telepon
//         }
//     });
// }

// function getEmail(){
//     pertanyaan("Masukkan email : ", (email)=>{
//         if(validator.isEmail(email)){
//             alamatEmail = email;
//             contact = { nama: nama, nomor: nomor, email: alamatEmail }; // Mengassign value pada contact
//             contacts.push(contact); // Menambahkan kontak baru pada contacts
//             console.log(``);
//             console.log(`Nama : ${nama}`);
//             console.log(`Telepon : ${nomor}`);
//             console.log(`Email : ${email}`);
//             console.log(``);
//             saveContact(); // Save the contact after updating the contacts array
//             readline.close(); // Menutup interface readline setelah selesai
//         } else {
//             console.log(`${email} bukanlah email!`);
//             console.log(``);
//             getEmail(); // Jika email tidak valid, memanggil ulang fungsi untuk meminta email.
//         }
//     });
// }

function checkFile() {
    fs.stat(path, (err, data) => {
        if (err) {
            fs.mkdirSync(path);
            fs.writeFileSync(path, '[]', 'utf-8'); // Membuat file kosong berisi array apabila file pada path tidak ditemukan.
        } else {
            fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                    console.error('Terjadi kesalahan saat membuka file:', err);
                } else {
                    contacts = JSON.parse(data);
                }
            });
        }
    });
}

function saveContact() {
    fs.writeFile(path, JSON.stringify(contacts), 'utf-8', (err) => {
        if (err) {
            console.error('Terjadi kesalahan dalam menyimpan kontak:', err);
        } else {
            console.log('Kontak berhasil disimpan.');
        }
    });
}