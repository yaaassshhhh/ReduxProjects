import React from 'react'
import { useDeleteProductMutation } from '../redux/service/apiData';
const DeleteProduct = ({productId}) => {

    const [deleteProduct , {data , error , isLoading }] = useDeleteProductMutation();
    if(error){
        return <div>Something went wrong</div>
    }

    if(isLoading){
         return <div>Loading...</div>
    }

    const HandleDeleteProduct = async() => {
        try {
            await deleteProduct(productId);
        } catch (error) {
            console.log("error in deleting product" , error);
        }
    }

  return (
    <div>
        <h2>{data?.id ? `${data.id} success in delete` : "" }</h2>
        <button onClick={HandleDeleteProduct} disabled ={isLoading}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct