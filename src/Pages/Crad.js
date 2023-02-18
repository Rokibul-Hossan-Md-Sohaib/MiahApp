import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

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
    <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={data}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  </View>  )
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});
export default Card;