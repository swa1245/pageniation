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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {products.length > 0 && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {products.slice(page * 10 - 10, page * 10).map((pr) => (
              <div
                key={pr.id}
                style={{
                  width: '200px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  background: '#fff',
                }}
              >
                <img
                  src={pr.thumbnail}
                  alt={pr.title}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <p style={{ marginTop: '10px', fontSize: '14px' }}>
                  {pr.title}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              style={{
                padding: '10px 15px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '5px',
                marginRight: '10px',
              }}
            >
              Prev
            </button>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{page}</span>
            <button
              onClick={() => setPage(page + 1)}
              style={{
                padding: '10px 15px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '5px',
                marginLeft: '10px',
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
