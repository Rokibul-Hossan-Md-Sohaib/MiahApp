import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {Avatar, Card, Text, Searchbar} from 'react-native-paper';
import {
  NativeBaseProvider,
  Pressable,
} from 'native-base';
import COLORS from '../../colors/colors';
import ImageSub from './ImageSub';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const catSub = ({route, navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [priviousPage, setPrivousPage] = useState(currentPage - 1);
  const onChangeSearch = query => setSearchQuery(query);

  const {name} = route.params;
  console.log('NNNNN', name);
  const [isLoading, setLoading] = useState(true);
  const [pageCurrent, setpageCurrent] = useState(1);
  const [user, setUser] = useState([]);
  console.log('MYYYYYYYYY', user);
  const BASE_URL = `https://api.miah.shop/api/productByCatSubId?
departmentId=
&categoryId=
&subCategoryId=${name}
&offset=${currentPage}
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
&sorting=DESC`;

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.miah.shop/api/productList?categoryId=${name}&sorting=ASC&device=mobile&page=${currentPage}`,
      );
      const users = await response.json();
      console.log('$$$$$$$$$$$', users.data.product.data);
      setUser([...user, ...users.data.product.data]);
      setLoading(false);
      // console.log(users)
    } catch (err) {
      console.log(err);
    }
  };
  const renderItems = ({item}) => {
    console.log('items', item.id);
    return (
  
        <ScrollView flex={1} >
        <NativeBaseProvider>
            <Pressable
              w={Dimensions.get('window').width / 2}
              bg={COLORS.white}
              rounded="md"
              pt={0.3}
              my={3}
              pd={2}
              overflow="hidden"
              >
              <Card style={{marginBottom: 20}}>
                <Swiper style={{height: Dimensions.get('window').height / 4}}>
                  {item && item.variant[0].map(img => {
                      console.log("img" , img.img)
                        return (
                         <View>
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
                   </View>
                        );
                      })
                    }
                </Swiper>
                {/* <ImageSub item={item} /> */}

                <View style={styles.text}>
                  <Text style={{marginTop: 10}}>{item.name}</Text>
                  <Text>{item.name_bangla}</Text>
                  {/* <Text>{item.id}</Text> */}
                  <Text style={{fontWeight: 'bold'}}>TK {item.sales_cost}</Text>
                  {/* <Button>Ok</Button> */}
                </View>
              </Card>
            </Pressable>
            </NativeBaseProvider>
        </ScrollView>
 
    );
  };
  const loadMoreItem = () => {
setCurrentPage(currentPage + 1)
  };


  useEffect(() => {
    getData();
  }, [currentPage]);
  return (
    <View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 8.0}}>
          {name}
        </Text>
      </View>
   

      <FlatList
      
        numColumns={2}
        data={user}
        onEndReachedThreshold={0}
        ListFooterComponent={renderLoader}
     
        onEndReached={loadMoreItem}
        renderItem={renderItems}
      />

    </View>
  );
};

export default catSub;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  img: {
    // height: 100,
    // width: 100,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 4,


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
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.white,
maxHeight: 100,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: '#ffff',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
