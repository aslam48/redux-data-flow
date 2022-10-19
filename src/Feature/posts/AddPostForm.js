import React, {useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { postAdded } from './postsSlice'
import {selectAllUsers} from '../User/UserSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(" ")
    const [content, setContent] = useState(" ")
    const [userId, setUserId] = useState(" ")

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content){
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle(" ")
            setContent(" ")
            setUserId(" ")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  return (
   <section>
    <h2>Add a New Post</h2>
    <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input type="text" id="postTitle" name='postTitle' value={title} onChange={onTitleChange}/>


        <label htmlFor='postAuthor'>Author:</label>
        <select id='postAuthor' value={userId}  onChange={onAuthorChanged}>
            <option value=''> </option>
            {usersOption}
        </select>

        <label htmlFor='postContent'>Post content:</label>
        <textarea type="text" id="postContent" name='postContent' value={content} onChange={onContentChanged}/>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>save post</button>
        
    </form>
   </section>
  )
}


export default AddPostForm 