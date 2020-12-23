import { emailService } from "../services/emailService.js"
import { EmailList } from '../cmps/email-app/EmailList.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: [],
        emailToAdd: {
            subject: '', 
            body: '', 
        }
    }

    componentDidMount() {
        this.loadEmails();
        // console.log('emails:', emails);
    }

    loadEmails = () => {
        const emails = emailService.query();
        this.setState({ emails });
    }


    onAddEmail = (ev) => {
        console.log('adding mail');
        ev.preventDefault();
        // const emailToAdd = { subject: 'Bla', body: 'well', isRead: false, sentAt: 1551133930597 }
        emailService.add(this.state.emailToAdd);
        this.loadEmails();
    }

    onInputChange = (ev) => {
        console.log('ev.target:', ev.target);
        this.setState({
            emailToAdd: {...this.state.emailToAdd, [ev.target.name]: ev.target.value}
        })
    }

    render() {
        const { emails } = this.state;
        return (
            <section className="email-app">
                <h1>EmailApp</h1>
                <section className="email-list">
                <button>Compose</button> 
                {/* compose buttone needs to open a modal which is the following form */}
                    <form onSubmit={this.onAddEmail}>
                        <input type="text" name="recipient" onChange={this.onInputChange} placeholder="To" />
                        <input type="text" name="subject" onChange={this.onInputChange} placeholder="Email subject" />
                        <input type="text" name="body" onChange={this.onInputChange} placeholder="Email body" />
                        <button>send</button>
                    </form>

                    <EmailList emails={this.state.emails} />

                </section>

            </section>
        )
    }


}