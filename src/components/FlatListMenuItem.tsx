import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem;
}

export default function FlatListMenuItem({ menuItem: { icon, name, component } }: Props ) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate( component as never )  }
        >
            <View style={ styles.container }>
                <Icon 
                    name={ icon }
                    color="gray"
                    size={ 23 }               
                />
            
                <Text style={ styles.itemText }>
                    { name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon 
                    name="chevron-forward-outline"
                    color="gray"
                    size={ 23 }               
                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    }
});