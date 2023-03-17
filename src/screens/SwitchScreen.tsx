import { useState } from 'react';
import { View, Text, Switch, Platform } from 'react-native'

export default function SwitchScreen() {

  const [ isEnabled, setIsEnabled ] = useState(false);
  const toggleSwitch = () => setIsEnabled( !isEnabled );

  return (
    <View style={{ marginTop: 100 }}>
      
      <Switch
        trackColor={{false: '#D9D9DB', true: '#5856D6'}}
        thumbColor={ (Platform.OS === 'android') ? '#5856D6': '' }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </View>
  )
}