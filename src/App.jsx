import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            title="Gustavo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusantium eos quaerat ea aperiam debitis, dolorum excepturi alias quibusdam perferendis, quod omnis rem amet. Quaerat incidunt dolorem quo enim similique?"
          />
          <Post
            title="Junior"
            content="I love ReactJS"
          />
        </main>

      </div>
    </div>
  )
}

export default App


