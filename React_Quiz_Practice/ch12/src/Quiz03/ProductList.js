// 여기에 코드 작성
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addProduc, removeProduc } from './productSlice'

function ProductList() {
   const products = useSelector((state) => state.products)
   const dispatch = useDispatch()
   const [newProduct, setNewProduct] = useState('')

   return (
      <div>
         <input value={newProduct} placeholder="상품을 입력하세요" onChange={(e) => setNewProduct(e.target.value)} />
         <button
            onClick={() => {
               dispatch(addProduc(newProduct))
               setNewProduct('')
            }}
         >
            상품 추가
         </button>
         <ul>
            {products.map((prod) => (
               <li key={prod.id}>
                  {prod.text}
                  <button onClick={() => dispatch(removeProduc(prod.id))}>상품 삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
