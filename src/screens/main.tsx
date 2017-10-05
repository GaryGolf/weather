import * as React from 'react'
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import Options from '../components/media/options'
import Menu from '../components/media/menu'

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
                {/* <Menu/> */}
                <Text>{'<'}</Text>
            </View> 
        </TouchableHighlight>
    ),
    headerRight: (
        <TouchableHighlight onPress={()=>navigation.navigate('DrawerOpen')}> 
             <View style={styles.menu}>
                {/* <Options/> */}
                <Text>{'*'}</Text>
            </View> 
        </TouchableHighlight>
    ),
    headerStyle: {backgroundColor: '#512da7'} ,
    headerTitleStyle: { color: '#fff'}
}) 
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
  },
  menu: {
    margin: 10,
    padding: 4
}
})