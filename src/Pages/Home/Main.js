import { Pressable, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Home from './Home'
import { Link } from 'solito/link'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const Main = () => {
  return (
    <>
  <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          {/* <Image style={{width: 120, height: 20}} src={('../../asset/211754_heart_icon (1).png')} /> */}
          <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>Hello world</Text>
        </View>
      </View>
    </SkeletonPlaceholder>
    
    </>
  )
}

export default Main

const styles = StyleSheet.create({})