import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    useFonts,
    CantoraOne_400Regular,
} from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';

const background = require(`./../cards-folder/tarotBack.png`);
const secult = require(`./../../assets/secult.jpg`);
const Sobre = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
    });



    if (!fontsLoaded) {
        return <Text>Carregando...</Text>; yarn
    } else {
        return (


            <View style={styles.introContainer} >

            <View style={styles.bground}>
                <Image style={styles.imagem} source={background} />
            </View>

            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MainScreen')} >
                <View style={styles.text0}>
                    <Animatable.Text
                        //animation="pulse" 
                        iterationCount='infinite'
                        easing="ease-out"
                        direction="alternate">
                            <Text style={styles.titleDraw}>Este projeto é apoiado pela Secretaria de Estado da Cultura do Amapá SECULT/AP, com recursos provenientes da Lei Federal nº 14.017, de 29 de Junho de 2020.</Text>
                    </Animatable.Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                    <Text style={styles.textAskAgain}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.container2}>
                <Image style={styles.imagem2} source={secult} />
                </View>


        </View>

    )
}
}

const styles = StyleSheet.create({
introContainer: {
   //flex: 10,
    backgroundColor: '#380003',
    width: '100%',
    height: '100%',
    justifyContent: 'center',

},
container: {
    alignSelf: 'center',
    top: '-17%',
    paddingBottom: '20%',
    paddingHorizontal: '6%',
    
},
container2: {
    alignSelf: 'flex-start',
  //  top: '-22%',
   // paddingBottom: '20%',
  //  paddingHorizontal: '6%',
  width: '100%',
},
imagem2: {
    alignSelf: 'center',
  top: '70%',
   // paddingBottom: '20%',
  //  paddingHorizontal: '6%',
  height: '22%', 
  width: '100%',
},
imagem: {
    alignSelf: 'center',
   // paddingBottom: '15%',
    height: '240%', 
    width: '100%',
},
bground: {
    flex: 9,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%', 
},

draw: {
    width: 250,
    height: 250,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',

},
titleDraw: {
    fontFamily: 'CantoraOne_400Regular',
    fontSize: 15,
    textAlign: 'center',
    color: '#380003'
},
text0: {
    fontFamily: 'CantoraOne_400Regular',
    fontSize: 45,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000c51',
    padding: '4%',
    color: '#380003'

},
textAskAgain: {
    fontFamily: 'CantoraOne_400Regular',
    fontSize: 14,
    color: 'white',
},
text1: {
    fontFamily: 'CantoraOne_400Regular',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000c51',
    padding: '1.5%',
    color: '#380003'

},
})


























/*

            <View style={styles.introContainer} >

      
                <View style={styles.bground}>
                    <Image style={styles.imagem} source={background} />
                </View>

                <TouchableOpacity style={styles.container} >
                    <View style={styles.draw}>
                        <Animatable.Text
                            // animation="pulse" 
                            //iterationCount='infinite' 
                            //easing="ease-out"
                            direction="alternate">
                        </Animatable.Text>
                    </View>
                </TouchableOpacity>



            </View>




        )
    }
}

const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
        backgroundColor: '#380003',
        width: '100%',
        height: '30%',
        justifyContent: 'center',
    },

     imagem: {
        alignSelf: 'center',
        top: '6%',
       // paddingBottom: '15%',
        height: '167%', 
        width: '100%',
    },
       bground: {
        flex: 9,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%', 
    },
    container: {
        flex: 1,
        alignSelf: 'center',
        top: '30%'
    },

    draw: {
        width: 250,
        height: 250,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },

    titleDraw: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 19,
        textAlign: 'center',
        color: 'white',

    },

})
*/
export default Sobre;