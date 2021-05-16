import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

function BottomTab2() {
  useEffect(() => {
    console.log('Tab 2')
  },[]);

  return(
    <View>
      <Text>Bottom Tab 2</Text>
    </View>
  )
}

export default BottomTab2;
