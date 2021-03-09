export const enviarDados = (url,form,setDados,method = 'POST') => event => {    
    event.preventDefault();
    
    fetch(url,{
        method: method,
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form)
    }).then(response => response.json()).then(dados =>setDados(dados))
}

export const pegarDados = (url,setData) => {
    async function fetchData() {
        const response = await fetch(url);
        setData(await response.json());
    } fetchData();    
}
