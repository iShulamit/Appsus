const { Link } = ReactRouterDOM

export class Home extends React.Component {

    state = {

    }

    render() {
        return (
            <section className="home-page">
                <h1>This is my Appsus</h1>
                <div className="home-limks">
                    <Link to={"/email"}><img src="../assets/img/email.png" /></Link>
                    <Link to={"/keep"}><img src="../assets/img/keep.png" /></Link>
                    <Link to={"/book"}><img src="../assets/img/books.png" /></Link>
                </div>
            </section>
        )

    }
}