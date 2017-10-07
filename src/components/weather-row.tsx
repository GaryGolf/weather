import * as React from 'react'
import {View, Text, StyleSheet, ListRenderItemInfo, TouchableHighlight} from 'react-native'


interface Props {
  rowData: ListRenderItemInfo<any>
  onPressItem(place:string):void
}

export default class WeatherRow extends React.PureComponent <Props, null> {
  
  handleButtonPress = e => {
    this.props.onPressItem(this.props.rowData.item.weather.place)
  }

  render(){
    const weather:WeatherReport = this.props.rowData.item.weather
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleButtonPress}>
          <View style={styles.line}>
            <Text style={styles.place}>{weather.place}</Text>
            <Text style={styles.temp}>{weather.condition.temp} {weather.units.temperature}</Text>
          </View>
        </TouchableHighlight>
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
  temp: {
    padding: 10,
    fontSize: 22,
    height: 44,
  }
})