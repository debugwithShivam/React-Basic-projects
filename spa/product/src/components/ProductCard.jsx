import { motion } from "framer-motion"

function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl p-4"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-3">{product.title}</h2>
      <p className="text-gray-600 text-sm mt-1">
        {product.description}
      </p>
      <div className="mt-2 font-semibold text-lg text-blue-600">
        ${product.price}
      </div>
    </motion.div>
  )
}

export default ProductCard