import React, { useState } from 'react';
import { View, Text,TextInput,Button, StyleSheet } from 'react-native';

const CreateScreen = () => {

    const [title,setTitle] = useState('');
    const [content, setContent] = useState(''); 

    return (
        <View>
            <Text style={styles.label}>Enter title:</Text>
            <TextInput
                stye={styles.input} 
                value={title}
                onChangeText={value => setTitle(value)}
            />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput 
                stye={styles.input}
                value={content}
                onChangeText={value => setContent(value)}
            />
            <Button 
                title='Add BlogPost'
                onPress={()=>console.log('Add BlogPost')}
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