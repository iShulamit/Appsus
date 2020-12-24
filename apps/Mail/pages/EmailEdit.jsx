import { emailService } from "../services/emailService.js"

export class EmailEdit extends React.Component {

    state = {
        emailToAdd: {
            recipient: '',
            subject: '',
            body: '',
        },
    }

    componentDidMount() {
        const { emailId } = this.props.match.params;
        const email = emailService.getById(emailId);
        this.setState({ emailToAdd: email })
    
    }


    onAddEmail = (ev) => {
        console.log('adding mail');
        ev.preventDefault();
        // const emailToAdd = { subject: 'Bla', body: 'well', isRead: false, sentAt: 1551133930597 }
        if (this.state.emailToAdd.recipient === '' ||
            this.state.emailToAdd.subject === '' ||
            this.state.emailToAdd.body === '') {
            alert('must enter text in all fields')
            return
        }

        emailService.add(this.state.emailToAdd);
        this.loadEmails();
    }

    onInputChange = (ev) => {
        // console.log('ev.target:', ev.target);
        // const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;  //no need since all inputs are txt

        const emailCopy = { ...this.state.emailToAdd };
        emailCopy[ev.target.name] = ev.target.value;

        this.setState({
            emailToAdd: emailCopy
        })
    }





    render() {
        return (
            <form onSubmit={this.onAddEmail}>

                <input value={this.state.emailToAdd.recipient}
                    placeholder="To" type="text" name="recipient"
                    onChange={this.onInputChange} />

                <input value={this.state.emailToAdd.subject}
                    placeholder="Email subject" type="text" name="subject"
                    onChange={this.onInputChange} />

                <input value={this.state.emailToAdd.body}
                    placeholder="Email body" type="text" name="body"
                    onChange={this.onInputChange} />
                <button>send</button>

            </form>
        )
    }
}
