//css
import styles from './About.module.css'
// specialties
import DevelopApp from './images/develop_app.svg'
import DevelopEcomerce from './images/developer_ecomerce.svg'
import DevelopWebSite from './images/developer_website.svg'

//techs
import IconCss from './images/icon-css.svg'
import IconHtml from './images/icon-html.svg'
import IconJs from './images/icon-js.svg'
import IconNode from './images/icon-node.svg'
import IconReact from './images/icon-react.svg'
import IconSql from './images/icon-sql.svg'



const About = () => {
  return (    
        <section className={styles.about}>
          <h1>Sobre</h1>
          <div className={styles.specialties}>
            <div className={styles.specialties_bio}>
              <img src={DevelopApp} alt="developer App" className={styles.image1} /> 
              <span>
                  <p>
                    A  Ágora Soluções Web é especializada no desenvolvimento de aplicativos móveis inovadores e funcionais, projetados para proporcionar uma experiência de usuário excepcional. Com uma abordagem centrada no cliente, a equipe da Ágora trabalha em estreita colaboração com empresas de diversos setores para entender suas necessidades específicas e transformar ideias em aplicativos de alta performance. Utilizando as mais recentes tecnologias e práticas de desenvolvimento, a Ágora garante que cada aplicativo seja intuitivo, seguro e escalável. Desde o planejamento e design até a implementação e manutenção, a Ágora Soluções Web se dedica a criar aplicativos que impulsionam a eficiência operacional e a satisfação dos usuários, ajudando as empresas a se destacarem no mercado competitivo atual.
                  </p> 
              </span>
            </div>
            <div className={styles.specialties_bio}>
              <img src={DevelopEcomerce} alt="developer ecommerce" className={styles.image}/>
              <span> 
                  <p>
                    A seção de criação de e-commerce da Ágora Soluções Web é especializada no desenvolvimento de lojas virtuais robustas, seguras e escaláveis, projetadas para maximizar as vendas online e proporcionar uma experiência de compra excepcional. Com uma equipe de especialistas em comércio eletrônico, a Ágora trabalha para entender as necessidades únicas de cada cliente e criar soluções personalizadas que atendam às suas demandas. Desde o design atrativo e intuitivo até a integração de sistemas de pagamento seguros e ferramentas de gestão de estoque, cada detalhe é cuidadosamente planejado para garantir um desempenho superior. A Ágora Soluções Web se dedica a ajudar empresas a expandirem seu alcance e aumentarem sua receita, fornecendo plataformas de e-commerce que são fáceis de gerenciar e otimizadas para converter visitantes em clientes fiéis.
                  </p> 
              </span>
            </div>
            <div className={styles.specialties_bio}>
              <img src={DevelopWebSite} alt="developer web site" className={styles.image} />
              <span> 
                <p>
                  A seção de criação de websites da Ágora Soluções Web é dedicada a desenvolver sites modernos, responsivos e esteticamente atraentes que atendam às necessidades específicas de cada cliente. Com uma equipe de designers e desenvolvedores experientes, a Ágora combina criatividade e tecnologia para entregar websites que oferecem uma experiência de usuário envolvente e intuitiva. Focada em usabilidade, performance e SEO, a Ágora garante que cada site seja não apenas visualmente impactante, mas também funcional e otimizado para os motores de busca. Desde a concepção do design até a implementação final, a Ágora Soluções Web se compromete a criar plataformas digitais que reforcem a identidade da marca e impulsionem os negócios de seus clientes no ambiente online.
                </p>
              </span>
            </div>

          </div>
          <div>
            <h3>Techs</h3>
          </div>
          

          <div className={styles.techs}>
            
                <div>
                  <img src={IconCss} alt="css" />
                </div>
                <div>
                  <img src={IconHtml} alt="html" />
                </div>
                <div>
                  <img src={IconJs} alt="js" />
                </div>
                <div>
                  <img src={IconNode} alt="node" />
                </div>
                <div>
                  <img src={IconReact} alt="react" />
                </div>
                <div>
                  <img src={IconSql} alt="sql" />
                </div>

          </div>

        </section>
        
    )
}

export default About