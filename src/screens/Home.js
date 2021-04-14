import Header from '../components/Header'
import Services from '../components/Services'
import Invitation from '../components/Invitation'

import './Home.scss'

function Home() {
    return (
        <div className="Home">
            <Header />
            <Services />
            <Invitation />
        </div>
    );
}

export default Home;
