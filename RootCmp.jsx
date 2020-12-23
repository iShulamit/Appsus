const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { EmailApp } from "./pages/EmailApp.jsx";

// Simple React Component
export class RootCmp extends React.Component {

    render() {
        return (
            <EmailApp />
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
        )
    }
}
