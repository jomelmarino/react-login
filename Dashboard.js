import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AboutUs from './AboutUs';
import App from './App';

const Dashboard = () => {
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
        <View style={styles.header}>
          <Text style={styles.headerText}>HEALTH</Text>
        </View>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.textBox}>
            <Text style={styles.text}>HEALTH:</Text>
            <Text style={styles.text}>
              Definition of Health Education Health is the level of functional and (or) metabolic efficiency of a living being.
              In humans, it is the general condition of a person in mind, body and spirit, usually meaning to being free from illness, injury or pain
              (as in “good health” or “healthy”)
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>PHYSICAL ACTIVITY :</Text>
            <Text style={styles.text}>
              is any body movement that works as a result of your muscles and requires more energy than resting. Walking, running, dancing, swimming,
              yoga, and gardening are a few examples of physical activity
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>ENVIRONMENTAL HEALTH :</Text>
            <Text style={styles.text}>
              centers on the relationships between people and their environment. When people are exposed to hazards like polluted air and lead in their drinking water,
              they can develop serious conditions, such as asthma, heart disease, cancer and dementia.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>HEALTHY FOOD</Text>
            <Text style={styles.text}>
              is food that gives you all the nutrients you need to stay healthy, feel well and have plenty of energy. The best way to ensure you're eating healthily is to eat a
              wide variety of different kinds of food.
            </Text>
          </View>
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
    backgroundColor: '#68BA7F',
  },
  header: {
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 55,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 30,
    marginHorizontal: 20,
    height: '70%',
  },
  textBox: {
    backgroundColor: '#CFFFDC',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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

export default Dashboard;
