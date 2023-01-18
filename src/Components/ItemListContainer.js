import { useEffect, useState } from "react"
const ItemListContainer = (props) =>{

    const [contador, setContador] = useState(0)
    const handleClick = () =>{
        setContador(contador+1)
    }
    const [cargo,setCargo] = useState(false)
    useEffect(()=>{
        console.log("Pido algo a la base de datos")
        setTimeout(()=>{
            console.log("Termino de pedir algo a la base de datos")
            setCargo(true)
        },2000)
    })

    return(
        <><><div>{props.greeting}</div>
            <p>Contador : {contador} </p><button onClick={handleClick}>sumar</button></>
            <div>{!cargo ? "Cargando..." : "Termino de cargar"}</div></>

    )       
}

export default ItemListContainer