import { emailService } from "../services/emailService.js"

export class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        const { emailId } = this.props.match.params;
        // console.log('emailId', emailId);
        const email = emailService.getById(emailId);
        console.log('email:', email);
        this.setState({ email })
        // .then(email => {
        //     this.setState({ email })
        // })
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
            </section>
        )
    }
}