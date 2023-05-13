import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import User from "./pages/User";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((data) => setUsers(data.results)).catch((err) => console.log(err));
      setLoading(false)
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home users={users} isLoading = {isLoading
            } />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:userId" element={<User users={users}/>}/>
          </Routes>
        </main>
        <footer className="footer">Made with Love by HGGS</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
