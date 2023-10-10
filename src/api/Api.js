export function SaveProject(nome, descricao, id){
    
    if(id === undefined){
        fetch('http://localhost:8080/projetos', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome, descricao})
        })
        .then(response => {
            if(response.ok){
                alert("Projeto salvo!")
            }
        })
        
                    
    }
}
