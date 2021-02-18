export const enviarDados = (url,form,setDados,method = "POST") => event => {    
    event.preventDefault();
    
    fetch(url,{
        method,
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form)
    }).then(response => response.json()).then(dados => {
        setDados(dados);
    })
}
