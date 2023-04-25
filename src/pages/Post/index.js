import './post.css'
import styles from './post.module.css'

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/postModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from 'pages/NaoEncontrada';
import HomePadrao from 'componentes/homePadrao';
import PostCard from 'componentes/postCard';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {


        return post.id === Number(parametros.id); //Metodo find executa a função callback uma vez para cada elemento presente no array
    })

    if (!post)
        return <NaoEncontrada />


    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id) ) // O post/id que estiver executando no momento, fica de fora dos recomendados. Number() porque parametros.id é uma string
        .sort((a, b) => b.id - a.id) // gera um array dos posts em ordem decrescente
        .slice(0,4); //O primeiro parametro é o "0" e o segundo parametro é a quantidade de itens que queremos pegar (4 posts) ou seja, um array de 4 posições.

      

        // OBS: path="*" significa que se o usuário digitar uma URL que não corresponda a nenhuma outra rota definida na aplicação, ele será redirecionado para a página <HomePadrao />
    return (

        <Routes>

            <Route path="*" element={<HomePadrao />}>

                <Route index element={

                    <PostModelo

                        fotoCapa={`/assets/posts/${post.id}/bg.png`} //Importa o componente PostModelo e coloca as props com o caminho da imagem usada como background
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros Posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ) )}
                        </ul>


                    </PostModelo>} />
            </Route>

        </Routes>

    )
}