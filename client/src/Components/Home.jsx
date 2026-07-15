import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <nav className="navbar">
        <h2>📚 BookStore</h2>

        <div>
          <Link to="/login">
            <button>User Login</button>
          </Link>

          <Link to="/seller/login">
            <button>Seller Login</button>
          </Link>

          <Link to="/admin/login">
            <button>Admin Login</button>
          </Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Welcome to BookStore</h1>

        <p>
          Discover thousands of books from your favourite authors.
        </p>

        <Link to="/signup">
          <button className="btn">Get Started</button>
        </Link>
      </section>

      <section className="books">

        <h2>Featured Books</h2>

        <div className="book-container">

          <div className="card">
            <h3>Java Programming</h3>
            <p>₹599</p>
          </div>

          <div className="card">
            <h3>React Development</h3>
            <p>₹799</p>
          </div>

          <div className="card">
            <h3>Python Basics</h3>
            <p>₹499</p>
          </div>

          <div className="card">
            <h3>MongoDB Guide</h3>
            <p>₹699</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;