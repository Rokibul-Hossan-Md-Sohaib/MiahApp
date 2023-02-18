import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Dimensions} from 'react-native';
// import { NativeBaseProvider , Box} from 'native-base';
import COLORS from '../colors/colors';
import {Avatar, Card, Text, Searchbar} from 'react-native-paper';

import {
  VStack,
  Heading,
  Box,
  Divider,
  NativeBaseProvider,
  Button,
  Image,
  Flex,
  Pressable,
} from 'native-base';

const SearceManu = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [imagePlace, setImage] = useState();

  const [info, setInfo] = useState([]);
  const [user, setUser] = useState([]);
  // console.log("########",user)
  const [isLoadImage, setLoadImage] = useState(true);
  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then(response => response.json())
  //     .then(json => setUser(json))
  // },[])

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const getData = async () => {
    try {
      const response = await fetch('https://api.miah.shop/api/buildMenu');
      // const response = await fetch ( 'https://api.miah.shop/api/homeProductList')
      const users = await response.json();
      // console.log(users)
      setUser(users.data);
      setLoading(false);
      // console.log(users)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   setLoading(false);
  //   fetch(
  //     'https://jsonplaceholder.typicode.com/photos'
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setInfo(json);
  //       loadImage(json?.result?.photos[0]);
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(true));
  // }, []);
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 8.0}}>
          CATEGORIES
        </Text>
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          marginBottom: 10,
          backgroundColor: COLORS.white,
          color: COLORS.white,
        }}
      />
      {/* <Button 
title ="HomeScreen"
onPress ={() => navigation.navigate("New") }
>
  </Button>   */}

      <FlatList
        numColumns={2}
        data={user}
        renderItem={({item}) => {
          console.log('items', item.mobile_image);
          return (
            <View>
              <ScrollView flex={1}>
                <NativeBaseProvider>
                  <Pressable
                    w={Dimensions.get('window').width / 2}
                    onPress={() =>
                      navigation.navigate('Categories', {
                        category: item.category,
                        name: item.root_category,
                      })
                    }
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
                      <Card.Cover
                        style={{padding: 15}}
                        source={{
                          uri: `https://images.miah.shop/banner/${item.big_image}`,
                          // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
                        }}
                      />
                      <View style={styles.text}>
                        <Text>{item.root_category}</Text>
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
  );
};
export default SearceManu;

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
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
  },
});
