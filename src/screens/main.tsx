import * as React from 'react'
import { Image, View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
const hamburger = require('../../assets/img/hamburger.png')

interface Props {
  navigation?: NavigationParams
}
interface State {}

export default class Main extends React.Component <Props, State> {
  static navigationOptions = ({navigation}) => ({
    title: 'Weather',
    headerLeft: (
      <TouchableHighlight onPress={()=>navigation.navigate('DrawerOpen')}> 
        <View style={styles.menu}>
          <Image
            style={styles.hamburger}
            source={hamburger}
          />
        </View> 
      </TouchableHighlight>
    ),
    headerStyle: {backgroundColor: '#999'} ,
    headerTitleStyle: { color: '#eef'}
  }) 

  navigate = (place:string) => {
    this.props.navigation.navigate('Weather',{place})
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Weather App</Text>
        <TouchableHighlight 
          onPress={e=>this.navigate('Local Weather')}>
          <Text>Local Weather</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={e=>this.navigate('Moscow')}>
          <Text>Moscow</Text>
        </TouchableHighlight>
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
  },
  menu: {
    margin: 10,
    padding: 4
  },
  hamburger: {
    width: 30,
    height: 30
  }
})