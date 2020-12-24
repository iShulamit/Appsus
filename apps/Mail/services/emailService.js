import { utilService } from './utilService.js'
// import { storageService } from './storageService.js'

export const emailService = {
    query,
    remove,
    getById,
    save
}

var emails = [
    { id: 'i101', recipient: 'Dudi', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: 'i102', recipient: 'Mudi', subject: 'How r u?', body: 'Hi there', isRead: false, sentAt: 1551133930694 },
    { id: 'i103', recipient: 'Rudi', subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt: 1551133930794 }
]

function query() {
    return emails;
    //return Promise.resolve(emails)
}

function save(email){
    if (email.id) {
        _update(email)
    } else {
        _add(email)
    }
}

function _add(email) {
    const emailToAdd = {
        ...email,
        id: utilService.makeId()

    };
    emails = [emailToAdd, ...emails]
    return emailToAdd;
    // const emailsCopy = [...gEmails];
    // const emailIdx = emailCopy.findIndex(email => email.id === email.id);
    // emailsCopy[emailIdx] = emailToUpdate;
    // gEmails = emailsCopy;
    // _saveEmailsToStorage();
    // return Promise.resolve(emailToUpdate);
}

function _update (emailToSave) {
    const emailsCopy = [...emails]
    const emailIndex = emails.findIndex(email=>email.id ===emailToSave.id)
    emailsCopy[emailIndex] = emailToSave;

    emails = emailsCopy;
}

function remove(emailId) {
    emails = emails.filter(email => email.id !== emailId);
}

function getById(emailId) {
    return emails.find(email => email.id === emailId)
}

// function _getDemoEmails() {
//     const emails = [
//         {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
//         {subject: 'Hoe r u?', body: 'Hi there', isRead: false, sentAt : 1551133930694},
//         {subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt : 1551133930794}
//     ]
//     return emails;
// }