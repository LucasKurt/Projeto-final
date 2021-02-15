export const enviarDados = (url,form) => event => {
    event.preventDefault();
    fetch(url,{
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form)
    }).then(response => response.json()).then(dados => {
        console.log(dados);
        // setRender(!render)
        // setMsg(dados)

        // setTimeout(() => {
        //     setMsg(false)
        // }, 1000);
    })
}
