import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Solar{'\n'}System
        </Text>

        <ScrollView horizontal pagingEnabled style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
          {/* Card untuk Mercury dan Venus dengan gambar kecil */}
          <View style={styles.cardWithSmallImages}>
            <View style={styles.smallCardsContainer}>
              <TouchableOpacity style={styles.smallCard} onPress={() => navigation.navigate('Mercury')}>
                <Image source={require('../assets/mercury.png')} style={styles.smallImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.smallCard} onPress={() => navigation.navigate('Venus')}>
                <Image source={require('../assets/venus.png')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Card besar untuk planet lainnya */}
          <TouchableOpacity style={styles.largeCard} onPress={() => navigation.navigate('Earth')}>
            <Image source={require('../assets/earth.png')} style={styles.largeImage} />
            <Text style={styles.cardText}>Earth</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeCard} onPress={() => navigation.navigate('Mars')}>
            <Image source={require('../assets/mars.png')} style={styles.largeImage} />
            <Text style={styles.cardText}>Mars</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeCard} onPress={() => navigation.navigate('Jupiter')}>
            <Image source={require('../assets/jupiter.png')} style={styles.largeImage} />
            <Text style={styles.cardText}>Jupiter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeCard} onPress={() => navigation.navigate('Saturn')}>
            <Image source={require('../assets/saturn.png')} style={styles.largeImage} />
            <Text style={styles.cardText}>Saturn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeCard} onPress={() => navigation.navigate('Uranus')}>
            <Image source={require('../assets/uranus.png')} style={styles.largeImage} />
            <Text style={styles.cardText}>Uranus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeCard} onPress={() => navigation.navigate('Neptune')}>
            <Image source={require('../assets/neptune.png')} style={styles.largeImage} />
            <Text style={styles.cardText}>Neptune</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Tombol navigasi */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Choice')}>
          <Text style={styles.buttonText}>To infinity and beyond</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  cardContainer: {
    marginTop: 30,
  },
  cardWithSmallImages: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  smallCardsContainer: {
    justifyContent: 'center', // Centering vertically
    alignItems: 'center',     // Centering horizontally
    marginRight: 10,
  },
  smallCard: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  largeCard: {
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 170,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 10,
    marginRight: 20, // Jarak antar card besar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  largeImage: {
    width: 120,
    height: 120,
    alignSelf: 'flex-end',
  },
  smallImage: {
    width: 40,
    height: 40,
  },
  cardText: {
    color: '#4A4A4A',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 100,
  },
  buttonText: {
    color: '#7A41CF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
