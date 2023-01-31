import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import COLORS from '../colors/colors';
import addtocard from '../asset/addtocard1.png';
import profile from '../asset/profile1.png';
import bestseller1 from '../asset/bestseller1.png';
import home from '../asset/home1.png';
import search from '../asset/search1.png';
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product';
import BestSeller from '../Pages/BestSeller';
import Profile from '../Pages/Profile';
import Crad from '../Pages/Crad';
import Main from '../Pages/Home/Main';
const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // activeTintColor: COLORS.white,
        showLabel: false,
        // inactiveTintColor: '#F8F8F8',
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
             <Tab.Screen
        name="Main"
        component={Main}
        options={{
          header: () => null,
          tabBarIcon: () => (
            <Image source={home} style={styles.image} />
            // <FontAwesome5
            //     name='home'

            //     size={28}
            // />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: () => (
            <Image source={home} style={styles.image} />
            // <FontAwesome5
            //     name='home'

            //     size={28}
            // />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          header: () => null,
          tabBarIcon: () => (
            <Image source={search} style={styles.image} />
            // <FontAwesome5
            //     name='home'

            //     size={28}
            // />
          ),
        }}
      />

      <Tab.Screen
        name="BestSeller"
        component={BestSeller}
        options={{
          header: () => null,
          tabBarIcon: () => (
            <Image source={bestseller1} style={styles.image} />
            // <FontAwesome5
            //     name='home'

            //     size={28}
            // />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: () => (
            <Image source={profile} style={styles.image} />
            // <FontAwesome5
            //     name='home'

            //     size={28}
            // />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={Crad}
        options={{
          header: () => null,
          tabBarIcon: () => (
            <Image source={addtocard} style={styles.image} />
            // <FontAwesome5
            //     name='home'

            //     size={28}
            // />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});

export default BottomNavigator;
