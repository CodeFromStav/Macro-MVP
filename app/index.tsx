//Login Screen
import { login_style } from '@/components/styles'; // Importing the styles
import SubmitButton from '@/components/SubmitButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//Text Field Username (textinput) https://reactnative.dev/docs/textinput
//Text Feild Password (textinput)

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
      <SafeAreaView style = {login_style.container}>
        
        <TextInput 
          style = {login_style.input}
          onChangeText={setUsername}
          value={usernameText}
          placeholder = "Username" 
          placeholderTextColor={"gray"}
        />
        <TextInput 
          style = {login_style.input}
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

export default TextInputLogin;;

