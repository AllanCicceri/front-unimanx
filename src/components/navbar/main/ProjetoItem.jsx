import './ProjetoItem.css'

export default function ProjetoItem({titulo, descricao}){
    return (
    <div className='projeto-item'>
        <div className="projeto-titulo">{titulo}</div>        
        <div className="projeto-desc">{descricao}</div>
    </div>)
}