import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import cardsObject from '../cards-folder/cardsObject';
import CardAnimation from '../components/CardAnimation';
import {
    useFonts,
    CantoraOne_400Regular,
} from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import StyleSheet from 'react-native-media-query';

const background = require(`./../cards-folder/tarotBack.png`);



const Cartas = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
    });
    /// shuffle function 

    const shuffle = (Number) => {
        setChosenNumber(() => {
            let random = Number;
            return random
        })
    }
    /// Choose Number
    let [chosenNumber, setChosenNumber] = useState()
    const listOfNames = (cards) => {
        let tarot_cards = [];
        for (let i = 0; i < cards.length; i += 1) {
            tarot_cards.push(cards[i].name);
        }
        return tarot_cards;
    }
    /// Choose Name
    const listNames = listOfNames(cardsObject);
    const listOfImages = (cards) => {
        let tarot_cards = [];
        for (let i = 0; i < cards.length; i += 1) {
            tarot_cards.push(cards[i].cardImage);
        }
        return tarot_cards;
    }
    /// Choose Image
    const listImages = listOfImages(cardsObject);
    const listOfKeywords = (cards) => {
        let tarot_cards = [];
        for (let i = 0; i < cards.length; i += 1) {
            tarot_cards.push(cards[i].keywords);
        }
        return tarot_cards;
    }
    /// Choose Keywords
    const listKeywords = listOfKeywords(cardsObject);
    const listOfContent = (cards) => {
        let tarot_cards = [];
        for (let i = 0; i < cards.length; i += 1) {
            tarot_cards.push(cards[i].content);
        }
        return tarot_cards;
    }
    ////Creating the Variable to be shown
    //let listContent = listOfContent(cardsObject);
    let listContent = listOfContent(cardsObject);
    let tarotName = listNames[chosenNumber];
    let tarotImage = listImages[chosenNumber];
    let tarotKeywords = listKeywords[chosenNumber];
    let tarotContent = listContent[chosenNumber];

    ///MODALS STATES
    const [drawVisible, setDrawVisible] = useState(true);
    const [imageVisible, setImageVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);


    // IMAGE INDEX
    const [imageIndex, setImageIndex] = useState(0)
    const [contentIndex, setContentIndex] = useState(1)
    const handleImageIndex = () => {
        imageIndex <= contentIndex ? setImageIndex(contentIndex + 1) : setImageIndex(0)
    }
    const handleContentIndex = () => {
        contentIndex <= imageIndex ? setContentIndex(imageIndex + 1) : setContentIndex(1)
    }

    const [animationVisible, setAnimationVisble] = useState(false)

    const background = require(`./../cards-folder/tarotBack.png`);


    const handleDraw = (Number) => {

        shuffle(Number)
        setDrawVisible(false)
        //setAnimationVisble(true)
        //setTimeout(() => setAnimationVisble(false), 2000)
        //setTimeout(()=> 
        setImageVisible(true)
        //, 2000)
        //setTimeout(()=> 
        setContentVisible(true)
        //,4000)
    }

    const deshandleDraw = () => {

        chosenNumber = 1;
        tarotImage = chosenNumber;
        setDrawVisible(true)
        setImageVisible(false)
        setContentVisible(false)
    }

    //console.log(imageIndex, contentIndex)

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>
    } else {
        return (
            <>

                <ScrollView keyboardShouldPersistTaps={'always'} style={styles.container}>


                   {drawVisible ?
                        <View style={styles.containerDraw}>





                            <View style={styles.introContainer} >


                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(0) }} >
                                    <Text style={styles.texta}>O Tolo</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(1) }}>
                                    <Text style={styles.texta}>O Mago</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(2) }}>
                                    <Text style={styles.texta}>A Suma Sacerdotisa</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(3) }}>
                                    <Text style={styles.texta}>A Imperatriz</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(4) }}>
                                    <Text style={styles.texta}>O Imperador</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(5) }}>
                                    <Text style={styles.texta}>O Hierofante</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(6) }}>
                                    <Text style={styles.texta}>Os Amantes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(7) }}>
                                    <Text style={styles.texta}>A Carruagem</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(8) }}>
                                    <Text style={styles.texta}>Força</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(9) }}>
                                    <Text style={styles.texta}>O Eremita</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(10) }}>
                                    <Text style={styles.texta}>A Roda da Fortuna</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(11) }}>
                                    <Text style={styles.texta}>Justiça</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(12) }}>
                                    <Text style={styles.texta}>O Enforcado</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(13) }}>
                                    <Text style={styles.texta}>Morte</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(14) }}>
                                    <Text style={styles.texta}>Temperança</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(15) }}>
                                    <Text style={styles.texta}>O Diabo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(16) }}>
                                    <Text style={styles.texta}>A Torre</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(17) }}>
                                    <Text style={styles.texta}>A Estrela</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(18) }}>
                                    <Text style={styles.texta}>A Lua</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(19) }}>
                                    <Text style={styles.texta}>O Sol</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(20) }}>
                                    <Text style={styles.texta}>Julgamento</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => { handleDraw(21) }}>
                                    <Text style={styles.texta}>O Mundo</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                    <Text style={styles.texta}>Voltar</Text>
                                </TouchableOpacity>

                            </View>


                        </View>
                        : null}

                    {animationVisible ?
                        <View style={styles.animation}>
                            <CardAnimation />
                        </View>
                        : null}
                    {!animationVisible ?
                        <Modal
                            animationType="fade"
                            easing="easeIn"
                            transparent={true}
                            visible={imageVisible}
                        >
                            <TouchableOpacity onPress={() => handleImageIndex()} style={[styles.changeImageIndex, { zIndex: imageIndex }]}>
                                <Animatable.View
                                    //animation="bounce"
                                    easing="ease-in" >
                                    <Image style={styles.tarotImage} source={tarotImage} />
                                </Animatable.View>
                            </TouchableOpacity>
                            {contentVisible ?
                                <View>

                                    <ScrollView
                                        style={styles.contentContainer}
                                        keyboardShouldPersistTaps={'always'}
                                    >
                                        <TouchableOpacity
                                            onPress={handleContentIndex}
                                            style={[styles.changeContentIndex, { zIndex: contentIndex }]}>
                                            <Text style={styles.tarotName}>{tarotName}</Text>

                                            <Text style={styles.tarotContent}>{tarotContent}</Text>
                                        </TouchableOpacity>
                                    </ScrollView>


                                    <View>
                                        <TouchableOpacity style={styles.btn1} title='Ask Again' onPress={() => { deshandleDraw() }} >
                                            <Text style={styles.textAskAgain}>Voltar</Text>
                                        </TouchableOpacity>


                                    </View>

                                </View>
                                : null}

                        </Modal>
                        : null}

                </ScrollView>
            </>
        )
    }
}

