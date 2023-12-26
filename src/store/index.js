import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";
import { productReducer } from "./slices/product.slice";
import { categoryReducer } from "./slices/category.slice";
import { receiptReducer } from "./slices/receipt.slice";

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        productStore: productReducer,
        categoryStore: categoryReducer,
        receiptStore: receiptReducer
    }
})