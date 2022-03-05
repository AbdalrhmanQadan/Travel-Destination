import Data from '../../data/db.json';
import { useParams } from 'react-router-dom';

function TourD() {
    let id = useParams();

    let city = Data.filter(city => city.id === id);
    console.log(city);
    //console.log(Data)
    //let getId = localStorage.getItem('CityId');
    //let parsId = JSON.parse(getId)
    //let city = [parsId];
    //console.log(city)
    //return (
    return (
        <article>
            <div >
                <image href={city[0].id} />
                <h1>{city[0].name}</h1>
                <h2>{city[0].price}</h2>
                <p>{city[0].info}</p>
            </div>
        </article>

    )
}

export default TourD;