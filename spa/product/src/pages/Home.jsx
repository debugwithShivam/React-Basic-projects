import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Our Store
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Discover premium tech products.
      </motion.p>

      <motion.div whileHover={{ scale: 1.1 }}>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View Products
        </Link>
      </motion.div>
    </div>
  )
}

export default Home