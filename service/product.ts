// // service/product.ts
// import http from "@/api/interseptors";
// import axios, { AxiosResponse } from 'axios';

// export interface Product {
//   id: number;
//   name: string;
// }

// interface ProductsResponse {
//   products: Product[];
// }

// interface ProductResponse {
//   product: Product;
// }

// // Mahsulotlar ro'yxatini olish funksiyasi
// export const getProduct = async (page: number, limit: number): Promise<Product[]> => {
//   try {
//     const response: AxiosResponse<ProductsResponse> = await http.get("/products", {
//       params: { page, limit },
//     });
//     if (response.status === 200 && response.data?.products) {
//       return response.data.products;
//     }
//     return [];
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return [];
//   }
// };

// // Mahsulotni ID bo'yicha olish funksiyasi
// export const getPro = async (id: number): Promise<Product | null> => {
//   try {
//     const response: AxiosResponse<ProductResponse> = await http.get(`/products/${id}`);
//     if (response.status === 200 && response.data?.product) {
//       return response.data.product;
//     }
//     return null;
//   } catch (error) {
//     console.error('Error fetching product by ID:', error);
//     return null;
//   }
// };

// // Mahsulotni product_id bo'yicha olish funksiyasi
// export const getProductId = async (product_id: number): Promise<Product> => {
//   try {
//     const response: AxiosResponse<ProductResponse> = await http.get(`/product/${product_id}`);
//     return response.data.product;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     throw error;
//   }
// };


// service/product.ts
import http from "@/api/interseptors";
import axios, { AxiosResponse } from 'axios';

export interface Product {
  id: number;
  product_name: string;
  image_url: string[];
  basket: string; // Adjust type if needed
  cost: string;   // Adjust type if needed
  discount: string;
}

interface ProductsResponse {
  products: Product[];
}

interface ProductResponse {
  product: Product;
}
// Mahsulotlar ro'yxatini olish funksiyasi
export const getProduct = async (page: number, limit: number): Promise<Product[]> => {
  try {
    const response: AxiosResponse<ProductsResponse> = await http.get("/products", {
      params: { page, limit },
    });
    if (response.status === 200 && response.data?.products) {
      return response.data.products;
    }
    return [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Mahsulotni ID bo'yicha olish funksiyasi

export const getProductsId = async (id: number): Promise<Product | null> => {
  try {
    const response: AxiosResponse<ProductResponse> = await http.get(`/products/${id}`);
    if (response.status === 200 && response.data?.product) {
      return response.data.product;
    }
    return null;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
};  

// Mahsulotni product_id bo'yicha olish funksiyasi
export const getProductId = async (product_id: number): Promise<Product> => {
  try {
    const response: AxiosResponse<ProductResponse> = await http.get(`/product/${product_id}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
