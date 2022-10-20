import { useSelector } from "react-redux";
import { selectAllpost } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const  posts = useSelector(selectAllpost)

const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPost = orderedPosts.map(post=> (
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>

        <p className="postCredit">
          <PostAuthor userId={post.userId}/>
          <TimeAgo timeStamp={post.date}/>
        </p>
        <ReactionButton post={post}/>
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