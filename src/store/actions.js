export const addBook = (payload) => {
    return {type:'ADDBOOK',payload}
}
export const showBooks = () =>{
    return {type: 'LIST'}
}

export const getPosts = ()=>{
    return {
        type:"GET_POST"
        // check in reducer or saga
    }
}

export const getPostsSuccess = (payload)=>{
    return {
        type:"GET_POST_SUCCESS", payload
    }
}
export const getPostsFailure = (payload)=>{
    return {
        type:"GET_POST_FAILURE", payload
    }
}

export const getBooks = ()=>{
    return { type: "GET_BOOKS"}
}
export const getBooksSuccess = (payload)=>{
    return { type: "GET_BOOKS_SUCCESS" , payload}
}
export const getBooksFailure = (payload)=>{
    return { type: "GET_BOOKS_FAILURE" , payload}
}