import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProvider } from "./components/UserContext";
import {DefaultTheme, Provider as PaperProvider } from "react-native-paper"
 
import Get from './components/Get'
import Delete from './components/Delete'
import Put from './components/Put'
import Post from './components/Post'

const theme ={
  ...DefaultTheme,
     roundness:2,
     colors:{
      ...DefaultTheme.colors,
      background:'#fff',
      primary:'rgba(31, 143, 255, 1)',
      accent:'purple',
     }
};
 
 
const Stack = createStackNavigator();
 
 
export default function App() {
  return (
   <PaperProvider theme={theme}>
   <NavigationContainer>
      <UserProvider>
        <Stack.Navigator initialRouteName="Get">
          <Stack.Screen options={({ navigation }) => ({
                        title: '',
                        headerTransparent: true,
                    })} name="Get" component={Get}/>
          <Stack.Screen name="Delete" component={Delete}/>
          <Stack.Screen name="Post" component={Post}/>
          <Stack.Screen name="Put" component={Put}/>

        </Stack.Navigator>
      </UserProvider>
   </NavigationContainer>
   </PaperProvider>
  );
}
 
 
 
 
 
App.js