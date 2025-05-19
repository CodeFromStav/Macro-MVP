//Login Screen
import React from 'react';
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Title Macro App

//Text Field Username (textinput) https://reactnative.dev/docs/textinput
//Text Feild Password (textinput)

//Button redirect to Gmail login
//Button redirect to Facebook login
//Button redirect to Apple login
//Button redirect to X login

const TextInputLogin = () => { 
  const [username, setUsername] = React.useState("Username");
  const [password, setPassword] = React.useState("Password");

  return ( 
    //Safe ensures text wont be blocked by screen edges/notch
    <SafeAreaProvider> 
      <SafeAreaView>
        <TextInput
          style = {styles.input}
          onChangeText={setUsername}
          value={username}
        />
        
        <TextInput 
          style = {styles.input}
          onChangeText={setPassword}
          value={password}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputLogin

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }
