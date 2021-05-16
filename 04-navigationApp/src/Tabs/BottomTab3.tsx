import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

function BottomTab3() {
  useEffect(() => {
    console.log('Tab 3')
  },[]);

  return(
    <View>
      <Text>Bottom Tab 3</Text>
    </View>
  )
}

export default BottomTab3;
