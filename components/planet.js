import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PlanetScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>The Sun</Text>
        <Image source={require('../assets/sun.png')} style={styles.image} />
        <Text style={styles.description}>Explore limits, if there are any...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#333333',
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    description: {
        color: '#555555',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default PlanetScreen;
