import React from 'react'
import AllProducts from './components/AllProducts'
import AddNewProduct from './components/AddNewProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'

 const App = () => {
  return (
    <div>
    <DeleteProduct productId = {3} />
    <UpdateProduct productId = {4} />
    <AddNewProduct/>
      <AllProducts/>
    </div>
  )
}
export default App