import heroImage from "../assets/hero.jpg";

function Home() {
  return (
    <div
      style={{
        height: "calc(100vh - 70px)", // full screen minus navbar
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Welcome to Cognivanta
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "600px" }}>
          We are a technology-driven company helping talent connect with opportunity.
        </p>
      </div>
    </div>
  );
}

export default Home;
