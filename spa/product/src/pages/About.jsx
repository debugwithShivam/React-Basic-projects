import { motion } from "framer-motion"
import "../App.css"

function About() {
  return (
    <div className="container">

      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        About Our Store
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          lineHeight: "1.6"
        }}
      >
        <p>
          Welcome to our tech store. We provide high quality electronics and 
          accessories designed to improve your productivity and lifestyle.
        </p>

        <p style={{ marginTop: "15px" }}>
          Our mission is simple: deliver premium products with smooth user 
          experience and fast delivery.
        </p>

        <p style={{ marginTop: "15px" }}>
          We believe in modern web technology, scalable systems, and 
          performance-driven design.
        </p>
      </motion.div>

      <motion.div
        className="grid"
        style={{ marginTop: "40px" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="card">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="card">
          <h2>10+</h2>
          <p>Premium Products</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>
      </motion.div>

    </div>
  )
}

export default About