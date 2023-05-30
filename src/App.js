import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PostsList from './features/post/PostsList';
import AddPostsForm from './features/post/AddPostsForm';
import './index.css';
// import rootReducer from './reducers';
// const store = createStore(rootReducer);

function App() {
  return (
    <main className="App">
      <AddPostsForm />

      <PostsList />
    </main>
  );
}

export default App;
