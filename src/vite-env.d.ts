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

    const getProfileDetails: (id: number) => Promise<{
        data: Profile;
    }>;
    const getOrderDetails: (id: number) => Promise<OrderDetail>;
}