import { emailService } from "../services/emailServices.js"
import { EmailList } from '../cmps/email-app/EmailList.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        const emails = emailService.query();
        this.setState({ emails });
        console.log('emails:', emails);
    }

    render() {
        const { emails } = this.state;
        return (
            <section className="email-app">
                <h1>EmailApp</h1>
                <section className="email-list">
                    <EmailList emails={this.state.emails}/>

                </section>

            </section>
        )
    }


}