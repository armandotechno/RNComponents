import { View, Text, Button, Alert } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export default function AlertScreen() {
  
    const showAlert = () => {
        Alert.alert(
            'Título', 
            'Este es el mensaje de la alerta', 
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {
                cancelable: true
            }
            );
    }

    return (
        <View style={ styles.globalMargin }> 
          <HeaderTitle  title='Alerts' />

          <Button  
            title='Mostrar Alerta'
            onPress={ showAlert }
          />
        </View>
  )
}