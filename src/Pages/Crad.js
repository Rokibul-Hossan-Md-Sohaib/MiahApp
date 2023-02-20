// import React from 'react';
// import { Text, Dimensions, StyleSheet, View } from 'react-native';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';

// const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

// const Card = () => (
//   <View style={styles.container}>
//     <SwiperFlatList
//       autoplay
//       autoplayDelay={2}
//       autoplayLoop
//       index={2}
//       showPagination
//       data={colors}
//       renderItem={({ item }) => (
//         <View style={[styles.child, { backgroundColor: item }]}>
//           <Text style={styles.text}>{item}</Text>
//         </View>
//       )}
//     />
//   </View>
// );

// const { width } = Dimensions.get('window');
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   child: { width, justifyContent: 'center' },
//   text: { fontSize: width * 0.5, textAlign: 'center' },
// });

// export default Card;













import React from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper'
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
const colorss = ['tomato', 'thistle', 'skyblue', 'teal'];
const data = [
  {
name: "rokib",
id: 1
},
{
  name:"hossan",
}
]
const Card = () => {

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
 {
  data.map(x =>{
    return(
      <View style={styles.slide1}>
<Text> {x.name}</Text>
      </View>
    )
  })
 }
  </Swiper>
  )
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {},

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default Card;