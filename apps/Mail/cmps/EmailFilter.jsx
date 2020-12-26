export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            recipient: '',
            subject: '',
            body: '',
        }
    }

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
            // console.log('filterBy=', filterBy);
            // console.log('this.props=', this.props);
        };

        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;
        // console.log('filterBy[ev.target.name]= ', filterBy[ev.target.name]);
        // console.log('ev.target.value= ', ev.target.value);

        this.setState({ filterBy }, callback);
    };
    
    // handleChange=({target}) => {
    //     this.setState({recipient: target.value}, ()=>{
    //         // console.log('set state is over');
    //         this.props.setFilter(this.state);
    //     });    
    // }

    render() {
        return (
            <section className="email-filter">
                <input type="text" name="recipient"
                    value={this.state.filterBy.recipient}
                    placeholder="filter by recipient"
                    autoComplete="off"
                    onChange={this.handleChange} />
            </section>
        )

    }
}