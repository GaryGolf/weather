import * as React from 'react'
import { Provider, Store } from 'react-redux'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import store from './store'
import Main from './screens/main'

interface Props {}
interface State {}

const Stack = {
  Main: { screen: Main}
}

const Drawer = {
  MainStack: {name: 'MainStack', screen: StackNavigator(Stack, {initialRouteName: 'Main'})}
}

const Router = StackNavigator({Drawer:{name:'Drawer',screen:DrawerNavigator(Drawer)},...Stack},{headerMode: 'none'})

export default class TaxiApp extends React.Component<Props,State>{
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}