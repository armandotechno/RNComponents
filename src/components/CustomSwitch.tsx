import { useState } from 'react';
import { Switch, Platform } from 'react-native'

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export default function CustomSwitch({ isOn, onChange }: Props) {

    const [ isEnabled, setIsEnabled ] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled( !isEnabled )
        onChange( !isEnabled )
    }

    return (

        <Switch
            trackColor={{false: '#D9D9DB', true: '#973ec4'}}
            thumbColor={ (Platform.OS === 'android') ? '#af3de4': '' }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}