import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart:[]
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        incCartItemCount:(state,action)=>{
            console.log(action.payload);
            state.cart = state.cart.map((product)=>{

                if(product.id===action.payload){
                    product.count++
                    console.log("HI");
                }
                return product
            })
            console.log(state.cart);
        }
    }
})
export const {addToCart,incCartItemCount} = productSlice.actions
export default productSlice.reducer