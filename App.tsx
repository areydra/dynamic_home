import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import Content from './src/components/Content';
import ContentShimmer from './src/components/ContentShimmer';

const App = () => (
  <SafeAreaView>
    <StatusBar barStyle='dark-content'/>
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      showsVerticalScrollIndicator={false}
    >
      <Header/>
      <Content/>
      <ContentShimmer/>
    </ScrollView>
  </SafeAreaView>
);

export default App;
