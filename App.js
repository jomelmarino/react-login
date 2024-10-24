import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Dashboard from './Dashboard';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    // Add your login logic here
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Medicine.png')}
        style={{
          width: 250,
          height: 200,
          borderColor: 'black',
          borderWidth: 1,
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 40,
        }}
      />
      <Text style={styles.title2}>Welcome to</Text>
      <Text style={styles.title}>Health Subject</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        keyboardType="email-address"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input2}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={{ fontSize: 14, color: 'blue', marginBottom: 30, marginRight: 83, textDecorationLine: 'underline' }}>
        Forgot Password?
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.reglink}>
        Don`t Have account?
        <TouchableOpacity style={{ color: 'blue', textDecorationLine: 'bold' }}> Register</TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68BA7F',
    padding: 20,
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 0,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: 260,
    fontSize: 18, // Adjust the font size as needed
  },
  input2: {
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 0,
    padding: 10,
    width: 260,
    fontSize: 18, // Adjust the font size as needed
  },
  button: {
    backgroundColor: '#80A9D4',
    padding: 10,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  reglink: {
    marginTop: 30,
    color: 'white',
  },
});

export default LoginForm;
