import React from 'react'
import { useAddNewProductMutation } from '../redux/service/apiData'

const AddNewProduct = () => {
    const [addNewProduct , {
        data , error , isLoading
    }] = useAddNewProductMutation();

    if(error){
        return <div>Something went wrong</div>
    }

    if(isLoading){
         return <div>Loading...</div>
    }

    const handleAddProduct = async() => {
         try{
            const newProduct = {
                id : 101,
                title : 'New Product',
                description : 'This is a new product',
            };
            await addNewProduct(newProduct);
            
         }catch (err){
                console.log("error in adding new product" , err);
         }
    }
  return (
    <div>
    <h2>{data?.id}</h2>
        <button onClick={handleAddProduct} disabled = {isLoading} >Add New Product</button>
    </div>
  )
}

export default AddNewProduct