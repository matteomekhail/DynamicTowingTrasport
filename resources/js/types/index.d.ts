import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};


export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}