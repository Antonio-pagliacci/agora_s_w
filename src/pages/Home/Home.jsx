import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import Container from '../../components/Container/Container'


const Home = () => {
  return (   
    
    <Container>
    <section className={styles.home}>
       <figure>
          <img className={styles.image} src="developer_home.svg" alt="imagem de home" />
        </figure>
      <div className={styles.apresentacao}>
        <p>Olá, somos a<br />
        <span>Ágora Soluções Web.</span>          
        </p>
        <Link to='/about' className={`${styles.btn} ${styles.btn_orange}`}>Saiba mais</Link> 
      </div>       
    </section>  
    </Container>
    
    
  )
}

export default Home;
