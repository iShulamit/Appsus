import { emailService } from "../services/emailService.js"
import { EmailList } from '../cmps/email-app/EmailList.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails();
        // console.log('emails:', emails);
    }

    loadEmails = () => {
        const emails = emailService.query();
        this.setState({ emails });
    }


    onAddEmail = () => {
        console.log('adding mail');
        const emailToAdd = { subject: 'Bla', body: 'well', isRead: false, sentAt: 1551133930597 }
        petService.add(emailToAdd);
        this.loadEmails();
    }

    render() {
        const { emails } = this.state;
        return (
            <section className="email-app">
                <h1>EmailApp</h1>
                <section className="email-list">
                    <input type="text" onChange/>
                    <button onClick={this.onAddEmail}>Compose</button>
                    <EmailList emails={this.state.emails} />

                </section>

            </section>
        )
    }


}