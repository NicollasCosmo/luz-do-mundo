import styles from "./sobreMim.module.css";

import PostModelo from "../../componentes/postModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo

            fotoCapa={fotoCapa}
            titulo="Sobre mim"

        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Nícollas
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Nicollas sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Sou um desenvolvedor front-end com experiência em projetos de grande escala para orgãoes públicos e empresas líderes no mercado. Possuo amplo conhecimento em HTML, CSS, JavaScript, TypeScript, ReactJS e React Native. Sou especializado em desenvolvimento de interfaces de usuário e tenho experiência em integração de API e teste automatizado.</p>

            <p className={styles.paragrafo}>Em meus projetos anteriores, tive a oportunidade de trabalhar com equipes multidisciplinares e contribuir significativamente para o sucesso do produto final. Em minha última experiência,ajudei no desenvolvimento de uma nova aplicação mobile para um grande orgão público que resultou em um aumento de 20% na produtividade.</p>

            <p className={styles.paragrafo}>Tenho certificação em ReactJs e React Native, além de ter concluído vários cursos de desenvolvimento web e design responsivo. Estou sempre em busca de novas tecnologias e técnicas para melhorar minhas habilidades.</p>

            <p className={styles.paragrafo}>Meu objetivo é trabalhar em uma empresa que valorize a qualidade do produto e a colaboração entre equipes. Estou animado para desenvolver soluções de front-end inovadoras que contribuam para o crescimento de empresas em vários seguimentos.</p>

            <p className={styles.paragrafo}>https://github.com/NicollasCosmo</p>


        </PostModelo>
    )
}