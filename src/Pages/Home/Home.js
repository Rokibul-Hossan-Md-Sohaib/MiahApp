import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
// import { NativeBaseProvider, Box, Button } from "native-base";
import VideoPlayer from 'react-native-video-controls';
import {Dimensions} from 'react-native';
import Video from 'react-native-video';
import ShopForMen from './ShopForMen/ShopForMen';
import ShopForWomen from './ShopForWomen/ShopForWomen';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containerV}>
      <ScrollView>
        {/* <View >
 <Video
           source={{ uri: 'https://d25xyv9ldicae3.cloudfront.net/media/miah-web-december-mobile.mp4' }}
          rate={1.0}
          volume={0.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        
        <View style={styles.content}>
          <Text style={styles.text}>Hello</Text>
        </View>
        </View> */}

        <View>
          <Video
            source={{
              uri: 'https://d25xyv9ldicae3.cloudfront.net/media/miah_banner_mobile_19032023.mp4',
            }}
            rate={1.0}
            volume={0.0}
            muted={false}
            resizeMode={'cover'}
            repeat
            style={styles.video}
          />

          <View style={styles.content}>
            {/* <Text style={styles.text}>COMFORT REDEFINE</Text> */}

            <View>
            <Text style={styles.text}>STYLE YO’’LL LOVE</Text>
              <Pressable style={styles.button}
            
              onPress={() =>
                navigation.navigate('ExclusiveMan', {name: "Fastive Collection" ,  main: "festiveProduct" ,others : "ASC"})
              }
              >
                <Text
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 10,
                    fontSize: 20,
                    color: 'black',
                  }}>
                  {' '}
                  Fastive Collection {' '}
                </Text>
              </Pressable>
            </View>

            {/* <View style={{marginTop: 10}}>
              <Pressable style={styles.button}
              
              >
                <Text
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 10,
                    fontSize: 20,
                    color: 'black',
                  }}>
                  {' '}
                  Exclusive for Women{' '}
                </Text>
              </Pressable>
            </View> */}
          </View>
        </View>
        {/* <View>
        <Video
          source={{ uri: 'https://d25xyv9ldicae3.cloudfront.net/media/exclusive-women.m4v' }}
          rate={1.0}
          volume={0.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        
        <View style={styles.content}>
          <Text style={styles.text}>STYLE YO’’LL LOVE</Text>
    
   <View>
   <Pressable
     style={styles.button}
     >
      <Text style={{textAlign: 'center', justifyContent:"center", alignItems: 'center', top:10 , fontSize:20, color: 'black'}}> Exclusive for Women </Text>
     </Pressable>
   </View>
  
        </View>
        </View> */}

        {/* <View>
        <Video
          source={{ uri: 'https://d25xyv9ldicae3.cloudfront.net/media/abaya.m4v' }}
          rate={1.0}
          volume={0.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        
        <View style={styles.content}>
          <Text style={styles.text}>ELEGANT AND MODERN ABAYA</Text>
    
   <View>
   <Pressable
     style={styles.button}
     >
      <Text 
      style={{textAlign: 'center', justifyContent:"center", alignItems: 'center', top:10 , fontSize:20, color: 'black',   fontFamily: 'helvetica'}}>
         Exclusive for Abaya 
         </Text>
     </Pressable>
   </View>
  
        </View>
        </View> */}
        <ShopForMen/>
        <ShopForWomen/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerV: {
    flex: 1,
    // backgroundColor: '#ebebeb',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },

  content: {
    position: 'absolute',
    top: 620,
    justifyContent: 'center',
    left: 95,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    // right: 15
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
