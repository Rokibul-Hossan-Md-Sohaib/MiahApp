// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const BestSeller = () => {
 
  const avatarRef = React.createRef()
  const firstLineRef = React.createRef()
  const secondLineRef = React.createRef()
  const thirdLineRef = React.createRef()

  React.useEffect(() => {
    const facebookAnimated = (
      400,
      [
        avatarRef.current.getAnimated(),
        Animated.parallel([
          firstLineRef.current.getAnimated(),
          secondLineRef.current.getAnimated(),
          thirdLineRef.current.getAnimated()
        ])
      ]
    );
    Animated.loop(facebookAnimated).start();
  }, [])

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <ShimmerPlaceholder
          ref={avatarRef}
          stopAutoRun
        />
        <View style={{ justifyContent: "space-between" }}>
          <ShimmerPlaceholder
            ref={firstLineRef}
            stopAutoRun
          />
          <ShimmerPlaceholder
            ref={secondLineRef}
            stopAutoRun
          />
          <ShimmerPlaceholder
            ref={thirdLineRef}
            stopAutoRun
          />
        </View>
      </View>
    </View>
  )
}

export default BestSeller

// const styles = StyleSheet.create({})