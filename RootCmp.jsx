import { AppHeader } from "./cmps/AppHeader.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { EmailApp } from "./apps/Mail/EmailApp.jsx";
import { KeepApp } from "./apps/Keep/KeepApp.jsx";
import { BookApp } from "./apps/Books/BooksApp.jsx";
import { EmailDetails } from "./apps/Mail/pages/EmailDetails.jsx";
import { EmailEdit } from "./apps/Mail/pages/EmailEdit.jsx";
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class RootCmp extends React.Component {

    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <Switch>
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/book" component={BookApp} />
                        <Route path="/email/edit/:emailId?" component={EmailEdit} />
                        <Route path="/email/:emailId" component={EmailDetails} />
                        <Route path="/email" component={EmailApp} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                    {/* <footer>coffeerights 2020</footer> */}
                    {/* <footer className="animate__animated animate__jello">coffeerights 2020</footer> */}
                </section>
            </Router>
        )
    }
}
