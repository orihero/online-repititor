import {View, Text} from 'react-native';
import React from 'react';
import Tabs from './src/navigation/Tab';
import RootNavigator from './src/navigation/routNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;

