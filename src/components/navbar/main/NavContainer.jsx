import './NavContainer.css'
import NavTitle from './NavTitle'
import NavProjetos from './NavProjetos'

export default function NavContainer(){
    return <div className='nav-container'>
        <NavTitle/>
        <NavProjetos/>
    </div>
}