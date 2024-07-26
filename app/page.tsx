// import React, { useEffect, useState } from 'react';
// import product from '@/service/category';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
// }

// const ProductList: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const data = await product.getProducts();
//                 console.log(data);
                
//                 setProducts(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError('Failed to fetch products');
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <h1>Product List</h1>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id}>
//                         <h2>{product.name}</h2>
//                         <p>Price: ${product.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;
import React from 'react'

const Index = () => {
  return (
    <div>Index</div>
  )
}

export default Index