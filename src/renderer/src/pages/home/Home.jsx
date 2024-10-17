import React, { useEffect, useState } from 'react'

const Home = () => {
  
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [value, setValue] = useState('')


  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Handle data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Call fetch functions on component mount
  useEffect(() => {
   
    fetchProducts();
  }, []);

  // Create a new category
  const handleCreateCategory = async () => {
    const newCategory = { name: value }; // You can customize this
    try {
      const response = await fetch('http://localhost:3000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
      });

      if (!response.ok) {
        throw new Error('Failed to create category');
      }

      const createdCategory = await response.json();
      console.log('Category created:', createdCategory);
      setValue(''); // Clear the input
      fetchCategories(); // Refresh the categories list
    } catch (err) {
      console.error('Error creating category:', err);
      setError(err.message);
    }
  }

  return (
    <div>
      <h1>Categories and Products</h1>
      <h2>Create Category</h2>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleCreateCategory}>Create Category</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <span>{new Date(category.createdAt).getHours()}</span>
          </li>
        ))}
      </ul>

      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home;
