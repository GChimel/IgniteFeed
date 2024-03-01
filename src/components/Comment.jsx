import { ThumbsUp, Timer, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/GChimel.png'/>

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo josé</strong>
              <time title='1 de Março às 12:40' dateTime='2024-03-01 12:40:13'>Cerca de 30m atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>

          </header>
          <p>Muito bom devon, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}