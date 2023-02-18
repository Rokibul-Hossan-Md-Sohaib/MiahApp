import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react'
import {Dimensions} from 'react-native';
import {Avatar, Card, Text, Searchbar} from 'react-native-paper';

import {
  VStack,
  Heading,
  Box,
  Divider,
  NativeBaseProvider,
  Button,

  Flex,
  Pressable,
} from 'native-base';
import COLORS from '../../colors/colors';
import ImageSub from './ImageSub';



const SubSubCat = ({route, navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  const {name} = route.params;
  console.log("NNNNN", name)
  const [isLoading, setLoading] = useState(true);
const [imagePlace, setImage] = useState();

const [info, setInfo] = useState([]);
const [user, setUser] = useState([]);
console.log("MYYYYYYYYY",user)
const BASE_URL = `https://api.miah.shop/api/productByCatSubId?
departmentId=
&categoryId=
&subCategoryId=${name}
&offset=0
&promoProduct=
&attribute=
&tags=
&price=
&color=
&fabric=
&occasion=
&price=
&sizes=
&pattern=
&sorting=DESC`

const getData = async (url) => {
  
  try {
    const response = await fetch(url );
    // const response = await fetch ( 'https://api.miah.shop/api/homeProductList')
    const users = await response.json();
    console.log("$$$$$$$$$$$",users.data.product)
    setUser(users.data.product);
    setLoading(false);
    // console.log(users)
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  getData(BASE_URL);
}, []);
  return (
       <View style={{backgroundColor: 'white'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 8.0}}>
          {name}
        </Text>
      </View>
      {/* <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          marginBottom: 10,
          backgroundColor: COLORS.white,
          color: COLORS.white,
        }}
      /> */}
      {/* <Button 
title ="HomeScreen"
onPress ={() => navigation.navigate("New") }
>
  </Button>   */}

      <FlatList
        numColumns={2}
        data={user}
        renderItem={({item}) => {
          console.log('items', item);
          return (
            <View >
             
              <ScrollView flex={1}>
                <NativeBaseProvider>
                  <Pressable
                    w={Dimensions.get('window').width / 2}
                    // onPress={() =>
                    //   navigation.navigate('Categories', {
                    //     category: item.category,
                    //     name: item.root_category,
                    //   })
                    // }
                    bg={COLORS.white}
                    rounded="md"
                    pt={0.3}
                    my={3}
                    pd={2}
                    overflow="hidden">
                    <Card>
                      {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
                      {/* <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content> */}
    {/* {
      item.map((img) =>
      img.map(x =>{
        console.log("x", x)
        return(
          <Card.Cover
          style={{padding: 15}}
          source={{
            uri: `https://images.miah.shop/product/m_thumb/${x.img}`,
            // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
          }}
        />
        )
      })
      
      )
      
    } */}
  {
     item.variant && item.variant.map((img) =>
     
   {   
        return(

      <View>
     
            <Image
          style={styles.img}
          source={{
            uri: `https://images.miah.shop/product/m_thumb/${
              img[1] ? img[1].img : ""
              // x.img
            }`,
            // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
          }}
        />
      </View>
        )}
  
      
      )
      
    }
{/* <ImageSub item={item} /> */}

                    
                      <View style={styles.text}>
                        <Text style={{marginTop:5 }}>{item.name}</Text>
                        <Text>{item.name_bangla}</Text>
                        <Text>{item.id}</Text>
                        <Text style={{ fontWeight: 'bold',}}>TK {item.sales_cost}</Text>
                        {/* <Button>Ok</Button> */}
                      </View>
                    </Card>
                  </Pressable>
                </NativeBaseProvider>
              </ScrollView>
            </View>
          );
        }}
      />

      <Card>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
        {/* <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content> */}
        <Card.Cover
          source={{
            uri: `https://www.miah.shop/_next/image?url=%2Fimg%2Fdrawer%2Fdrawer-img.jpg&w=750&q=75`,
            // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
          }}
        />
      </Card>
    </View>

  )
}

export default SubSubCat

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/4,
    backgroundColor: COLORS.white,
    
    borderRadius: 20,
    shadowColor: 'white',
  },
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stretch: {
    // width: 177,
    // height: 189,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // backgroundColor: 'black',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,

  },
});