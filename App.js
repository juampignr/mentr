import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext,useState,useEffect } from 'react';
import wiki from 'wikifox';
import styles from  './global.css'

export const Context = createContext();

const Stack = createNativeStackNavigator();

{/*
function Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Surface" component={Surface} />
      <Stack.Screen name="Shallow" component={Shallow} />
      <Stack.Screen name="Medium" component={Medium} />
    </Stack.Navigator>
  );
}
*/}

export default function App() {

  const [chain,setChain] = useState({curiosityChain:{}});
  const [status,setStatus] = useState("loading")
  const [search,setSearch] = useState("")

  useEffect(() => {

    if(status.indexOf("error") != -1){

      console.log(status)
      //If dev do something, if prod do another thing

    }
  },[status])


  return (

    <Context.Provider value={{chain:chain, setChain:setChain, wiki:wiki, status:status, setStatus:setStatus, search:search, setSearch:setSearch}}>
    <View style={styles.body}>
      {/*<Stack/>*/}
    </View>
    <Text>Hello!</Text>
    </Context.Provider>
  );
}

