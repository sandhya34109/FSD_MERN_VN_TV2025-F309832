import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our College</h1>
        <p>Your Future Begins Here</p>
        <Link to="/about" className="button">Learn More</Link>
      </div>

      <section className="why">
        <h2>Why Choose Our College?</h2>
        <ul>
          <li>Experienced Faculty</li>
          <li>Modern Infrastructure</li>
          <li>Placement Support</li>
        </ul>
      </section>

      <section>
        <h2>Top Departments</h2>
        <div className="top-box">
          <Link to="/departments">Explore Departments</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
