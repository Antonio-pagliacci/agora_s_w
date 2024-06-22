import styles from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
        <header className={styles.header}>
          <Link to='/'> 
           <span>Ágora Solucões Web</span>
          </Link>          
           <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>Sobre</Link>
            <Link to='/projects'>Projetos</Link>
            <Link to='/contact'>Contatos</Link>                              
           </nav>
        </header>
  )
}

export default Header;
