import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import COLORS from './src/colors/colors';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
export default function Pre() {
  const [data, setData] = useState([]);
  const [pageCurrent, setpageCurrent] = useState(0);

  useEffect(() => {
    getData();
  }, [pageCurrent]);

  const getData = async () => {
    const apiURL = `https://api.miah.shop/api/productList?subCategoryId=stripe-check&sorting=ASC&device=mobile&page=${pageCurrent}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        console.log('***', resJson.data.product.data);
        setData([...data, ...resJson.data.product.data]);
      });
  };

  const onhandleChange = () => {
    setpageCurrent(pageCurrent + 1);
  };
  return (

      <SafeAreaView  flex={1}>
        <ScrollView>
          {data.map(pro => {
            console.log('pro', pro.id);
            return (
              <View container ={styles.container} >
               
                <Swiper style={{height: Dimensions.get('window').height /2}}>
                  {pro &&
                    pro.variant[0].map(img => {
                      return (
                        <View >
                          <Image
                            style={styles.img}
                            source={{
                              uri: `https://images.miah.shop/product/m_thumb/${
                                // img[1] ? img[1].img : ""
                                img.img
                              }`,
                              // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
                            }}
                          />
                              <Text style={{display:'flex'}}>{pro.name}</Text>      
                        </View>
                      );
                    })}
                </Swiper>
            
              </View>
            );
          })}
        </ScrollView>
        <Pressable onPress={onhandleChange}>
          <Text>Press Me!</Text>
        </Pressable>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
  display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  item: {
    flexDirection: 'row',
    // justifyContent: "space-evenly",
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 9,
    borderRadius: 8,
  },

  itemTitle: {
    fontSize: 13,
    fontWeight: '300',
  },

  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: Dimensions.get('window').width/2 ,
    height: Dimensions.get('window').height/3,
    backgroundColor: COLORS.white,

    borderRadius: 20,
    shadowColor: 'white',
  },
});
