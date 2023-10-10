import { useState } from 'react'
import {SaveProject} from '../../../api/Api'
import './NavTitle.css'
import FrmProjeto from '../../frm-projetos/FrmProjeto'

export default function NavTitle({SetProjectsState}){
    const [frmProjectVisible, setFrmProjectVisible] = useState(false)

    function CloseForm(){
        setFrmProjectVisible(false)
    }

    function HandleSaveProject(nome, descricao){
        SaveProject(nome, descricao)
        CloseForm()
        SetProjectsState()

    }

    const RenderFrmProject = () => {
        return (<FrmProjeto SaveProject={HandleSaveProject} CloseForm={CloseForm} />)
    }


    return (
        <div className="nav-title-container">
            <h3 className='nav-title'>Projetos</h3>
            <button className='btn-add-project' onClick={() => setFrmProjectVisible(true)}>Add</button>

            {
                frmProjectVisible ? RenderFrmProject() : ""
            }
        </div>
    )
}