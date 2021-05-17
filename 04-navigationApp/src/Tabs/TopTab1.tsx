import React from 'react';
import { Text, View } from 'react-native';

import { Styles } from '../theme/appTheme';

function Chat() {
  return(
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>Chat</Text>
    </View>
  );
};

export default Chat;
