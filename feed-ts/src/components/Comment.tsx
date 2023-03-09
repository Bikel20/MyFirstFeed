import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    OnDeleteComment: (comment: string) => void;
}

export function Comment({ content, OnDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        OnDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/85197166?v=4"
                    alt="" />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Gabriel Lamberti</strong>
                                <time title='14 de Fevereiro ás 11:35'
                                    dateTime='2023-02-14 11:33:15'>
                                    Cerca de 1h atrás
                                </time>
                            </div>
                            <button onClick={handleDeleteComment} title='Deletar comentario'>
                                <Trash size={24} />
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>
                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}