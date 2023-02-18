import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import right_arrow from '../../asset/right_arrow_icon.png'
import COLORS from '../../colors/colors'
import { Link } from 'solito/link'

const Inner = ({menu}) => {
  console.log("menu", menu)
  return (
    <View>
        {menu
        ? menu.map((cat, index) => {
            return (
              <ScrollView>
                <Pressable
                  // onPress={() => navigation.navigate('SubCategories', {subcategory: cat.subcategory , nameSub: cat.slug})}
                >
                <View key={index.id} style={styles.category}>

                  {cat.mobile_image ? (
                    
                    <Image
                      alt="name"
                      justifyContent="space-between"
                      style={{height: 50, width: 120, bottom: 0}}
                      resizeMode="contain"
                      source={{
                        uri: `https://images.miah.shop/banner/${cat.mobile_image}`,
                        // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
                      }}
                    />
                  ) : (
                    <Image
                      alt="name"
                      justifyContent="space-between"
                      style={{height: 50, width: 120, bottom: 0}}
                      resizeMode="contain"
                      source={{
                        uri: `https://www.miah.shop/_next/image?url=%2Fimg%2Fdrawer%2Fdrawer-img.jpg&w=750&q=75`,
                        // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
                      }}
                    />
                  )}
                  <View style={styles.textOne}>
                    <Text style={{fontSize: 13}}>{cat.slug}</Text>
                
                  </View> 
                   <Image
                   source={right_arrow} 
                  style={{width: 20, height: 20, justifyContent:'center',
                alignItems: 'center' , top: 20
                }}
                  />
                </View>
                </Pressable>
              </ScrollView>
            );
          })
        : null    
        }
  
    </View>
  )
}

export default Inner

const styles = StyleSheet.create({
  category: {
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: '#171717',
    margin: 20,
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
  },
  textOne: {
    flex: 1,

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});