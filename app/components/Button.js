import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.functionOnClick}
        style={{
          backgroundColor: 'white',
          color: 'blue',
          height: 30,
          width: 'auto',
          padding: 30,
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          marginLeft: 5,
          marginRight: 5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center',}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
export default CustomButton;
