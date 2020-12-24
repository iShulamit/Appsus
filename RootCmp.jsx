const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, NavLink } = ReactRouterDOM;

import { Home } from "./pages/Home.jsx";
import { EmailApp } from "./apps/Mail/EmailApp.jsx";
import { KeepApp } from "./apps/Keep/KeepApp.jsx";
import { BookApp } from "./apps/Books/BooksApp.jsx";
import { EmailDetails } from "./apps/Mail/pages/EmailDetails.jsx";

// Simple React Component
export class RootCmp extends React.Component {

    render() {
        return (
            <Router>
                <section className="app">
                    {/* <AppHeader /> */}
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/email">Email</NavLink></li>
                            <li><NavLink to="/keep">Keep</NavLink></li>
                            <li><NavLink to="/book">Books</NavLink></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/book" component={BookApp} />
                        {/* <Route path="/pet/edit/:petId?" component={PetEdit} /> */}
                        <Route path="/email/:emailId" component={EmailDetails} />
                        <Route path="/email" component={EmailApp} />
                        {/* <Route path="/about" component={About} /> */}
                        <Route path="/" component={Home} />
                    </Switch>
                    {/* <footer className="animate__animated animate__jello">coffeerights 2020</footer> */}
                </section>
            </Router>
        )
    }
}

            // <Router>
            //     <section className="app">
            //         <AppHeader />
            //         <Switch>
            //             <Route path="/pet/edit/:petId?" component={PetEdit} />
            //             <Route path="/pet/:petId" component={PetDetails} />
            //             <Route path="/pet" component={PetApp} />
            //             <Route path="/about" component={About} />
            //             <Route path="/survey" component={Survey} />
            //             <Route path="/" component={Home} />
            //         </Switch>
            //         <footer className="animate__animated animate__jello">coffeerights 2020</footer>
            //     </section>
            // </Router>