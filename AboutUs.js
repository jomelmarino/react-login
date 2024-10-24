import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import App from './App';

const AboutUs = () => {
  const [isHomePressed, setIsHomePressed] = React.useState(false);
  const [isAboutUsPressed, setIsAboutUsPressed] = React.useState(false);
  const [isLoggedOut, setIsLoggedOut] = React.useState(false);

  const handleHomePress = () => {
    setIsHomePressed(true);
  };

  const handleAboutUsPress = () => {
    setIsAboutUsPressed(true);
  };

  const handleLogOut = () => {
    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    return <App />;
  } else if (isHomePressed) {
    return <Dashboard />;
  } else if (isAboutUsPressed) {
    return <AboutUs />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ABOUT US</Text>
        <Text style={[styles.text2, { fontSize: 20, textAlign: 'center',marginBottom: 5,marginTop: 5 }]}>
          Hi we are the Group 1 in Application Development and Emerging Technologies and
          this is our mobile app that we will present as our midterm project.
        </Text>
        <Text style={[styles.text2, { fontSize: 20,textAlign: 'center',marginBottom: 10,marginTop: 3 }]}>
          The topic given to us is about the health subject and some of what you saw in 
          the content section are some of the health topics related.
        </Text>
        <Text style={styles.subtitle}>Group 1</Text>
        <ScrollView 
          style={{ flex: 1 }} 
          showsVerticalScrollIndicator={false} 
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/damaso.jpg')}
              style={{ width: 110, height: 110, marginTop: 20,marginRight: 15, borderRadius: 100, zIndex: 100, alignSelf: 'flex-end' }}
            />
            <View style={styles.BoxContainer2}>
              <View style={styles.BoxContainer}>
                <Text style={styles.text1}>LEADER</Text>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>DAMASO, ERICA JANNE C</Text>
                <Text  style={styles.text1}>UX DESIGN THEORY</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.text2, { fontSize: 20, textAlign: 'center',fontWeight: 'bold' }]}>
          GROUP MEMBERS</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/regie.jpg')}
              style={{ width: 110, height: 110, marginTop: 20,marginRight: 15, borderRadius: 100, zIndex: 100, alignSelf: 'flex-end' }}
            />
            <View style={styles.BoxContainer2}>
              <View style={styles.BoxContainer}>
                <Text style={styles.text1}></Text>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>REGILISA, LOVELY</Text>
                <Text  style={styles.text1}>60-30-10</Text>
              </View>
            </View>
          </View>
          
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/mel.jpg')}
              style={{ width: 110, height: 110, marginTop: 20,marginRight: 15, borderRadius: 100, zIndex: 100, alignSelf: 'flex-end' }}
            />
            <View style={styles.BoxContainer2}>
              <View style={styles.BoxContainer}>
                <Text style={styles.text1}></Text>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>MARIÑO JOMEL M.</Text>
                <Text  style={styles.text1}>UI DESIGN PRINCIPLE</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/kelly.jpg')}
              style={{ width: 110, height: 110, marginTop: 20,marginRight: 15, borderRadius: 100, zIndex: 100, alignSelf: 'flex-end' }}
            />
            <View style={styles.BoxContainer2}>
              <View style={styles.BoxContainer}>
                <Text style={styles.text1}></Text>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>GARCIA KHELLY ANN</Text>
                <Text  style={styles.text1}>COLOR THEORY</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/lee.jpg')}
              style={{ width: 110, height: 110, marginTop: 20,marginRight: 15, borderRadius: 100, zIndex: 100, alignSelf: 'flex-end' }}
            />
            <View style={styles.BoxContainer2}>
              <View style={styles.BoxContainer}>
                <Text style={styles.text1}></Text>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>ARCILLA JOHN LEE</Text>
                <Text  style={styles.text1}>USER PERSONA</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('./assets/bro.jpg')}
              style={{ width: 110, height: 110, marginTop: 20,marginRight: 15, borderRadius: 100, zIndex: 100, alignSelf: 'flex-end' }}
            />
            <View style={styles.BoxContainer2}>
              <View style={styles.BoxContainer}>
                <Text style={styles.text1}></Text>
                <Text style={[styles.text1, { textDecorationLine: 'underline' }]}>RONCESVALLES, REYNOLD</Text>
                <Text  style={styles.text1}>SPACING AND TYPOGRAPHY</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.text2, { fontSize: 20, textAlign: 'center',marginTop: -50 }]}>
          education prepares students for emergencies by 
          teaching basic first aid skills and safety practices.</Text>
          <Text style={[styles.text2, { fontSize: 15, fontWeight:'bold', marginTop: 10 }]}>
          Phone Number: 0946-1513-009</Text>
          <Text style={[styles.text2, { fontSize: 15, fontWeight:'bold'}]}>
          Email: healthsubject@gmail.com</Text>
          <Text style={[styles.text2, { fontSize: 15, fontWeight:'bold', marginBottom: 15 }]}>
          username: healthsubject</Text>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAboutUsPress}>
            <FontAwesomeIcon icon={faInfoCircle} size={27} color="white" />
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleHomePress}>
            <FontAwesomeIcon icon={faHome} size={27} color="white" />
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogOut}>
            <FontAwesomeIcon icon={faSignOutAlt} size={27} color="white" />
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#68BA7F',
  },
  title: {
    fontFamily: 'Verdana',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  BoxContainer: {
    backgroundColor: '#80D6B1',
    width: 320,
    height: 150,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
    borderRadius: 20,
 
  },
  BoxContainer2: {
    backgroundColor: '#CFFFDC',
    marginTop: -120,
    width: 350,
    height: 210,
    borderRadius: 20,
    marginBottom: 70,
  },
  text1: {
    borderColor: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    
    
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -20,
  },
  button: {
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80A9D4',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUs;
