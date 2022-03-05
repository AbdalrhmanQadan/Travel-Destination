import { Link } from "react-router-dom";
import { Ul, Li, Lia } from './StyleNavbar'
const Nave = () => {
    return (
        <>
            <Ul >
                <Li><Link to={{
                    pathname: "/",
                }}/*</Li> onClick={localStorage.clear()} */ style={Lia}>Home</Link></Li>

            </Ul>
        </>

    );
}

export default Nave;