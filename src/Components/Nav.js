const Nav = (props) => {
  const {isHeader, textLinkFooter, hrefLinkFooter} = props
    if(isHeader){
    return(
        <nav className="header__navbar">
        <a className="header__link" href="#">link</a>
        <a className="header__link" href="#">link</a>
        <a className="header__link" href="#">link</a>
        <span className="material-icons">shopping_cart</span>
      </nav>
    )
} else{
  return (
    <nav className="header__navbar">
    <a href={hrefLinkFooter}>{textLinkFooter}</a>
    <a href="#">Instagram</a>
    <a href="#">Youtube</a>
  </nav>
  )
}
}
export default Nav