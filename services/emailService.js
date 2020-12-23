import { utilService } from './utilService.js'
// import { storageService } from './storageService.js'

export const emailService = {
    query,
    add
}

var emails = [
    { id: 'i101', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: 'i102', subject: 'Hoe r u?', body: 'Hi there', isRead: false, sentAt: 1551133930694 },
    { id: 'i103',  subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt: 1551133930794 }
]

function query() {
    return emails;
    //return Promise.resolve(emails)
}

function add(email) {
    const emailToAdd = {
        id: utilService.makeId(),
        ...email
    };
    emails = [emailToAdd, ...emails]
    return emailToAdd;
    // const emailsCopy = [...gEmails];
    // const emailIdx = emailCopy.findIndex(pet => pet.id === pet.id);
    // emailsCopy[emailIdx] = emailToUpdate;
    // gEmails = emailsCopy;
    // _saveEmailsToStorage();
    // return Promise.resolve(emailToUpdate);
}

// function _getDemoEmails() {
//     const emails = [
//         {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
//         {subject: 'Hoe r u?', body: 'Hi there', isRead: false, sentAt : 1551133930694},
//         {subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt : 1551133930794}
//     ]
//     return emails;
// }