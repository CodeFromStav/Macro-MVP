import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = { // Define the type of the props
  onPressSubmit: () => void;
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



export default function SubmitButton({ onPressSubmit }: Props) {
    return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPressSubmit}>
     <Text style={styles.buttonLabel}>Submit</Text>
    </TouchableOpacity>
    );
}