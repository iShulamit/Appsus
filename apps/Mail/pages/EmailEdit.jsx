import { emailService } from "../services/emailService.js"

export class EmailEdit extends React.Component {

    state = {
        email: {
            recipient: '',
            subject: '',
            body: '',
        },
    }

    elInput = React.createRef();

    componentDidMount() {
        const { emailId } = this.props.match.params;

        this.elInput.current.focus();

        if (!emailId) return;
        emailService.getById(emailId).then(email => {
            this.setState({ email })
        })
    }


    onSaveEmail = (ev) => {
        // console.log('adding mail');
        ev.preventDefault();
        // const emailToAdd = { subject: 'Bla', body: 'well', isRead: false, sentAt: 1551133930597 }
        if (this.state.email.recipient === '' ||
            this.state.email.subject === '' ||
            this.state.email.body === '') {
            alert('must enter text in all fields')
            return
        }

        emailService.save(this.state.email).then(savedEmail => {
                console.log('Saves succesfully', savedEmail);
                this.props.history.push('/email');
            })
    }

    onInputChange = (ev) => {
        // console.log('ev.target:', ev.target);
        // const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;  //no need since all inputs are txt
        const email = { ...this.state.email };
        email[ev.target.name] = ev.target.value;
        this.setState({
            email
        })
    }

    render() {
        return (
            <form className="email-edit" onSubmit={this.onSaveEmail}>

                <input value={this.state.email.recipient} ref={this.elInput}
                    placeholder="To" type="text" name="recipient"
                    onChange={this.onInputChange} /> <br/>

                <input value={this.state.email.subject}
                    placeholder="Email subject" type="text" name="subject"
                    onChange={this.onInputChange} /> <br />

                <input value={this.state.email.body}
                    placeholder="Email body" type="text" name="body"
                    onChange={this.onInputChange} /> <br />
                <button>{(this.state.email.id) ? 'Update' : 'Send'}</button>

            </form>
        )
    }
}
