import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [{
            id:Date.now()*Math.random(),    
            name:"Iphone 16 pro max",
            price:"100000",
            des:"Mo ta san pham",
            avatar:"https://lh3.googleusercontent.com/6JWskyUenAsPyM4cWvfaUX9EIr5TScGuQY-zpamAVtsz5Bh096R_YfwpViednIEO4qC06y8Dl7blytLpxddzwLitouOdAnSS4g=w230-rw",
            pictures:["https://lh3.googleusercontent.com/6JWskyUenAsPyM4cWvfaUX9EIr5TScGuQY-zpamAVtsz5Bh096R_YfwpViednIEO4qC06y8Dl7blytLpxddzwLitouOdAnSS4g=w230-rw"]
        }],
        addModal: false
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        loadModal: (state) => {
            state.addModal = !state.addModal
        },
        addData: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;