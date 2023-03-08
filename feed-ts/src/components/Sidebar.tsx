import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
export function Sidebar (){

return (
    <>
    <aside className={styles.sidebar}>
        
        <img className={styles.cover} 
             src="https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40"  
        />
        
        
        <div className={styles.profile}>
           <Avatar src="https://avatars.githubusercontent.com/u/85197166?v=4"/>
            <strong>Gabriel Lamberti Machado</strong>
            <span>Web Developer</span>
        </div>
        <footer>
           <a href="#">
            <PencilLine size={20}/>
            Editar Seu Perfil
            </a> 
        </footer>
    </aside>
    </>
)
}