const { Link } = ReactRouterDOM
// import ''

export class Home extends React.Component {

    state = {

    }

    render() {
        return (
            <section className="home-page">
                {/* <div className="home-title"><h1>Welcome to my Appsus</h1></div> */}
                <div className="home-links">
                    <Link to={"/email"}><img src="./../assets/img/email.png" /></Link>
                    <Link to={"/keep"}><img src="./../assets/img/keep.png" /></Link>
                    <Link to={"/book"}><img src="./../assets/img/books.png" /></Link>
                </div>
            </section>
        )

    }
}