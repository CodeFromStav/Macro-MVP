//Login Screen
import SubmitButton from '@/components/SubmitButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


//Text Field Username (textinput) https://reactnative.dev/docs/textinput
//Text Feild Password (textinput)

//Button redirect to Gmail login
//Button redirect to Facebook login
//Button redirect to Apple login
//Button redirect to X login


const TextInputLogin = () => { 
  const [usernameText, setUsername] = React.useState("");
  const [passwordText, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!usernameText || !passwordText) {
      Alert.alert('Please fill in all fields');
      return;
    } 
    router.push('/diary'); // Redirect to the diary page
  };

  return ( 
    //Safe ensures text wont be blocked by screen edges/notch
    <SafeAreaProvider> 
      <SafeAreaView style = {styles.container}>
        
        <TextInput 
          style = {styles.input}
          onChangeText={setUsername}
          value={usernameText}
          placeholder = "Username" 
          placeholderTextColor={"gray"}
        />
        <TextInput 
          style = {styles.input}
          onChangeText={setPassword}
          value={passwordText}
          placeholder = "Password"
          placeholderTextColor={"gray"}
          />
        
        <SubmitButton onPressSubmit={ handleSubmit }/>

      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#F5FCFF", // Background color
  },
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
});

export default TextInputLogin;;

