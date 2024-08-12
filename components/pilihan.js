import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 200;
const CARD_HEIGHT = 300;
const CARD_SPACING = 20;

const images = {
    'The Sun': require('../assets/sun.png'),
    'Neptune': require('../assets/neptune.png'),
    'Earth': require('../assets/earth.png'),
    'Jupiter': require('../assets/jupiter.png'),
};

const ChoiceScreen = ({ navigation }) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Explore limits</Text>
                <Text style={styles.subHeaderText}>If there are any</Text>
            </View>

            <Animated.ScrollView 
                horizontal 
                contentContainerStyle={styles.cardContainer}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + CARD_SPACING}
                decelerationRate="fast"
                bounces={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
            >
                {['The Sun', 'Neptune', 'Earth', 'Jupiter'].map((title, index) => {
                    const inputRange = [
                        (index - 1) * (CARD_WIDTH + CARD_SPACING),
                        index * (CARD_WIDTH + CARD_SPACING),
                        (index + 1) * (CARD_WIDTH + CARD_SPACING),
                    ];

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1, 0.8],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View key={index} style={[styles.card, { transform: [{ scale }] }]}>
                            <Text style={styles.cardTitle}>{title}</Text>
                            <Image source={images[title]} style={styles.cardImage} />
                        </Animated.View>
                    );
                })}
            </Animated.ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Your universe?</Text>
                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>Find out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F1FB',
        padding: 20,
        justifyContent: 'space-between',
    },
    header: {
        marginTop: 50,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    subHeaderText: {
        fontSize: 16,
        color: '#4A4A4A',
        marginTop: 5,
    },
    cardContainer: {
        marginTop: 30,
        paddingHorizontal: (width - CARD_WIDTH) / 2 - CARD_SPACING / 2, // Center the first and last card
    },
    card: {
        backgroundColor: '#6E44FF',
        padding: 20,
        borderRadius: 20,
        marginHorizontal: CARD_SPACING / 2,
        alignItems: 'flex-start',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
    },
    cardTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    cardImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFE082',
        padding: 15,
        borderRadius: 10,
    },
    footerText: {
        fontSize: 16,
        color: '#4A4A4A',
    },
    footerButton: {
        backgroundColor: '#FFA000',
        padding: 10,
        borderRadius: 10,
    },
    footerButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChoiceScreen;
