const Nav = (parametro) => {
    console.log (parametro)
    if(parametro.isHeader === "true"){
    return(
        <nav>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
      </nav>
    )
} else{
    <nav>
    <a href="#">facebook</a>
    <a href="#">Instagram</a>
    <a href="#">Youtube</a>
  </nav>
}
}
export default Nav