// import { EmailList } from "./EmailList";

export function EmailPreview({ email, onRemove }) {
    return (
        <div>
            <ul>
                <li>
                    <a>
                        <span>{email.recipient}</span>
                        <span>{email.subject}</span>
                        <span>{email.body}</span>
                        <span>{email.date}</span>
                    </a>
                    <button onClick={() => onRemove(email.id)}>Remove</button>
                </li>
            </ul>


        </div>
    )
}

// {/* <table className="email-preview">
//     {/* <TableHead>
//                 <TableRow>
//                     <TableCell>To / From</TableCell>
//                     <TableCell>subject</TableCell>
//                     <TableCell>description</TableCell>
//                     <TableCell>date</TableCell>
//                 </TableRow>
//             </TableHead> */}
//     <tbody>
//         <tr>
//             <th>To / From</th>
//             <th>subject</th>
//             <th>description</th>
//             <th>date</th>
//         </tr>
//         <tr>
//             <td>{email.recipient}</td>
//             <td>{email.subject}</td>
//             <td>{email.body}</td>
//             <td>{email.date}</td>
//             <td><button onClick={() => onRemove(email.id)}>Remove</button></td>
//         </tr>
//     </tbody>
// </table> */}