import React, {useState} from 'react';

const BlogContext  = React.createContext();

export const BlogProvider = ({ children }) => { 
    // <View> < this is props.children /> <View>
    // this is not default export so use { } when import
    const [blogPosts,setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts,{ title: `blog post #${blogPosts.length + 1}`} ]); // addBlogPosts === old array + new object 
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost:addBlogPost }}>{children}</BlogContext.Provider>
};

export default BlogContext;
