import { Link } from "react-router-dom";
import { GridDiv, Button } from './StyleTours';

const Tour = (props) => {
    console.log(props.data)
    // let formatData = JSON.stringify(props.data);
    //localStorage.setItem("city", formatData);


    return (
        props.data.map(datamap => {
            return (
                <div key={datamap.id}>
                    <GridDiv>
                        <img src={datamap.image} alt="" style={{ width: 600 }} />
                        <h3>{datamap.price}</h3>
                        <h2>{datamap.name}</h2>
                    </GridDiv>
                    <Link to={{
                        pathname: `/details/:${datamap.id}`,
                    }}><Button /*onClick={() => {
                        let localId = JSON.stringify(datamap);
                        localStorage.setItem("CityId", localId)
                    }}*/>Details
                        </Button>
                    </Link>
                </div>
            )
        })
    )
}
export default Tour;