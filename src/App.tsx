import React, { Component } from 'react';
import ScanList from './ScanList';
import ScanDetail from './ScanDetail';
import { StackNavigator } from 'react-navigation';

const StackNav = StackNavigator({
  ScanList: { screen: ScanList, navigationOptions: { title: 'Scans' } },
  ScanDetail: { screen: ScanDetail, navigationOptions: { title: 'Scan Detail' } }
})

export default class App extends Component {
  render() {
    return (
      <StackNav />
    );
  }
}
