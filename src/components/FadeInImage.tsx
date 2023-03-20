import { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native'
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri: string;
}

export const FadeInImage = ({ uri }: Props) => {
    
    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( false );

    const finishLoading = () => {
        setIsLoading( false );
        fadeIn();
    }
    
    return (
        <View style={{ 
            justifyContent: 'center',
            alignItems: 'center'
         }}>

            {
                isLoading && 
                    <ActivityIndicator 
                        style={{ position: 'absolute' }} 
                        color="#973ec4" 
                        size={ 30 }
                    />
            }

            <Animated.Image 
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{ 
                    width: '100%', 
                    height: 400, 
                    opacity
                }}
            />
        </View>
    )
}