export function EmailPreview ({email}) {
    return (
        <table className="email-preview">
            <thead>
                <tr>
                    <th>subject</th>
                    <th>description</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{email.subject}</td>
                    <td>{email.body}</td>
                    <td>{email.date}</td>
                </tr>
            </tbody>
        </table>
    )
}