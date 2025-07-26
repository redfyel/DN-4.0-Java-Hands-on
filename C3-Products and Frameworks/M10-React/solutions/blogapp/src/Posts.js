import React from 'react';
import './Posts.css'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts : []
        }
    }


    // load posts by calling an API
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
        .catch((err) => console.log("oops, couldnt load posts" + err))
    }

    
    // fetch the posts when component monts
    componentDidMount() {
        this.loadPosts();
    }

    // display the posts prettily
    render() {
        return (
            <div className='posts'>
                {this.state.posts.map(post => {
                    return(
                    <div key = {post.id} className='post'>
                        <div className='post-id'>{post.id}</div>
                        <h3 className='post-title'>{post.title}</h3>
                        <p className='post-body'>{post.body}</p>
                    </div>
                )})}
            </div>
        )
    }

    // display error messages happening in this compoenent
    componentDidCatch(error, info) {
        alert("oops, something went wrong :(" + error)
        console.log(error)
        console.log(info)
        this.setState({hasError : true})
    }
}

export default Posts;