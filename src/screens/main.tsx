import * as React from 'react'
import { View, Text, StyleSheet} from 'react-native'

interface Props {}
interface State {}

export default class Main extends React.Component <Props, State> {
  render(){
    return (
      <View style={styles.container}>
        <Text>Weather App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  }
})