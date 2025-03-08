import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      {products.length > 0 && (
        <div>
          {products.slice(page * 10 - 10, page * 10).map((pr) => {
            return (
              <span key={pr.id}>
                <img src={pr.thumbnail} alt={pr.title} />
                <span>{pr.title}</span>
              </span>
            );
          })}
          {products.length > 0 && <div>
            <span>
              <button onClick={() => setPage(page - 1)}>Prev</button>
              <span>{page}</span>
              <button onClick={() => setPage(page + 1)}>Next</button>

            </span>

            </div>}
            
        </div>
      )}
    </div>
  );
};

export default App;
