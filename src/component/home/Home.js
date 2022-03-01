import Header from '../header/Header';
import Tour from '../tours/Tours';
import Footer from '../footer/Footer'
import Data from '../../data/db.json'

function Home() {

    return (
        <>
            <Header />
            <Tour data={Data} />
            <Footer />
        </>

    );
}

export default Home;

