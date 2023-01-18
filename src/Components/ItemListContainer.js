import { useState } from "react"
const ItemListContainer = (props) =>{

    const [contador, setContador] = useState(0)
    const handleClick = () =>{
        setContador(contador+1)
    }

    return(
        <><div>{props.greeting}</div>
        <p>Contador : {contador} </p><button onClick={handleClick}>sumar</button></>

    )       
}

export default ItemListContainer