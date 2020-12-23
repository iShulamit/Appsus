export function EmailPreview({ email }) {
    return (
        <table className="email-preview">
            {/* <TableHead>
                <TableRow>
                    <TableCell>To / From</TableCell>
                    <TableCell>subject</TableCell>
                    <TableCell>description</TableCell>
                    <TableCell>date</TableCell>
                </TableRow>
            </TableHead> */}
            <tbody>
                <tr>
                    <th>To / From</th>
                    <th>subject</th>
                    <th>description</th>
                    <th>date</th>
                </tr>
                <tr>
                    <td>{email.recipient}</td>
                    <td>{email.subject}</td>
                    <td>{email.body}</td>
                    <td>{email.date}</td>
                </tr>
            </tbody>
        </table>
    )
}