import React, {useState} from  'react';
import { View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createNavigator } from 'react-navigation';
import {
    useFonts,
    CantoraOne_400Regular,
    } from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';

const DrawButton = () =>{
    return (
        <Text>Hello</Text>
    )

}

const styles = StyleSheet.create({});

export default DrawButton;


{/* <View style={styles.containerDraw}>
<Animatable.Text 
animation="pulse" 
iterationCount='infinite' 
easing="ease-in"
direction="alternate">
    <TouchableOpacity style={styles.draw} onPress={shuffle}>
        <Text style={styles.titleDraw}> Draw a Card </Text>
    </TouchableOpacity>
</Animatable.Text>
</View>  */}