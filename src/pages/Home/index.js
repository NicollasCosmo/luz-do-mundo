import styles from './home.module.css';

import posts from '../../json/posts.json';
import PostCard from "componentes/postCard";


export default function Home() {
    return (

        <ul className={styles.posts}>
            {posts.map((post) => ( // Para cada post, retorna um li pegando o atributo key com o id de cada post
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}

        </ul>

    )
}


