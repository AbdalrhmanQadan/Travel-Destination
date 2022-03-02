
import { GridDiv, Button } from './StyleTours';

const Tour = (props) => {
    console.log(props.data)
    return (
        props.data.map(datamap => {
            return (
                <div key={datamap.id}>
                    <GridDiv>
                        <img src={datamap.image} alt="" style={{ width: 600 }} />
                        <h3>{datamap.price}</h3>
                        <h2>{datamap.name}</h2>
                    </GridDiv>
                    <Button>Details</Button>


                </div>
            )
        })
    )
}
export default Tour;