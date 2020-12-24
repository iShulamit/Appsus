import { emailService } from "../services/emailService.js"

export class EmailEdit extends React.Component {

    state = {
        email: {
            recipient: '',
            subject: '',
            body: '',
        },
    }

    componentDidMount() {
        const { emailId } = this.props.match.params;
        const email = emailService.getById(emailId);
        this.setState({ email: email })
    
    }


    onSaveEmail = (ev) => {
        console.log('adding mail');
        ev.preventDefault();
        // const emailToAdd = { subject: 'Bla', body: 'well', isRead: false, sentAt: 1551133930597 }
        if (this.state.email.recipient === '' ||
            this.state.email.subject === '' ||
            this.state.email.body === '') {
            alert('must enter text in all fields')
            return
        }

        emailService.save(this.state.email);
        this.props.history.push('/email')
        
    }

    onInputChange = (ev) => {
        // console.log('ev.target:', ev.target);
        // const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;  //no need since all inputs are txt

        const emailCopy = { ...this.state.email };
        emailCopy[ev.target.name] = ev.target.value;

        this.setState({
            email: emailCopy
        })
    }





    render() {
        return (
            <form onSubmit={this.onSaveEmail}>

                <input value={this.state.email.recipient}
                    placeholder="To" type="text" name="recipient"
                    onChange={this.onInputChange} />

                <input value={this.state.email.subject}
                    placeholder="Email subject" type="text" name="subject"
                    onChange={this.onInputChange} />

                <input value={this.state.email.body}
                    placeholder="Email body" type="text" name="body"
                    onChange={this.onInputChange} />
                <button>send</button>

            </form>
        )
    }
}
