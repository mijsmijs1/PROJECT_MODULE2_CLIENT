import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy } from '@utils'
export default function RouteIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazy.lazyFn(() => import("../pages/home/Home"))()}>
          <Route path="category/:categoryName" element={lazy.lazyFn(() => import("../pages/home/pages/categories/Category.jsx"))()}></Route>
          <Route path="cart" element={lazy.lazyFn(() => import("../pages/home/pages/cart/Cart.jsx"))()}></Route>
          <Route path="receipts" element={lazy.lazyFn(() => import("../pages/home/pages/receipts/Receipt.jsx"))()}></Route>
          <Route path="product-info/:id" element={lazy.lazyFn(() => import("../pages/home/components/product-info/ProductInfo.jsx"))()}></Route>
        </Route>
        <Route path="/authen" element={lazy.lazyFn(() => import("../pages/authen/Authen.jsx"), localStorage.getItem('token') == null)()}></Route>
        <Route path="/admin" element={lazy.lazyFn(() => import("../pages/admin/Admin.jsx"), localStorage.getItem('token') != null)()}>
          <Route path="product/list" element={lazy.lazyFn(() => import("../pages/admin/pages/products/List.jsx"))()}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// false => da
// true => ok