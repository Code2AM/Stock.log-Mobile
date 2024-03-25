import { create } from "zustand";


export const useUpdate = create((set) => ({
    needUpdateBuy: false,

    setNeedUpdateBuy: (value)=>set({needUpdateBuy : value}),
}));

