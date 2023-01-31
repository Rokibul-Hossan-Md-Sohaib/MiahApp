// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const BestSeller = () => {
  return (
    <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"  />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Text>Cancel</Text>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  )
}

export default BestSeller

// const styles = StyleSheet.create({})