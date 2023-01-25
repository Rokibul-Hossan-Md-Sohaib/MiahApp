import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../colors/colors';
import addtocard from '../asset/addtocard.png'
import profile from '../asset/profile.png'
import plus from '../asset/plus.png'
import home from '../asset/home.png'
import search from '../asset/search.png'
import Home from '../Pages/Home';
import SearceManu from '../Pages/SearceManu';
import BestSeller from '../Pages/BestSeller';
import Profile from '../Pages/Profile';
import Crad from '../Pages/Crad';
const Tab = createBottomTabNavigator();
const BottomNavigator = () =>{
  return (
    <Tab.Navigator
    screenOptions={{
        // activeTintColor: COLORS.white,
        showLabel: false,
        // inactiveTintColor: '#F8F8F8',
        style: {
            height: 55,
            borderTopWidth: 0,
            elevation: 0
        },
    }}
>
    
<Tab.Screen name="Home"

                    component={Home}
                    options={{
                        header: () => null,
                        tabBarIcon: () => (
                            <Image 
                            source={home}
                            />
                            // <FontAwesome5
                            //     name='home'
                               
                            //     size={28}
                            // />
                        )
                    }}
                />

<Tab.Screen name="SearceManu"

                    component={SearceManu}
                    options={{
                        header: () => null,
                        tabBarIcon: () => (
                            <Image 
                            source={search}
                            style={styles.image}
                            />
                            // <FontAwesome5
                            //     name='home'
                               
                            //     size={28}
                            // />
                        )
                    }}
                />


<Tab.Screen name="BestSeller"

component={BestSeller}
options={{
    header: () => null,
    tabBarIcon: () => (
        <Image 
        source={plus}
        style={styles.image}
        />
        // <FontAwesome5
        //     name='home'
           
        //     size={28}
        // />
    )
}}
/>

<Tab.Screen name="Profile"

component={Profile}
options={{
    header: () => null,
    tabBarIcon: () => (
        <Image 
        source={profile}
        style={styles.image}
        />
        // <FontAwesome5
        //     name='home'
           
        //     size={28}
        // />
    )
}}
/>
<Tab.Screen name="Card"

component={Crad}
options={{
    header: () => null,
    tabBarIcon: () => (
        <Image 
        source={addtocard}
        style={styles.image}
        />
        // <FontAwesome5
        //     name='home'
           
        //     size={28}
        // />
    )
}}
/>
</Tab.Navigator>
  )
}
const styles = StyleSheet.create({

    image:{
        width: 30,
        height: 30,    }
})

export default BottomNavigator;