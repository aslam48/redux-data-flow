import { useSelector } from "react-redux";
import { selectAllUsers } from "../User/UserSlice";



const PostAuthor = ({userId}) => {
 const users = useSelector(selectAllUsers)

 const Author = users.find(user => user.id === userId);

 return <span>by {Author ? Author.name : "Unknown author"}</span>
}

export default PostAuthor