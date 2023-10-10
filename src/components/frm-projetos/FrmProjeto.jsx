import './FrmProjeto.css'
import { useState } from 'react';

export default function FrmProjeto( {SaveProject, CloseForm} ){
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');


    function HandleSubmit(){
        SaveProject(nome, descricao)
        CloseForm()
    }

    return (
        <form className='frm-projeto' onSubmit={HandleSubmit}>
            <label htmlFor="nomeProjeto">Nome</label>
            <input type="text" className='input-nome' name='nomeProjeto' value={nome} onChange={(e) => setNome(e.target.value)} />
            <label htmlFor="descricaoProjeto">Descricao</label>
            <textarea type="text" className='input-descricao' name='descricaoProjeto' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <div className="frm-buttons">
                <button type="submit" className='input-submit' value="Salvar" onClick={e => HandleSubmit()}>Salvar </button>
                <button type="submit" className='input-submit' onClick={e => CloseForm()} >Cancelar</button>
            </div>
        </form>
    )
}