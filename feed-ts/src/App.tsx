
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css';




const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85197166?v=4',
      name: 'Gabriel Lamberti',
      role: 'Cto'
    },
    content: [
      { type: 'paragraph', content: 'Olá Rede ! 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem optio, aliquam suscipit impedit qui facilis eius! Possimus nemo sint delectus.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-28 14:55:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1600697394936-59934aa5951f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40',
      name: 'Douglas andrade gomes',
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem optio, aliquam suscipit impedit qui facilis eius! Possimus nemo sint delectus doloribus harum eius ducimus natus, illum culpa quod perspiciatis aspernatur? 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-28 14:55:00'),
  },

];


export function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}

              />
            )
          })}
        </main>
      </div>



    </>
  )
}


