import { emailService } from './services/emailService.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
// import { eventBusService } from './services/eventBusService.js'

const { Link } = ReactRouterDOM

export class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            recipient: '',
            subject: '',
            body: ''
        },
        message: ''
    };

    // unsubscribe;
    componentDidMount() {
        this.loadEmails();
        // console.log('emails:', emails);
        // this.unsubscribe = eventBusService.on(`notification`, (data) => {
        //     this.setState({ message: data.message });
        // })
    }

    componeneDidUnmount() {
        // console.log('unsubscribing');
        // this.unsubscribe();
    }

    loadEmails = () => {
        emailService.query().then(emails => {
            this.setState({ emails });
        })
    }


    onRemoveEmail = (emailId) => {
        // console.log('removing emailId: ', emailId);
        emailService.remove(emailId).then(() => {
            // eventBusService.emit(`notification`, {message: email.subject + ' Deleted'});
            this.loadEmails();
        })
    }

    getEmailsForDisplay = () => {
        // console.log('getEmailsForDisplay', this.state.emails);
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.recipient, 'i'); //ignore case
        return this.state.emails.filter(email => filterRegex.test(email.recipient));
    }

    // get emailsForDisplay() {
    //     const { filterBy } = this.state;
    //     const filterRegex = new RegExp(filterBy.name, 'i'); //ignore case
    //     return this.state.emails.filter(email => filterRegex.test(email.name));
    //     // return this.state.emails.filter(email => {
    //     //     return email.recipient.toLowerCase().includes(filterBy.recipient.toLowerCase());
    //     // })
    // }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    }

    render() {
        // const { emails } = this.state;
        const emailsForDisplay = this.getEmailsForDisplay();
        // const emailsForDisplay = this.emailsForDisplay;

        return (
            <section className="email-app">
                <h1>EmailApp</h1>
                {this.state.message && <h1>Message is: {this.state.message}</h1>}
                <EmailFilter setFilter={this.onSetFilter} />
                <section className="email-list">
                    {/* compose button needs to open a modal which is the following form */}
                    <Link to={"/email/edit"}><button>Compose</button></Link>
                    <EmailList emails={emailsForDisplay} onRemove={this.onRemoveEmail} />
                </section>

            </section>
        )
    }


}