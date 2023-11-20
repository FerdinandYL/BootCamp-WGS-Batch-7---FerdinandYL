const fs = require('fs').promises;

const FILE_PATH = './data/contacts.json';
let contacts = [];

async function getContacts() {
    try {
        await checkFile();
        return contacts;
    } catch (error) {
        console.error('Error getting contacts:', error);
        throw error;
    }
}

function createContact(nama, telepon, email) {
    const contact = { 'nama': nama, 'telepon': telepon, 'email': email };
    return contact;
}

async function addContact(contact) {
    try {
        await checkFile();
        contacts.push(contact);
        await saveContacts();
    } catch (error) {
        console.error('Error adding contact:', error);
        throw error;
    }
}

async function deleteContact(id) {
    try {
        await checkFile();
        contacts.splice(id, 1);
        await saveContacts();
    } catch (error) {
        console.error('Error deleting contact:', error);
        throw error;
    }
}

async function updateContact(id, updatedContact) {
    try {
        await checkFile();
        contacts.splice(id, 1, updatedContact);
        await saveContacts();
    } catch (error) {
        console.error('Error updating contact:', error);
        throw error;
    }
}

async function checkFile() {
    try {
        await fs.mkdir('data', { recursive: true });
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        contacts = JSON.parse(data);
    } catch (error) {
        console.error('Error checking file:', error);
        throw error;
    }
}

async function saveContacts() {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(contacts), 'utf-8');
    } catch (error) {
        console.error('Error saving contacts:', error);
        throw error;
    }
}

module.exports = {
    getContacts,
    createContact,
    addContact,
    deleteContact,
    updateContact
};