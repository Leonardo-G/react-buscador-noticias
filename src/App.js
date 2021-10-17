import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { Listado } from "./components/Listado";

function App() {

  //Definir la categoria y noticias
  const [ categoria, setCategoria ] = useState("");
  const [ noticias, setNoticias ] = useState([])

  useEffect( () => {
    const consultarAPI = async () => {
      const apiKey = "fd2663e7434d43d880f154216cc6f6e2"
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`
    
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria]) 

  return (
    <>
      <Header 
        titulo="Buscador de noticias"
      />
      <div className="container white">
        <Formulario setCategoria={setCategoria}/>
        <Listado noticias={noticias}/>
      </div>

    </>
  );
}

export default App;
