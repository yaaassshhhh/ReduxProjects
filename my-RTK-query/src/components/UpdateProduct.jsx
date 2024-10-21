import React from 'react'
import { useUpdateProductMutation } from '../redux/service/apiData';


const UpdateProduct = ({productId}) => {

    const [updateProduct , {data , error , isLoading }] = useUpdateProductMutation();
    
    if(error){
        return <div>Something went wrong</div>
    }

    if(isLoading){
         return <div>Loading...</div>
    }

    const handleUpdate = async() => {
        try {
            const updatedProductdata = {
                title : "updates",
            }
            await updateProduct({id : productId , newProduct : updatedProductdata, })
        } catch (error) {
            console.log("error in updating product" , error);
        }
    }

  return (
    <div>
        <h2>{data?.id}</h2>
        <button onClick={handleUpdate} disabled = {isLoading}>
            Update Product
        </button>
    </div>
  )
}

export default UpdateProduct