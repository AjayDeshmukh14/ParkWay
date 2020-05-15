import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';

export default class Personaldetails extends React.Component 
{
  render() 
  {
    return (
      <ImageBackground
        source={require('../assets/parkwayRegistration.jpg')}
        style={styles.backgroundImage}>
      <View style={styles.registrationDetails}>

      <Text style={styles.welcome}>Personal Details</Text>
      <Text style={styles.sectionTitle}>Name</Text>
      <Text style={styles.amount}>Bhagyashri Badgujar</Text>
      <Text style={styles.sectionTitle}>Mobile Number</Text>
      <Text style={styles.amount}>6692747317</Text>
      <Text style={styles.sectionTitle}>Address</Text>
      <Text style={styles.amount}>1050 Benton Street</Text>
      <Text style={styles.sectionTitle}>Date of Birth</Text>
      <Text style={styles.amount}>05/19/1995</Text>
      {/* <Button title="EDIT" onPress={this.handlePress} /> */}
      
      
      </View>
      </ImageBackground>
      );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: 'black',
    fontWeight:'bold'
  },
  welcome: {
    fontSize: 35,
    textAlign: 'left',
    margin: 10,
    fontWeight:'bold',
    color: 'rgba(69,145,130,10)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'left',
    margin: 10,
    color: 'rgba(69,145,130,10)',
    marginBottom:-10,
    marginTop:10,
  },
  amount: {
    fontSize: 27,
    fontWeight: '800',
    textAlign: 'left',
    margin: 10,
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    opacity:400,
  },
  registrationDetails: {
    width: '100%',
    height: '80%',
    backgroundColor: 'rgba(255,255,255,.7)',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});