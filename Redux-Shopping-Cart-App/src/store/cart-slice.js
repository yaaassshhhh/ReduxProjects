import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        itemsList : [],
        totalQuantity : 0,
        showCart : false,
    },
    reducers : {
        addToCart : (state  , action ) => {
            const newItem  = action.payload;
            //check if item already present
            const existingItem = state.itemsList.find((item) => item.id === newItem.id)
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                state.totalQuantity++;            
            }
            else{
                state.itemsList.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.name
                })    
                state.totalQuantity++;            
            }
        },
        removeFromCart : (state , action) => {
            const id = action.payload;
            const toRemove = state.itemsList.find((item) => item.id === id);
            if(toRemove.quantity > 1){
                state.itemsList.find((item) => item.id === id).quantity--;
                state.itemsList.find((item) => item.id === id).totalPrice -= toRemove.price;
                state.totalQuantity--;
            }
            else{
                state.itemsList = state.itemsList.filter((item) => item.id !== id); 
                state.totalQuantity--;
            }
        },
        setShowCart : (state) =>{
             
            state.showCart = !state.showCart;
        },

    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer