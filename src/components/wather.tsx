import * as React from 'react'
import {StyleSheet, Image, Text, View, TouchableHighlight} from 'react-native'
import { NavigationParams, NavigationStackScreenOptions } from 'react-navigation'
import * as API from '../helpers/api'
const back = require('../../assets/img/back.png')

interface Props {
  navigation?: NavigationParams
}


export default class Weather extends React.Component <Props, null> {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.place}`,
    headerLeft: (
      <TouchableHighlight onPress={()=>navigation.goBack(null)}> 
        <View style={styles.back}>
          <Image
            style={styles.hamburger}
            source={back}
          />        
        </View> 
      </TouchableHighlight>
    ),
    headerStyle: {backgroundColor: '#512da7'} ,
    headerTitleStyle: { color: '#fff'}
  })
  constructor(props:Props){
    super(props)
    
  } 
  
  render(){
    // if(!this.props.navigation || !this.props.navigation.params) return null
    // const {place} = this.props.navigation.params.state
    console.log('hello')
    return (
      <View style={styles.container}>
        <Text>Wather report</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  back: {
    margin: 10,
    padding: 4
  },
  hamburger: {
    width: 30,
    height: 30
  }
   
})