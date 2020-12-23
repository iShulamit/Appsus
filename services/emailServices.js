// import { utilService } from './utilService.js'
// import { storageService } from './storageService.js'

export const emailService = {
    query,
}

var emails = [
    { id: 'i101', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: 'i102', subject: 'Hoe r u?', body: 'Hi there', isRead: false, sentAt: 1551133930694 },
    { id: 'i103', subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt: 1551133930794 }
]

function query() {
    return emails;
    //return Promise.resolve(emails)
}

// function _getDemoEmails() {
//     const emails = [
//         {subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
//         {subject: 'Hoe r u?', body: 'Hi there', isRead: false, sentAt : 1551133930694},
//         {subject: 'You Won!', body: 'a brand new something', isRead: false, sentAt : 1551133930794}
//     ]
//     return emails;
// }