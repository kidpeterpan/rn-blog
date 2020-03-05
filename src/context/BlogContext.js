import React, { useReducer } from 'react';

const BlogContext  = React.createContext();

const blogReducer = (state,action) => {
        switch(action.type){
            case 'add_blogpost':
                return [...state, { title : `blog post#${state.length + 1}`}];
            default :
                return state;
        }


}

export const BlogProvider = ({ children }) => { 
    // <View> < this is props.children /> <View>
    // this is not default export so use { } when import
    const [blogPosts,dispatch] = useReducer(blogReducer,[]);

    const addBlogPost = () => {
        dispatch( { type:'add_blogpost' } );
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost:addBlogPost }}>{children}</BlogContext.Provider>
};

export default BlogContext;
