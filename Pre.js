import { View, Text , Button, Image, FlatList, StyleSheet, SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NativeBaseProvider , Box} from 'native-base';


const Pre = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [imagePlace, setImage] = useState([]);

  const [info, setInfo] = useState([]);
  const [ user , setUser] = useState()
  const [isLoadImage, setLoadImage] = useState(true);
  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then(response => response.json())
  //     .then(json => setUser(json))
  // },[])
const getData = async () =>{
  try {
    const response = await fetch ( 'https://jsonplaceholder.typicode.com/photos')
    const users = await response.json()
    setUser(users)
    setLoading(false)
    // console.log(users)
  }
 
 catch(err){
  console.log(err)
 }

}
useEffect(() =>{
  getData()
},[])
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
{/* <Button 
title ="HomeScreen"
onPress ={() => navigation.navigate("New") }
>
  </Button>   */}
  <FlatList
  numColumns={2}
data ={user}
renderItem={({item}) =>{
  return(
 
 
        <View   >
           <NativeBaseProvider>

    <Box>Hello world</Box>
    </NativeBaseProvider>
     <View style ={styles.container}>

     <Image
      style={{   width: '49%',
        flexDirection: 'row',
    height: 50}}
      resizeMode='cover'
      source={{uri: item.url}}
      />
     </View >
   {/* <View  style ={styles.container}>

  <Text>
        Name: {item.title}
      </Text> 
   </View> */}
    
      </View>
    )
}}
      />

 
    </View>
 
 

  )
}



export default Pre
const styles = StyleSheet.create({
  container: {
  
        flexDirection: 'row',
  justifyContent: 'space-between',
 
        paddingHorizontal: 20
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',

  },
});