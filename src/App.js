import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Post from "./components/Post";
import Register  from "./components/Register";
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Link to={`/add`}>Add</Link>
        <Link to={`/list`}>List</Link>
        <Link to={`/posts`}>Posts</Link>
        <Link to={`/reg`}>Register</Link>
        <Link to={`/login`}>Login</Link>



      </div>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<BookList />} />
        <Route path="/posts" element={<Post></Post>}></Route>
        <Route path="/reg" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
