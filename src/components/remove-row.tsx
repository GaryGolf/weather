import * as React from 'react'
import {View, Text, StyleSheet,Image, ListRenderItemInfo, TouchableHighlight} from 'react-native'

const icon = require('../../assets/img/remove.png')

interface Props {
  rowData: ListRenderItemInfo<any>
  onPressItem(place:string):void
}

export default class WeatherRow extends React.PureComponent <Props, null> {
  
  handleButtonPress = e => {
    this.props.onPressItem(this.props.rowData.item.place)
  }

  render(){
    const place:string = this.props.rowData.item.place
    return (
      <View style={styles.container}>
          <View style={styles.line}>
            <Text style={styles.place}>{place}</Text>
            <TouchableHighlight onPress={this.handleButtonPress}>
              <View style={styles.remove}>
                <Image
                  style={styles.button}
                  source={icon}
                />
              </View>
            </TouchableHighlight>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  line: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  place: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  remove: {
    padding: 10,
  },
  button: {
    width: 24,
    height: 24
  }
})