import { createSlice } from "@reduxjs/toolkit";

const storeInLocak = (data) => {
  localStorage.setItem("cart", JSON.stringify(data))
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,//Всего Элементов 
    totalAmounts: 0,//Общее количество
    deliveryCharge: 10,//Стоимость доставки
  },
  reducers: {
    addToCart(state, action) {  //Добавить карточку.
      const existingItems = state.data.find(
        (items) => items.id === action.payload.id
      );
      if (existingItems) {
        const tempCart = state.data.map((item) => {
          if(item.id === action.payload.id) {
            let newQuty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQuty * item.price;
            return{
              ...item,
              quantity: newQuty,
              totalPrice: newTotalPrice
            }
          } else {
            return item
          }
        })
        state.data = tempCart
        storeInLocak(state.data)
      } else {
        state.data.push(action.payload);
        storeInLocak(state.data);
      }
    },
    updateQuantity: (state, action) => { //Количество обновлений.
      const {id, quantity} = action.payload;
      const itemToUpdata = state.data.find((item) => item.id === id)

      if(itemToUpdata) {
        const validQuntity = Math.max(quantity || 1,1)
        itemToUpdata.quantity = validQuntity;
        itemToUpdata.totalPrice = itemToUpdata.price * quantity;
      }
    },
    removeItem: (state, action) => { //Удалить элемент
      const tempCart = state.data.filter((item) => item.id !== action.payload.id);
      state.data = tempCart;
      storeInLocak(state.data);
    },
    getCartTotal: (state,action) => { //Получить карту и итог
      state.totalAmounts = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice)
      }, 0);
      state.totalItems = state.data.length;
    }
  }
})

export const { addToCart, removeItem, getCartTotal, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;