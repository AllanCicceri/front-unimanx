import './Navbar.css'
import NavHeader from './NavHeader'
import NavContainer from './main/NavContainer'

export default function Navbar(){
    return (
        <nav className="sidebar">
            <NavHeader />
            <NavContainer />            
        </nav>
    )
}