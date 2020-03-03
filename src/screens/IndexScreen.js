import React,{useContext} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';



const IndexScreen = () => {
const value = useContext(BlogContext); // hook can only call from inside of component function
    return (
        <View>
            <Text>IndexScreen value: {value} </Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default IndexScreen;