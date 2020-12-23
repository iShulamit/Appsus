export class EmailFilter extends React.Component {

    state = {
            recipient: '',
            subject: '',
            body: ''
    }

    handleChange=({target}) => {
        this.setState({recipient: target.value}, ()=>{
            // console.log('set state is over');
            this.props.setFilter(this.state);
        });    
    }

    render() {
        return (
            <section>
                <input type="text" name="recipient"
                    value={this.state.recipient} 
                    placeholder="filter by recipient"
                    onChange={this.handleChange} />
            </section>
        )

    }
}