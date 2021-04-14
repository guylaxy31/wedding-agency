import Header from '../components/Header'
import Services from '../components/Services'
import Invitation from '../components/Invitation'
import Gallery from '../components/Gallery'
import Whatever from '../components/Whatever'
import './Home.scss'

function Home() {
    return (
        <div className="Home">
            <Header />
            <Services />
            <Invitation />
            <Gallery />
            <Whatever />
        </div>
    );
}

export default Home;
