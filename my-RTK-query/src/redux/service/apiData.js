import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//here we are creating an instance of createApi which is a function that takes an object as an argument
//the object has 3 properties reducerPath, baseQuery and endpoints
// the reducerPath is the same "name" feild we use in createSlice() method
// baseQuery is the base url of the api
// endpoints is an object that has all the api endpoints
//we use builder to perform to types of action on the baseUrl/endpoints
//builder.query() is used to read data
//builder.mutation() is used to change/delete data
//Now RTK query will automatically create a hook for us based on the given endpoints

export const productsApi =  createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({baseUrl : "https://dummyjson.com"}),
    endpoints : (builder) => ({
        //when we only want to read data we use .query() method otherwise if we want change/delete data we use .mutation() method
        getAllProduct : builder.query({
            query : () => '/products',
        }),
        getProductById : builder.query({
            query : (id) => `/products/${id}`,
        }),
        addNewProduct : builder.mutation({
            query : (newProduct) => ({
                url : '/products/add',
                method : 'POST',
                headers : {
                    "content-type" : "application/json", 
                },
                body : newProduct,
            }) 
        }),
        updateProduct : builder.mutation({
            query : ({id , newProduct}) => ({
                url : `/products/${id}`,
                method : 'PUT',
                headers : {
                    "content-type" : "application/json",
                },
                body : newProduct,
            })
        }),
        deleteProduct : builder.mutation({
            query : (id) => ({
                url : `/products/${id}`,
                method : 'DELETE',
            }),
        }),
    }),
})

//'useGetAllProductQuery' is the hook that is created by RTK query
//similary it will we created for other endPoints such as useGetSingleProductQuery, useAddProductMutation , useDeleteProductMutation ... etc
//thus this helps in requesting/sending data to/from the api easily   
export const { useGetAllProductQuery ,useGetProductByIdQuery , useAddNewProductMutation ,useUpdateProductMutation, useDeleteProductMutation} = productsApi;

//now we also have to register this inside our store