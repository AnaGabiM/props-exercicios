import React from "react";
import "./styles.css";
import CardVideo from "./componentes/CardVideo";

export default function App() {
  const dados1 = {
    img : "https://picsum.photos/400/400?a=1",
    titulos : "Titulo"
  }
  const dados2 = {
    img : "https://picsum.photos/400/400?a=2",
    titulos : "Titulo"
  }
  const dados3 = {
    img : "https://picsum.photos/400/400?a=3",
    titulos : "Titulo"
  }
  const dados4 = {
    img : "https://picsum.photos/400/400?a=4",
    titulos : "Titulo"
  }
  const dados5 = {
    img : "https://picsum.photos/400/400?a=5",
    titulos : "Titulo"
  }
  const dados6 = {
    img : "https://picsum.photos/400/400?a=6",
    titulos : "Titulo"
  }
  const dados7 = {
    img : "https://picsum.photos/400/400?a=7",
    titulos : "Titulo"
  }
  const dados8 = {
    img : "https://picsum.photos/400/400?a=8",
    titulos : "Titulo"
  }

  return (
    <div>
      <CardVideo
       dados1={dados1}
       dados2={dados2}
       dados3={dados3}
       dados4={dados4}
       dados5={dados5}
       dados6={dados6}
       dados7={dados7}
       dados8={dados8}/>
    </div>
  );
}
