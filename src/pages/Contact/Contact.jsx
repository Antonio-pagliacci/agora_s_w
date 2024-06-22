import Container from '../../components/Container/Container'
import styles from './Contact.module.css'

//icones 
import { GoMail } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Contact = () => {
  return (
      <>
      <Container>
        <section className={styles.contatos}>
          <h2>Contatos</h2>
          <h3>Entre em Contato para fazer um orçamento.</h3>

          <div className={styles.icons}>
            <a href="mailto:agorasolucoesweb@gmail.com" target='_blank'
               rel='noopener    noreferrer'><GoMail className={styles.icon}/>
            </a>

            <a href="#">
              <IoLogoWhatsapp className={styles.icon}/>
            </a>
            
           <a href="#">
             <IoLogoGithub className={styles.icon}/>
           </a>
            
            <a href="#">
             <FaInstagram className={styles.icon}/>
            </a>

            <a href="#">
             <FaLinkedin className={styles.icon}/>
            </a>        
            
          </div>
          
        </section>
      </Container>
      
      </>
  )
}

export default Contact;
