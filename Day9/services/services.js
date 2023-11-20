const fs = require('fs');

const FILE_PATH = './data/contacts.json';
let contacts = [];

function getContacts() {
    checkFile()
    return contacts;
}

function createContact(nama, telepon, email) {
    const contact = { 'nama': nama, 'telepon': telepon, 'email': email };
    return contact;
}

async function addContact(contact) {
    await checkFile();
    contacts.push(contact);
    await saveContacts();
}

async function deleteContact(id) {
    await checkFile();
    contacts.splice(id, 1);
    await saveContacts();
}

async function updateContact(id, updatedContact) {
    await checkFile();
    contacts.splice(id, 1, updatedContact);
    await saveContacts();
}

async function checkFile() {
    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, '[]', 'utf-8');
    } else {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        contacts = JSON.parse(data);
    }
}

function saveContacts() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(contacts), 'utf-8', (err) => {
        if (err) {
            console.error('Terjadi kesalahan dalam menyimpan kontak:', err);
        }
    });
}

module.exports = {
    getContacts,
    createContact,
    addContact,
    deleteContact,
    updateContact
};