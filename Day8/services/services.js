const fs = require('fs');

const FILE_PATH = './data/contacts.json';
let contacts = [];

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

function saveContact() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(contacts), 'utf-8', (err) => {
        if (err) {
            console.error('Terjadi kesalahan dalam menyimpan kontak:', err);
        }
    });
}

function getContacts() {
    return contacts;
}
function setContacts(newContacts){
    contacts = newContacts;
}

module.exports = {
    checkFile,
    saveContact,
    getContacts,
    setContacts
};
