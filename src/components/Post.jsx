import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/GChimel.png'/>
          <div className={styles.authorInfo}>
            <strong>Gustavo Chimel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="1 de Março às 12:10h" dateTime="2024-03-01 12:10:05">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galeraa</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz na última semana!</p>
        <p>Arrasta pra cima</p>
        <p><a href="">#Meu git hub</a></p>
        <p>
          <a href="">#Linkedin</a>{' '} {/* {' '} para dar espaço  */}
          <a href="">#Instagram</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button title='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>

    </article>
  );
}