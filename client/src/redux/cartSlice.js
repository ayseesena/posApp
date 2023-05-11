import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    tax: 8, 
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if(findCartItem){
        findCartItem.quantity= findCartItem.quantity+1
      }else{
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.price
      //sepetteki ürününü fiyatını aldık

    
      },
      deleteCart: (state, action) => {
    
        state.cartItems =state.cartItems.filter(
          (item) => item._id !== action.payload._id
        )
        state.total -= action.payload.price * action.payload.quantity;
      },
      increase: (state,action) => {
        const cartItem = state.cartItems.find(
          (item) => item._id === action.payload._id
        );
        cartItem.quantity += 1;
        state.total += cartItem.price;
      },

      decrease: (state,action) => {
        const cartItem = state.cartItems.find(
          (item) => item._id === action.payload._id
        );
        cartItem.quantity -= 1;
        if(cartItem.quantity === 0) {
          state.cartItems =state.cartItems.filter(
            (item) => item._id !== action.payload._id
          )
        } state.total -= cartItem.price;
      },
     
      reset:(state) => {
        state.cartItems = [];
        state.total = 0;
      },

  },
});
//increase arttırma işlemi
//deleteCart ürünü silme işlemi
//addProduct ürünü ekleme işlemi
// const findCartItem = state.cartItems.find((item) => item._id === action.payload._id); tıklaığın ürünü bulma işlemi
//  const findCartıtem eklediğim ürürn olup olmadığına bakıyor
//reducer içinde yazdıklarımız actions olarak geçiyor.
// reducer içine fonksiyon yazıyoruz
//bu reducer ulaşabilmek için export etmemiz gerekiyor.
//productItem import ettik 
//addProduct: (state = bu initialState: {cartItems:[],},  kapsamakta
//  state.cartItems = state içindeki cartItem ulaştık
//cartItem sepete eklediğimiz ürünleri array içinde tutuyor.
//cartItems sı use Selector ile çekiyoruz.
export const { addProduct,deleteCart,increase ,decrease,reset} = cartSlice.actions;
export default cartSlice.reducer;