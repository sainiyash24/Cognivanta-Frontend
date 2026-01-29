import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        height: "calc(100vh - 70px)",
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
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Heading animation */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "48px", marginBottom: "20px" }}
        >
          Welcome to Cognivanta
        </motion.h1>

        {/* Text animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}
        >
          We are a technology-driven company helping talent connect with opportunity.
        </motion.p>

        {/* CTA button animation */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            fontSize: "16px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#00c6ff",
            color: "#000",
          }}
        >
          Get Started
        </motion.button>

        {/* Floating subtle animation */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Home;