const { ids, styles } = StyleSheet.create({
    introContainer: {
        // flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        // backgroundColor: '#000c51',
        // width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    bground: {
        flex: 9,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '10%', 
    },

    container: {
        paddingVertical: 15,
        paddingHorizontal: 12,
        //  marginTop: '5%',
        // backgroundColor: '#000c51',
        backgroundColor: '#380003',


        // marginHorizontal: "1%",
    },
    animation: {
        flex: 1,
        left: 10,
        top: 0,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        top: '8%',
        fontFamily: 'CantoraOne_400Regular',
    },
    containerDraw: {
        alignSelf: 'center',

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
        fontSize: 30,
        textAlign: 'center',
    },
    tarotImage: {
        //height: 350,
        height: '90%',
        //width: 200,
        width: '90%',
        marginTop: '3%',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: '3%',

    },
    contentContainer: {
        flexWrap: 'wrap',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: '#ffffff',
        //backgroundColor: '#155493',
        //backgroundColor: '#134d86',
        width: '90%',
        height: '18%',
        alignSelf: 'center',
        //marginBottom: '30%',
        marginTop: '-28%',

    },
    tarotName: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'CantoraOne_400Regular',
        //paddingLeft: 20,
        paddingTop: 15,
        fontWeight: 'bold',
        color: 'black',

    },
    tarotKeywords: {
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: 'white',

    },
    tarotContent: {
        textAlign: 'left',
        padding: 8,
        paddingHorizontal: 20,
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 14,
        color: 'black',

    },
    btn0: {
        borderWidth: 1,
        borderRadius: 15,
        marginTop: '-81%',
        marginBottom: '70%',
        paddingVertical: 10,
        borderColor: 'black',
        paddingHorizontal: 30,
        alignSelf: 'center',
        //backgroundColor: '#fffff5',
        //backgroundColor: '#155493',
       // backgroundColor: '#134d86',
        backgroundColor: '#000000',

        fontFamily: 'CantoraOne_400Regular',
    },
    btn1: {
        borderWidth: 1,
        borderRadius: 5,
        borderRadius: 15,
        borderColor: 'black',
        marginTop: '-4%',
        marginBottom: '70%',
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        // backgroundColor: '#155493',
        fontFamily: 'CantoraOne_400Regular',
    },
    texta: {
        //marginHorizontal: "2%",
        //marginVertical: "2%",
        borderWidth: 1,
        borderRadius: 5,
        //borderRadius: 15,
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 18,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        fontFamily: 'CantoraOne_400Regular',
        color: 'black',


    },
    textAskAgain: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 14,
        color: 'black',
    }
})

