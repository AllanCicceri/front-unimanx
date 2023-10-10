import { useEffect, useState } from 'react'
import './NavProjetos.css'
import ProjetoItem from './ProjetoItem'
import NavTitle from './NavTitle'

export default function NavProjetos(){
    const [projetos, setProjetos] = useState([])

    useEffect(() => {

        async function fetchProjetos() {
            try {
                const response = await fetch('http://localhost:8080/projetos')    
                const dados = await response.json()
                    
                setProjetos(dados)
                
            } catch (error) {
                console.log(error)    
            }
        }

        fetchProjetos()
    },[projetos])

    function SetProjectsState(){
        setProjetos([])
    }

    return (
        <div className="nav-projetos">
        <NavTitle SetProjectsState={SetProjectsState}/>
        {
            projetos.length <= 0 ? "Carregando..." :
            (
                projetos.map(item => (
                    <ProjetoItem key={item.id} titulo={item.nome} descricao={item.descricao}/>
                ))
            )
        }
        
        </div>
    )
}