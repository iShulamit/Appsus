const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader(props) {

    // console.log('props:', props);

    // function goTo() {
    //     props.history.push('/emails')
    // }

    return (
        <header className="app-header">
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/email">Email</NavLink></li>
                    <li><NavLink to="/keep">Keep</NavLink></li>
                    <li><NavLink to="/book">Books</NavLink></li>
                    {/* <button onClick={goTo}>goTo</button> */}
                </ul>
            </nav>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader);


