import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  })

  const piblishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true 
  })

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');

    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment != commentToDelete;
    })

    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const  isNewCommentEmpty = newCommentText.length === 0;

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDataFormatted} dateTime={publishedAt.toISOString()}>
          {piblishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
      {
          content.map(line => {
            switch (line.type) {
              case 'paragraph':
                return <p key={line.content} >{line.content}</p>
                break;
              case 'link':
                return <p key={line.content} ><a href="">{line.content}</a></p>
                break;
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required //Valida que tenha conteúdo para enviar o formulário
        />

        <footer>
          <button title='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          ) 
        })
        }
      </div>

    </article>
  );
}