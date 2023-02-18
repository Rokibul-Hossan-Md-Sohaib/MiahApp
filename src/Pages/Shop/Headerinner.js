import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'solito/link'
import COLORS from '../../colors/colors'
const Headerinner = ({menu}) => {
  console.log("Menu", menu)
  return (
    <View>
      <View className="ps-header__inner">
      <View className="ps-header__left">
       
      </View>
      <View className="ps-header__center">
      
          {menu &&
            menu.map((root, rootIndex) => {
              return (
                <View>
                  {/* <Text>{root.}</Text> */}
                  {/* <Link href={"/" + root.slug}>
                    <Link>
                      {root.root_category}
                    </Link>
                  </Link> */}
                  {/* <View className="mega-menu">
                    <View className="container">
                      <View className="mega-menu__row">
                        {root.category
                          ? root.category.map((category, categoryIndex) => {
                              return (
                                <View
                                  className="mega-menu__column column-flex"
                                  key={categoryIndex}
                                >
                                  <h4>
                                    <Link
                                      href={
                                        "/" + root.slug + "/" + category.slug
                                      }
                                    >
                                      <a>{category.category}</a>
                                    </Link>
                                  </h4>
                                
                                    {category.subcategory
                                      ? category.subcategory.map(
                                          (subcategory, subcategoryIndex) => {
                                            return (
                                              <li key={subcategoryIndex}>
                                                <Link
                                                  href={
                                                    "/" +
                                                    root.slug +
                                                    "/" +
                                                    category.slug +
                                                    "/" +
                                                    subcategory.slug
                                                  }
                                                >
                                                  <a>
                                                    {subcategory.sub_category}
                                                  </a>
                                                </Link>
                                              </li>
                                            );
                                          }
                                        )
                                      : nl}
                              
                                </View>
                              );
                            })
                          : nl}
                      </View>
                    </View>
                  </View> */}
              </View>
              );
            })}
       
      </View>
  
    </View>
    </View>
  )
}

export default Headerinner

