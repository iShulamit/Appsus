import { emailService } from './services/emailService.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'

const { Link } = ReactRouterDOM

export class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            recipient: '',
            subject: '',
            body: ''
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


    onRemoveEmail = (emailId) => {
        // console.log('removing emailId: ', emailId);
        emailService.remove(emailId);
        this.loadEmails();
    }

    getEmailsForDisplay = () => {
        const { filterBy } = this.state;
        return this.state.emails.filter(email => {
            return email.recipient.toLowerCase().includes(filterBy.recipient.toLowerCase());
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    }

    render() {
        const { emails } = this.state;
        return (
            <section className="email-app">
                <h1>EmailApp</h1>
                <EmailFilter setFilter={this.onSetFilter} />
                <section className="email-list">
                    
                    {/* compose button needs to open a modal which is the following form */}
                    <Link to={"/email/edit"}><button>Compose</button></Link>
                    <EmailList emails={this.getEmailsForDisplay()} onRemove={this.onRemoveEmail} />
                </section>

            </section>
        )
    }


}