/// <reference types="vite/client" />
declare module "@acc/api" {
    export interface Profile {
        avatar: string;
        email: string;
        id: number;
        first_name: string;
        last_name: string;
    }
    export interface Order {
        id: number;
        title: string;
        price: number;
        quantity: number;
        thumbnail: string;
    }

    export interface OrderDetail {
        total: number;
        products: Order[];
        totalProducts: number;
        totalQuantity: number;
    }

    export interface ProductsDetail {
        total: number;
        products: Product[];
    }

    export interface Product {
        id: string;
        title: string;
        description: string;
        category: string;
        brand: string;
        price: number;
        rating: string;
        thumbnail: string;
        discountPercentage: number;
    }

    const getProfileDetails: (id: number) => Promise<{
        data: Profile;
    }>;

    const getProducts: (limit?: number) => Promise<ProductsDetail>;

    const getOrderDetails: (id: number) => Promise<OrderDetail>;
}