import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {

    const [comments, setComments] = useState ([
       'Lorem ipsum dolor, sit amet consectetur adipisicing elit!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const dateRelativeToNow = formatDistanceToNow(post.publishedAt,{
        locale: ptBr,
        addSuffix: true, 
    })

    function handleCreateNewComment (event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')

           
    }


    function handleNewCommentChange (event: ChangeEvent <HTMLTextAreaElement> ){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function deleteComment (commentToDelete: string) {

       const commentsWithoutDeletedOne = comments.filter (comment => {
        return comment !== commentToDelete;
       })

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event:InvalidEvent <HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    const isNewCommentEmpty = newCommentText.length === 0
   
    return (
        <>
            <article className={styles.post}>
                <header className={styles.postHeader}>

                    <div className={styles.author}>
                        <Avatar hasBorder src={post.author.avatarUrl}
                        />

                        <div className={styles.authorInfo}>
                            <strong>{post.author.name}</strong>
                            <span>{post.author.role}</span>
                        </div>
                    </div>
                    
                    {/* intl date format ou date-fns */}
                    <time title={publishedDateFormatted}
                        dateTime={post.publishedAt.toISOString()}>
                            {dateRelativeToNow}
                        
                    </time>

                </header>
                <div className={styles.content}>
                    {post.content.map(line =>{
                        if (line.type === 'paragraph') {
                            return <p key={line.content}> {line.content} </p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}> <a href="#"> {line.content} </a> </p>
                        }
                    })}
                 

                    
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    
                    <textarea
                     name="comment"
                     value={newCommentText}
                     placeholder='Deixe seu comentario'
                     onChange={handleNewCommentChange}
                     onInvalid={handleNewCommentInvalid}
                     required
                     />

                   <footer>
                   <button type='submit' 
                           disabled={isNewCommentEmpty}>
                    comentar
                    </button>
                   </footer>
                </form>
                <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                            key={comment} 
                            content={comment}
                            OnDeleteComment={deleteComment}
                            />
                })}
                </div>
            </article>
        </>
    )
}