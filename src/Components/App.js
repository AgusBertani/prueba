import Card from "./Card" ;
import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";
function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    <ItemListContainer greeting="Hola item"/>
    
    </>

  );
}

export default App;
