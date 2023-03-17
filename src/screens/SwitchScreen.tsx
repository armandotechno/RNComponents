import { useState } from 'react';
import { View, Text, Switch, Platform } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';

export default function SwitchScreen() {

  const [ isEnabled, setIsEnabled ] = useState(false);
  const toggleSwitch = () => setIsEnabled( !isEnabled );

  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTitle title='Switches'/>
      
      <Switch
        trackColor={{false: '#D9D9DB', true: '#973ec4'}}
        thumbColor={ (Platform.OS === 'android') ? '#af3de4': '' }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </View>
  )
}