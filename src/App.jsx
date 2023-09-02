import ItemListContainer from "./componentes/ItemListContainer"
import NavBar from "./componentes/NavBar"

const App = () => {

  const greeting = "Bienvenidos a mi tienda de bicicletas"



  return (
    <>
    <NavBar />
    <ItemListContainer greeting={greeting}/>
    </>
  )
}

