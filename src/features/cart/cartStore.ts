import { ICartItems } from '@/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ICartStore {
  cartArr: ICartItems[];
  setCartArr: (data: ICartItems[]) => void;
  allChecked: boolean;
  setAllChecked: (data: boolean) => void;
  orderArr: ICartItems[];
  setOrderArr: (data: ICartItems[]) => void;
  allCheckedOrder: boolean;
  setAllCheckedOrder: (data: boolean) => void;
}

const defaultCartItems: ICartItems[] = [
  {
    id: 1,
    title: 'Молоко ЭкоНива, 1,5%',
    branch: 'Yashnaobod',
    price: 18000,
    totalPrice: 18000,
    img: './молоко.jpg',
    checked: false,
    amount: 1,
    beforeDiscount: 25000,
  },
  {
    id: 2,
    title: 'Молоко ЭкоНива, 1,3%',
    branch: 'Parkent',
    price: 15000,
    totalPrice: 15000,
    img: './молоко.jpg',
    checked: false,
    amount: 1,
    beforeDiscount: 22000,
  },
  {
    id: 3,
    title: 'Молоко ЭкоНива, 1,2%',
    branch: 'Chilozor',
    price: 13000,
    totalPrice: 13000,
    img: './молоко.jpg',
    checked: false,
    amount: 1,
    beforeDiscount: 20000,
  },
];

export const useCartStore = create<ICartStore>()(
  devtools(
    persist(
      (set) => ({
        cartArr: defaultCartItems,
        setCartArr: (data) => set({ cartArr: data }),
        allChecked: false,
        setAllChecked: (data) => set({ allChecked: data }),
        orderArr: [],
        setOrderArr: (data) => set({ orderArr: data }),
        allCheckedOrder: false,
        setAllCheckedOrder: (data) => set({ allCheckedOrder: data }),
      }),
      {
        name: 'cart-store',
        partialize: (state) => ({
          allChecked: state.allChecked,
          allCheckedOrder: state.allCheckedOrder,
        }),
      }
    )
  )
);
