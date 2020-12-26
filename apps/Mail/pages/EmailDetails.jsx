import { emailService } from "../services/emailService.js"
const { Link } = ReactRouterDOM

export class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        const { emailId } = this.props.match.params;
        // console.log('emailId', emailId);
        emailService.getById(emailId).then(email => {
            this.setState({ email })
        })
    }

    onBack = () => {
        this.props.history.push('/email')
    }

    render() {
        if (!this.state.email) {
            return <div>Loading...</div>
        }
        return (
            <section className="email-details">
                {/* <h1>Email Details</h1> */}
                <div className="mail-subject"><h1> {this.state.email.subject} </h1><hr /></div>
                <div className="mail-recipient"><h6>From: {this.state.email.recipient} </h6><hr /></div>
                <div className="mail-body">{this.state.email.body} <hr /></div>
                <button onClick={this.onBack}>Back to inbox</button>
                <Link className="btn" to={`/email/edit/${this.state.email.id}`}>Edit</Link>
            </section>
        )
    }
}