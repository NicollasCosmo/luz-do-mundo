import styles from './banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png';
import luz from 'assets/luz.png';


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Luz do Mundo

                </h1>
                <p>
                    Bem vindoa este espaço onde você irá encontrar muito alimento para sua alma através de estudos da palavra de Deus. Eles serão com luz para seu caminho.
                </p>

            </div>
            <div className={styles.imagens}>

                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    alt='imagem de circulo'
                    aria-hidden={true}
                />

                <img className={styles.minhaFoto}
                    src={luz}
                    alt='foto da bíblia'
                />

            </div>

        </div>

    )
}