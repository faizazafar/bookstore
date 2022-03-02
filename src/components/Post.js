import React from 'react'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getPosts } from '../store/actions'

const Post = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        

        dispatch(getPosts())

    }, [])
    const [ posts , setPosts] = React.useState([])

    const state = useSelector(state=>state.posts)
    console.log('hwllo',state)

    React.useEffect(() => {
        setPosts(state.slice(0, 10))
    }, [state])
    console.log("🚀 ~ file: ShowPosts.js ~ line 13 ~ ShowPosts ~ user", state)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }, [input])
    return (
        <div>
            {
                posts ? posts.map(item=>(
                    <div>
                        {item.title}
                        </div>
                )): 'loading'}
        </div>
    )
}

export default Post
