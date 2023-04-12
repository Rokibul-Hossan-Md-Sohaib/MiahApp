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
import Categories from './src/Pages/Categories/Categories';
import SubCategories from './src/Pages/Categories/SubCategories';
import {Provider} from 'react-redux';
import store from './redux/store';
import SubSubCat from './src/Pages/Categories/SubSubCat';
import catSub from './src/Pages/Categories/catSub';
import ExclusiveMan from './src/Pages/Exclusive/ExclusiveMan';


const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  const options = {
    header: () => null
  }
  return (
    <Provider store={store}>
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
  <Stack.Screen name="Home" component={BottomNavigator}
    options={options}
  />
  <Stack.Screen name="Categories" component={Categories}
    options={options}
  />
  <Stack.Screen name="SubCategories" component={SubCategories}
    options={options}
  />
  <Stack.Screen name="SubSubCat" component={SubSubCat}
    options={options}
  />
  <Stack.Screen name="catSub" component={catSub}
    options={options}
  />
  <Stack.Screen name="ExclusiveMan" component={ExclusiveMan}
    options={options}
  />



</Stack.Navigator>
{/* <Stack.Screen name="Myapp"
       options ={{title: "Myapp"}}
      component={Myapp} />  */}
     {/* </Tab.Navigator> */}


    
   
    </NavigationContainer>
     </Provider>
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
