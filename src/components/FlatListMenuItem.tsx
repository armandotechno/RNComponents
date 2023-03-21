import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem: { icon, name, component } }: Props ) => {

    const navigation = useNavigation();
    // const { colors } = useTheme();

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate( component as never )  }
        >
            <View style={ styles.container }>
                <Icon 
                    name={ icon }
                    color="#973ec4"
                    size={ 23 }               
                />
            
                <Text style={ styles.itemText }>
                    { name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon 
                    name="chevron-forward-outline"
                    color="#973ec4"
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