import React from "react";
import { useSelector } from "react-redux";

//useSelector(state => state.reducer)

export function EnviarDados(props) {
    const formData = useSelector(state => state.reducer)
    //console.log(useSelector(state => state.reducer));
    function enviarDados(event){
        event.preventDefault();
        const url = props.url;

        fetch(url,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(response => response.json()).then(dados => {
            console.log(dados);
            // setRender(!render)
            // setMsg(dados)

            // setTimeout(() => {
            //     setMsg(false)
            // }, 1000);
        })
    }
    return (
        <form className="needs-validation" onSubmit={enviarDados} noValidate>
            {props.children}
        </form>
    );
}
