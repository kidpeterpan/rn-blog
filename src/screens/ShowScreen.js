import React, { useContext} from 'react';
import {View , Text , StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    
    const id = navigation.getParam('id');
    const { state } = useContext(Context);
    const blogPost = state.find(blog => blog.id === id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({});

export default ShowScreen;