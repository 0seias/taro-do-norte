import React, {useState} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';


const CardAnimation = ()=> {

    const tarotBack = require('../cards-folder/tarotBack.png')

    const [animation, setAnimation] = useState(true)

    return (
        animation?
            <>
            <View style={styles.imageContainer}>
                <Animatable.View
                animation="slideOutRight" 
                
                iterationCount={3}
                easing="ease-out-expo"
                style={styles.animate}
                onAnimationEnd={ () => { 
                    setAnimation(false)
                    }}
                >
                    <Image style={styles.image1} source={tarotBack}/>
                </Animatable.View>
                <Animatable.View
                animation="slideOutLeft" 
                iterationCount={3}
                easing="ease-out-expo"
                style={styles.animate}
                >
                <Image style={styles.image2} source={tarotBack}/>
                </Animatable.View>
                <Animatable.View
                animation="slideInLeft" 
                iterationCount={3}
                easing="ease-out-expo"
                style={styles.animate}s
                >
                    <Image style={styles.image3} source={tarotBack}/>
                </Animatable.View>
            </View>
            </>
        : null 
    )

};

const styles = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
    },
    image1 : {
        height: 320,
        width: 170,
        marginTop: 130,
        borderWidth: 2,
        borderColor: 'gray',
    },
    image2 : {
        height: 320,
        width: 170,
        marginTop: -320,
        marginLeft: 60,
        borderWidth: 1,
        borderColor: 'gray',
    },
    image3 : {
        height: 320,
        width: 170,
        marginTop: -320,
        marginLeft: 30,
        borderWidth: 1,
        borderColor: 'gray',
    },
    title: {
        marginTop: 100,
    }
});

export default CardAnimation;


