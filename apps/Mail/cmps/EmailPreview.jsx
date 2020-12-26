// import { EmailList } from "./EmailList";
import { eventBusService } from '../services/eventBusService.js'

const { Link } = ReactRouterDOM;

export function EmailPreview({ email, onRemove }) {
    return (
        <Link to={`/email/${email.id}`}>

            <div className="email-container">
                <ul>
                    <li>
                        <span className="email-detailes email-recipient">{email.recipient}</span>
                        <span className="email-detailes email-subject">{email.subject}</span>
                        <span>{email.body}</span>
                        <span>{email.date}</span>
                        <div>
                            <button onClick={(ev) => {
                                ev.preventDefault();
                                eventBusService.emit(`notification`, { message: email.subject + ' Deleted' });
                                onRemove(email.id)
                            }}
                            >Remove</button>
                        </div>

                    </li>
                </ul>
            </div>
        </Link>
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