import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails }) {
    return (
        emails.map(email => {
            return <EmailPreview key={email.id}  email={email} />
        })
    )
}