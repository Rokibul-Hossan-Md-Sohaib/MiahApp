/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Pages/Home/Home';

import Myapp from './src/Myapp/Myapp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './src/navigator/BottomNavigator';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  const options = {
    header: () => null
  }
  return (
    <NavigationContainer>
   {/* <Tab.Navigator
   > */}
      {/* <Stack.Screen name="Home"
       component={Home} 
       options ={{title: "Welcome"}} 
       /> */}
       {/* <Tab.Screen name="New"
       options ={options}
      component={New} 
    
      />
     */}
 <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true} />

<Stack.Navigator>
  <Stack.Screen name="HomeScreen" component={BottomNavigator}
    options={options}
  />
  <Stack.Screen name="SearchManuScreen" component={BottomNavigator}
    options={options}
  />
  <Stack.Screen name="BestSellerScreen" component={BottomNavigator}
    options={options}
  />
  <Stack.Screen name="ProfileScreen" component={BottomNavigator}
    options={options}
  />
  <Stack.Screen name="CardScreen" component={BottomNavigator}
    options={options}
  />


</Stack.Navigator>
{/* <Stack.Screen name="Myapp"
       options ={{title: "Myapp"}}
      component={Myapp} />  */}
     {/* </Tab.Navigator> */}


    
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
