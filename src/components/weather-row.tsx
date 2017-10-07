import * as React from 'react'
import {View, Text, StyleSheet, ListRenderItemInfo} from 'react-native'


interface Props {
  rowData: ListRenderItemInfo<any>
}

export default (props:Props) => {
  const {weather} = props.rowData.item
  return (
    <View style={styles.container}>
      <Text style={styles.place}>{weather.place}</Text>
      <Text style={styles.temp}>{weather.condition.temp} C</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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