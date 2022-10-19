import { useSelector } from "react-redux";
import { selectAllpost } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const  posts = useSelector(selectAllpost)

  const renderedPost = posts.map(post=> (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>

        <p className="postCredit">
          <PostAuthor userId={post.userId}/>
          <TimeAgo userId={post.date}/>
        </p>
        
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  )
}

export default PostList