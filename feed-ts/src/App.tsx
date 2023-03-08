
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css';




const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/85197166?v=4',
      name: 'Gabriel Lamberti',
      role: 'Cto'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋' },
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
     { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-28 14:55:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Douglas andrade gomes',
      role: 'Designer'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋' },
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
     { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-28 14:55:00'),
  },
  
];


export function App() {


  return (
 <>
 <Header/>
 <div className={styles.wrapper}>
  <Sidebar/>
  <main>
  { posts.map (post => {
    return (
      <Post
      key={post.id}
      post={post}

      />
    )
  } ) }
  </main>
 </div>
 
 

 </>
  )
}


