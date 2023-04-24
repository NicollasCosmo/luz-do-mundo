import BotaoPrincipal from 'componentes/botaoPrincipal';
import styles from './naoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {

    const navegar = useNavigate();

    return (

        <>

            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! página não encontrada...
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza que digitou corretamente o endereço?
                </p>

                <p className={styles.paragrafo}>
                    aguarde uns instantes e recarregue a página.
                </p>

                <div 
                
                className={styles.botaoContainer}
                onClick={() => navegar(-1)}
                
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>

                </div>

                <img

                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="imagem Cachorro de óculos"

                />

            </div>

            <div className={styles.espacoEmBranco}>

            </div>



        </>

    )
}
