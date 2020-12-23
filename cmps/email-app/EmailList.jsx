import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onRemove }) {
    return (
        emails.map(email => {
            return <EmailPreview key={email.id}  email={email} onRemove={onRemove}/>
        })
    )
}