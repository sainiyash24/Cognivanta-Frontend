import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        Cognivanta
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/jobs" style={styles.link}>Jobs</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
        <Link to="/admin/login" style={styles.link}>Admin Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2c3e50",
    color: "white"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;
