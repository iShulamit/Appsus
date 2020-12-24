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

    onRemove = () => {
        this.props.history.push('/email')
    }

    render() {
        if (!this.state.email) {
            return <div>Loading...</div>
        }
        return (
            <section className="email-details">
                <h1>Email Details</h1>
                {this.state.email.recipient} <br />
                {this.state.email.subject} <br />
                {this.state.email.body} <br />
                <button onClick={this.onRemove}>Remove</button>
                <Link to={`/email/edit/${this.state.email.id}`}>Edit Email</Link>
            </section>
        )
    }
}