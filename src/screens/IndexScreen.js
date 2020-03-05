import React,{useContext} from 'react';
import {View, Text,StyleSheet, FlatList,Button} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(BlogContext); // hook can only call from inside of component function
    
    return (
        <View>
            <Button
                title='Add Blog Post'
                onPress={() => addBlogPost()}
            />
            <FlatList 
                data={state}
                keyExtractor={ blogPost => blogPost.title }
                renderItem={({item}) => <Text>{item.title}</Text> }
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default IndexScreen;