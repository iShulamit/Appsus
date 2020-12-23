import { utilService } from './utilService.js'
// import { storageService } from './storageService.js'

export const emailService = {
    query,
    add,
    remove
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

function add(email) {
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

function remove(emailId) {
    emails = emails.filter(email => email.id !== emailId);
}

// function _getDemoEmails() {
//     const emails = [
//         {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
//         {subject: 'Hoe r u?', body: 'Hi there', isRead: false, sentAt : 1551133930694},
//         {subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt : 1551133930794}
//     ]
//     return emails;
// }