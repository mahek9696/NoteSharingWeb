import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      //console.log(action);
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      //console.log(action);
      //const index = state.cartItem.findIndex((el) => el._id === action.payload);
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      console.log(check);
      if (check) {
        toast("These item already exist in your cart");
      } else {
        toast("Added to Cart");
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
        
      }
    },
    deleteCartItem: (state, action) => {
      //console.log(action.payload);
      toast("Item is Deleted Successfully !");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
      //console.log(index);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      console.log(qty);
      const qtyInc = ++qty;
      //console.log(qtyInc);

      state.cartItem[index].qty = qtyInc;
      console.log(qtyInc);
      const price = state.cartItem[index].price;
      console.log(price);
      const total = qtyInc;

      console.log(total);

      state.cartItem[index].total = total;
      console.log(total);
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;

      if (qty > 1) {
        const qtyDec = --qty;
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price;
        const total = qtyDec;

        state.cartItem[index].total = total;
        
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
  },
});
export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;
export default productSlice.reducer;
