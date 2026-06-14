import './App.css'
const pro = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High quality sound with noise cancellation.",
    price: "$99",
    rating: 4.5,
    category: "Electronics",
    image: "https://picsum.photos/300/200?1"
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Track your health and notifications.",
    price: "$149",
    rating: 4.2,
    category: "Wearables",
    image: "https://picsum.photos/300/200?2"
  },
  {
    id: 3,
    title: "Gaming Mouse",
    description: "RGB, high DPI, ultra responsive.",
    price: "$59",
    rating: 4.8,
    category: "Gaming",
    image: "https://picsum.photos/300/200?3"
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    description: "Tactile keys for programmers.",
    price: "$129",
    rating: 4.6,
    category: "Accessories",
    image: "https://picsum.photos/300/200?4"
  },
  {
    id: 5,
    title: "4K Monitor",
    description: "Crisp display for productivity.",
    price: "$399",
    rating: 4.4,
    category: "Displays",
    image: "https://picsum.photos/300/200?5"
  },
  {
    id: 6,
    title: "Laptop Stand",
    description: "Ergonomic aluminum stand.",
    price: "$39",
    rating: 4.1,
    category: "Office",
    image: "https://picsum.photos/300/200?6"
  }
];

 function Products() {
  return (
    <div className="products">
      <section className="products-hero">
        <h1>Products</h1>
        <p>Real components. Real layout. Real UI.</p>
      </section>

      <section className="products-grid">
        {pro.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            
            <div className="product-body">
              <h2>{product.title}</h2>
              <p className="category">{product.category}</p>
              <p className="description">{product.description}</p>
              
              <div className="product-footer">
                <span className="rating">⭐ {product.rating}</span>
                <span className="price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products