import React from 'react';

const BlogContext  = React.createContext();

export const BlogProvider = ({ children }) => { 
    // <View> < this is props.children /> <View>
    // this is not default export so use { } when import
    return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>
};

export default BlogContext;