export default Cartas;












/*





import React, {useState} from  'react';
import cardsObject from '../cards-folder/cardsObject';
import {Image, ScrollView, View,Text, Modal, StyleSheet,TouchableOpacity} from 'react-native';
import CardAnimation from '../components/CardAnimation';
import {
    useFonts,
    CantoraOne_400Regular,
    } from '@expo-google-fonts/cantora-one';
import * as Animatable from 'react-native-animatable';
import { block } from 'react-native-reanimated';

const background = require(`./../cards-folder/tarotBack.png`);

const Cartas = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        CantoraOne_400Regular,
        });


        /// Choose Number
            const [chosenNumber, setChosenNumber] = useState()
            const listOfNames = (cards) => {
                let tarot_cards = [];
                    for (let i=0; i < cards.length; i+=1) {
                    tarot_cards.push(cards[i].name);
                }
                return tarot_cards;
            }
        /// Choose Name
            const listNames = listOfNames(cardsObject);
            const listOfImages = (cards) => {
                let tarot_cards = [];
                    for (let i=0; i < cards.length; i+=1) {
                    tarot_cards.push(cards[i].cardImage);
                }
                return tarot_cards;
            }
        /// Choose Image
            const listImages = listOfImages(cardsObject);
            const listOfKeywords = (cards) => {
                let tarot_cards = [];
                    for (let i=0; i < cards.length; i+=1) {
                    tarot_cards.push(cards[i].keywords);
                }
                return tarot_cards;
            }
        /// Choose Keywords
            const listKeywords = listOfKeywords(cardsObject);
            const listOfContent = (cards) => {
                let tarot_cards = [];
                    for (let i=0; i < cards.length; i+=1) {
                    tarot_cards.push(cards[i].content);
                }
                return tarot_cards;
            }
        ////Creating the Variable to be shown
            const listContent = listOfContent(cardsObject);
            const tarotName = listNames[chosenNumber];
            const tarotImage= listImages[chosenNumber];
            const tarotKeywords = listKeywords[chosenNumber];
            const tarotContent = listContent[chosenNumber];

            ///MODALS STATES
            const [drawVisible, setDrawVisible] = useState(true);
            const [imageVisible, setImageVisible] = useState(false);
            const [contentVisible, setContentVisible] = useState(false);


        // IMAGE INDEX
            const [imageIndex, setImageIndex] = useState(0)
            const [contentIndex, setContentIndex] = useState(1)
            const handleImageIndex = () => {
                imageIndex <= contentIndex ? setImageIndex(contentIndex + 1) : setImageIndex(0)
            }
            const handleContentIndex = () => {
                contentIndex <= imageIndex ? setContentIndex(imageIndex + 1) : setContentIndex(1)
            }

            const [animationVisible, setAnimationVisble] = useState(false)

            const background = require(`./../cards-folder/tarotBack.png`);

            const handleDraw = () => {
                setDrawVisible(false)
                setAnimationVisble(true)
                setTimeout(()=> setAnimationVisble(false), 2000)
                //setTimeout(()=>
                setImageVisible(true)
                //, 2000)
                //setTimeout(()=>
                setContentVisible(true)
                //,4000)
            }


            console.log(imageIndex, contentIndex)

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
        } else {

    return (
        <>

            <View style={styles.introContainer} >


<TouchableOpacity style={styles.container} title='Ask Again' onPress={()=> {handleDraw()}}>
                                <Text style={styles.texta}>O Tolo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Mago</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Suma Sacerdotisa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Imperatriz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Imperador</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Hierofante</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Os Amantes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Carruagem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Justiça</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Eremita</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Roda da Fortuna</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Força</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Enforcado</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Morte</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Temperança</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Diabo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Torre</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Estrela</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>A Lua</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Sol</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Julgamento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>O Mundo</Text>
                        </TouchableOpacity>


                <TouchableOpacity style={styles.container} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.texta}>Voltar</Text>
                        </TouchableOpacity>

            </View>





            <>

            <ScrollView  keyboardShouldPersistTaps={'always'} style={styles.container}>



                    {drawVisible ?
                        <View style={styles.containerDraw}>


                            </View>
                        : null }

                        {animationVisible ?
                            <View style={styles.animation}>
                                <CardAnimation />
                            </View>
                        : null }
                        {!animationVisible ?
                        <Modal
                            animationType="fade"
                            easing="easeIn"
                            transparent={true}
                            visible={imageVisible}
                            >
                            <TouchableOpacity onPress={()=> handleImageIndex()} style={[styles.changeImageIndex, {zIndex: imageIndex}]}>
                            <Animatable.View
                            //animation="bounce"
                            easing="ease-in" >
                            <Image style={styles.tarotImage} source={tarotImage} />
                            </Animatable.View>
                            </TouchableOpacity>
                        {contentVisible ?
                        <View>

                                <ScrollView
                                style={styles.contentContainer}
                                keyboardShouldPersistTaps={'always'}
                                >
                                <TouchableOpacity
                                onPress={handleContentIndex}
                                style={[styles.changeContentIndex, {zIndex: contentIndex}]}>
                                    <Text style={styles.tarotName}>{tarotName}</Text>
                                    <Text style={styles.tarotKeywords}>{tarotKeywords}</Text>
                                    <Text style={styles.tarotContent}>{tarotContent}</Text>
                                    </TouchableOpacity>
                                </ScrollView>


                            <View>
                                <TouchableOpacity style={styles.btn1} title='Ask Again' onPress={() => navigation.navigate('Intro')}>
                                <Text style={styles.textAskAgain}>Início</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn0} title='Ask Again'  onPress={()=>{handleDraw()}}>
                                <Text style={styles.textAskAgain}>Outra Carta</Text>
                        </TouchableOpacity>

                        </View>


                        </View>
                        : null}

                        </Modal>
                        : null}


            </ScrollView>
            </>













   </> )
        }
}

const styles = StyleSheet.create({
    introContainer: {
       // flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: '#000c51',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: '5%',
        backgroundColor:   '#000c51',
        marginHorizontal: "1%",
    },
    draw:{
        width: 250,
        height: 250,
        alignContent: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    titleDraw: {
        fontFamily: 'CantoraOne_400Regular',
        fontSize: 30,
        textAlign: 'center'
    },
    texta: {
        //marginHorizontal: "2%",
        //marginVertical: "2%",
        borderWidth: 1,
        borderRadius: 5,
        //borderRadius: 15,
        borderColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 18,
        alignSelf:'center',
        backgroundColor: '#fffff5',
        fontFamily: 'CantoraOne_400Regular',
        color: 'white',

    },

})

export default Cartas;



*/