import React, { useState, useContext } from 'react';
import { View, Text,TextInput,Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {

    const [title,setTitle] = useState('');
    const [content, setContent] = useState(''); 
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput
                style={styles.input} 
                value={title}
                onChangeText={value => setTitle(value)}
            />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput 
                style={styles.input}
                value={content}
                onChangeText={value => setContent(value)}
            />
            <Button 
                title='Add BlogPost'
                onPress={()=> addBlogPost(title,content,()=>navigation.navigate('Index')) }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5
	},
	label: {
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 5
}
});

export default CreateScreen