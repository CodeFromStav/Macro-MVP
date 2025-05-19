import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const onPressSubmit = () => {
    console.log ('Submit button pressed');
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 150,
        height: 35,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: '#1E90FF', // 💡 Add background color!
        borderRadius: 10,
  },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
  },
});

export default function SubmitButton() {
    return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPressSubmit}>
     <Text style={styles.buttonLabel}>Submit</Text>
    </TouchableOpacity>
    );
}