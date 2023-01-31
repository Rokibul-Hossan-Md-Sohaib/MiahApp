import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Dimensions} from 'react-native';
import { Pressable } from 'react-native';
const ShopForMen = () => {
  return (
    <View>
      <Image
  source={{
    uri: 'https://d25xyv9ldicae3.cloudfront.net/media/miah-panjabi-mobile-banner.jpg',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={styles.img}
/>
<View style={styles.content}>
            <Text style={styles.text}>COMFORT REDEFINE</Text>
            <Pressable style={styles.button}>
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
                  Shop for Men{' '}
                </Text>
              </Pressable>
</View>
    </View>
  )
}

export default ShopForMen

const styles = StyleSheet.create({
  img:{
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
})