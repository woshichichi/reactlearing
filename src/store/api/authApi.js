import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'


export const authApi = createApi(
    {
        reducerPath:'authApi',
        baseQuery:fetchBaseQuery({
         
            baseUrl:'http://127.0.0.1:3007/api/'
          
        }),
        endpoints(build){
            return {
                register: build.mutation({
                    query(user) {
                        return {
                            url:'reguser',
                            method:"post",
                            body:user,
                        }
                    }
                }),
            }
        }
    }
);

export const {
    useRegisterMutation
} = authApi;
