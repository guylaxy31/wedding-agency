import Header from '../components/Header'
import Services from '../components/Services'
import Invitation from '../components/Invitation'
import Gallery from '../components/Gallery'
import Whatever from '../components/Whatever'
import Blog from '../components/Blog'
import Attending from '../components/Attending'
import Footer from '../components/Footer'
import './Home.scss'

function Home() {
    return (
        <div className="Home">
            <Header />
            <Services />
            <Invitation />
            <Gallery />
            <Whatever />
            <Blog />
            <Attending />
            <Footer />
        </div>
    );
}

export default Home;
