import React, {useState}from 'react'
import { useDispatch } from 'react-redux'


import { postAdded } from './postsSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState(" ")
    const [content, setContent] = useState(" ")

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content){
            dispatch(
                postAdded(title, content)
            )
            setTitle(" ")
            setContent(" ")
        }
    }
  return (
   <section>
    <h2>Add a New Post</h2>
    <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input type="text" id="postTitle" name='postTitle' value={title} onChange={onTitleChange}/>
      
        <label htmlFor='postContent'>Post content:</label>
        <textarea type="text" id="postContent" name='postContent' value={content} onChange={onContentChanged}/>
        <button type="button" onClick={onSavePostClicked}>save post</button>
    </form>
   </section>
  )
}

export default AddPostForm