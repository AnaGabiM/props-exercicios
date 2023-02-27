import React from "react";

function InfosUser (props) {

    return (
        <div>
            <img src={props.dados.img} alt="" />
            <h4>{props.dados.titulos}</h4>
        </div>
    )
}

export default InfosUser;