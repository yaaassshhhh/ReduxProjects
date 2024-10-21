import React from 'react'
import { useGetAllProductQuery } from '../redux/service/apiData'

const AllProducts = () => {
    const {data ,  isError , isLoading} = useGetAllProductQuery();
    // console.log(res);
    if(isError){
        return <div>Something went wrong</div>
    }

    if(isLoading){
         return <div>Loading...</div>
    }
     
  return (
    <div>{
        data?.products.map((p) => (
            <h1 key={p.id} >
                {p.title}
            </h1>
        ))
    }</div>
  )
}

export default AllProducts