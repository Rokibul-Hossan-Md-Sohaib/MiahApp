import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect} from 'react'
import Headerinner from './Headerinner'
import { useSelector , useDispatch} from 'react-redux';
import { fetchMenu } from '../../../redux/menu/menuActions';
import Inner from './Inner';
import { useRouter } from 'solito/router'
// import { useDispatch } from 'react-redux/es/exports';

const ShopHeader = ({ navigation}) => {

  const route = useRouter();
  const menu = useSelector((state) => state.menu);
    console.log("manueeeee", menu)
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchStieOptions());
    dispatch(fetchMenu());
  }, []);
  return (
    <View>
 
      {
        route.navigate ==('/') ? (
          <Headerinner menu={menu}/>
        ): <Inner menu ={menu}/>
      }
    
    </View>
  )
}

export default ShopHeader

const styles = StyleSheet.create({})