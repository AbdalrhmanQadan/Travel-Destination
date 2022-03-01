


const Tour = (props) => {
    console.log(props.data)
    return (
        props.data.map(datamap => {
            return (
                <div>
                    <img src={datamap.image} alt="" />
                    <h2>{datamap.name}</h2>
                    <p>{datamap.info}</p>
                    <h4>{datamap.price}</h4>
                </div>
            )
        })
    )
}
export default Tour;