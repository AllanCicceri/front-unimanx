import { useEffect, useState } from 'react'
import './NavProjetos.css'
import ProjetoItem from './ProjetoItem'

export default function NavProjetos(){
    const [projetos, setProjetos] = useState([])

    useEffect(() => {

        async function fetchProjetos() {
            const response = await fetch('http://localhost:8080/projetos')
            const dados = await response.json()
            
            setProjetos(dados)
        }

        fetchProjetos()
    },[])

    return (
        <div className="nav-projetos">
        {
            projetos.length <= 0 ? "Carregando..." :
            (
                projetos.map(item => (
                    <ProjetoItem key={item.id} titulo={item.nome} descricao={item.descricao}/>
                ))
            )
        }
        
    </div>)
}