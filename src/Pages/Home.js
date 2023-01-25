import { View, Text , StyleSheet, SafeAreaView, ScrollView , Button, Pressable } from 'react-native'
import React from 'react'
// import { NativeBaseProvider, Box, Button } from "native-base";
import VideoPlayer from 'react-native-video-controls';
import {Dimensions} from 'react-native';
const { height } = Dimensions.get("window")
import Video from 'react-native-video';
const New = ({navigation}) => {
  
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
         source={{ uri: 'https://d25xyv9ldicae3.cloudfront.net/media/exclusive-men.m4v' }}
          rate={1.0}
          volume={0.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        
        <View style={styles.content}>
          <Text style={styles.text}>COMFORT REDEFINE</Text>
    
   <View>
   <Pressable
     style={styles.button}
     >
      <Text style={{textAlign: 'center', justifyContent:"center", alignItems: 'center', top:10 , fontSize:20, color: 'black'}}> Exclusive for Men </Text>
     </Pressable>
   </View>
  
        </View>
        </View>
        <View>
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
        </View>

        <View>
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
      <Text style={{textAlign: 'center', justifyContent:"center", alignItems: 'center', top:10 , fontSize:20, color: 'black'}}> Exclusive for Abaya </Text>
     </Pressable>
   </View>
  
        </View>
        </View>

</ScrollView>
</SafeAreaView>
  )
}

export default New

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
    left: 95

    
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5
    // right: 15
    

  },
  button:{
    width: 250,
    height: 50,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
