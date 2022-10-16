import './App.css';
import PostList from './Feature/posts/PostList';
import AddPostForm from './Feature/posts/AddPostForm';

function App() {
  return (
    <div className="App">
    <AddPostForm/>
    <PostList/>
    </div>
  );
}

export default App;
