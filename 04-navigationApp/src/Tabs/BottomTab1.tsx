import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

function BottomTab1() {

  useEffect(() => {
    console.log('Tab 1')
  },[]);

  return(
    <View>
      <Text>Bottom Tab 1</Text>
    </View>
  )
}

export default BottomTab1;
