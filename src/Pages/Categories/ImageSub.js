import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const ImageSub = ({item}) => {
  return (
  <>
    {
      item.variant.map((img) =>
      img.map(x =>{
        console.log("x", x)
        return(
          <Card.Cover
          style={{padding: 15}}
          source={{
            uri: `https://images.miah.shop/product/m_thumb/${
              x[0] ? x[0].img : ""
            }`,
            // uri: `https://www.miah.shop/_next/image?url=https%3A%2F%2Fimages.miah.shop%2Fproduct%2Fm_thumb%2FAmanat_Shah_Lungi_Mullayon_1028_8771_1.jpg&w=1920&q=75`,
          }}
        />
        )
      })
      
      )
      
    }
    </>
  )
}
export default ImageSub

const styles = StyleSheet.create({})