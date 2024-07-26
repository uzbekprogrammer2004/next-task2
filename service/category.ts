import http from "./config";

interface ProductResponse {
    data: any;
}

const product = {
    getProducts: async (): Promise<ProductResponse> => {
        try {
            const response = await http.get<ProductResponse>("/product");
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
};

export default product;
