import { StyleSheet, View,Image , Pressable,ScrollView } from 'react-native'
import React from 'react'
import {Avatar, Card, Text, Searchbar} from 'react-native-paper';
import COLORS from '../../colors/colors';

import right_arrow from '../../asset/right_arrow_icon.png'

const SubCategories = ({route, navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const {subcategory, nameSub} = route.params;

  console.log('nameSub', subcategory);
  return (
    <View>
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 8.0}}>
          {nameSub}
        </Text>
      </View>
      <View
  style={{
  
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{marginBottom: 10 , backgroundColor: COLORS.white, color: COLORS.white,}}
      />
      {
        subcategory ? subcategory.map((subCat , subIndex) =>{
          return (
            <ScrollView>
          
            <View>
             <View
              style={{
   

  borderBottomWidth: StyleSheet.hairlineWidth,
}}
/>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Pressable
              onPress={() => navigation.navigate('SubSubCat', {name: subCat.slug})}
            >
               <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>{subCat.slug}</Text>
              </Pressable>
           
            {/* <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>{subCat.slug}</Text> */}
            {/* <Image
                   source={right_arrow} 
                  style={{width: 20, height: 20, justifyContent:"space-between",
                alignItems: 'flex-end' , top: 10, left: 200
                }}/> */}
            </View>
              <View
              style={{
   height: 20,
  borderBottomWidth: StyleSheet.hairlineWidth,
}}
/>
              </View>
           
              </ScrollView>
          )
        
        }) : null
      }
    </View>
  )
}

export default SubCategories

const styles = StyleSheet.create({
  
})