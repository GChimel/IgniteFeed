import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GChimel.png',
      name: 'Gustavo Chimel',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraa', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz na última semana!' },
      { type: 'paragraph', content: 'Arrasta pra cima' },
      
      { type: 'link', content: '#Meu git hub' },
    ],
    publishedAt: new Date('2024-02-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GChimel.png',
      name: 'Eduardo costa',
      role: 'Publicitario'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia pessoal!', },
      { type: 'paragraph', content: 'Se liga nessa última entrevista que eu fui....' },
      { type: 'paragraph', content: 'É isso!' },
      
      { type: 'link', content: '#Insta' },
    ],
    publishedAt: new Date('2024-02-05 20:00:00'),
  },
]


function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} 
            />
          )
         })}
        </main>

      </div>
    </div>
  )
}

export default App