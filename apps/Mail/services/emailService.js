import { utilService } from './utilService.js'
import { storageService } from './storageService.js'

const KEY = 'emailsDB';
export const emailService = {
    query,
    remove,
    getById,
    save
}

var gEmails;
_createEmails();

function _createEmails() {
    // Try loading from localStorage
    gEmails = storageService.load(KEY);
    if (!gEmails || !gEmails.length) {
        // Nothing in localStorage, use demo data
        gEmails = _getDemoEmails()
        _saveEmailsToStorage();
    }
}

function query() {
    return Promise.resolve(gEmails);
}

function save(email) {
    if (email.id) {
        _update(email)
    } else {
        _add(email)
    }
}

function _add(email) {
    const emailToAdd = {
        id: utilService.makeId(),
        ...email
    };
    gEmails = [emailToAdd, ...gEmails]
    return Promise.resolve(emailToAdd);

    // const emailsCopy = [...gEmails];
    // const emailIdx = emailCopy.findIndex(email => email.id === email.id);
    // emailsCopy[emailIdx] = emailToUpdate;
    // gEmails = emailsCopy;
    // _saveEmailsToStorage();
    // return Promise.resolve(emailToUpdate);
}

function _update(email) {
    const emailToUpdate = {
        ...email
    }
    const emailsCopy = [...gEmails]
    const emailIdx = emailsCopy.findIndex(email => email.id === email.id)
    emailsCopy[emailIdx] = emailToUpdate;

    gEmails = emailsCopy;
    _saveEmailsToStorage();
    return Promise.resolve(emailToUpdate);
}

function remove(emailId) {
    gEmails = gEmails.filter(email => email.id !== emailId);
    _saveEmailsToStorage();
    return Promise.resolve();
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function _saveEmailsToStorage() {
    storageService.save(KEY, gEmails)
}

function _getDemoEmails() {
    const emails = [
        { id: 'i101', recipient: 'Dudi', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
        { id: 'i102', recipient: 'Mudi', subject: 'How r u?', body: 'Hi there', isRead: false, sentAt: 1551133930694 },
        { id: 'i103', recipient: 'Rudi', subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt: 1551133930794 }
    ]
    return emails
}