import React from "react";
import InfosUser from "./InfosUser";

function CardVideo(props) {
   
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return (
        <div>
            <div className="tela-inteira">
                <header>
                    <h1>LabeTube</h1>
                    <input type="text" placeholder="Busca" id="campoDeBusca" />
                </header>

                <main>
                    <nav className="menu-vertical">
                        <ul>
                            <li className="botoes-meunu-vertical">Início</li>
                            <li className="botoes-meunu-vertical">Em alta</li>
                            <li className="botoes-meunu-vertical">Inscrições</li>
                            <hr />
                            <li className="botoes-meunu-vertical">Originais</li>
                            <li className="botoes-meunu-vertical">Histórico</li>
                        </ul>
                    </nav>

                    <section className="painel-de-videos">
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados1}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados2}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados3}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados4}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados5}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados6}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados7}/>
                        </div>
                        <div className="box-pagina-principal" onClick={reproduzVideo}>
                            <InfosUser dados={props.dados8}/>
                        </div>
                    </section>
                </main>

                <footer>
                    <h4>Oi! Eu moro no footer!</h4>
                </footer>
            </div>
        </div>
    );
}

export default CardVideo