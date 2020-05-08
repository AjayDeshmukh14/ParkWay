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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { createStackNavigator } from 'react-navigation-stack';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleCheckIn: false,
      chosenCheckInDateTime: '',
      isVisibleCheckOut: false,
      chosenCheckOutDateTime: '',
      whichPicker: '',
    };
  }

  handlePicker = datetime => {
    const whichPicker = this.state.whichPicker;
    if (whichPicker == 'checkin') {
      this.setState({
        isVisible: false,
        chosenCheckInDateTime: moment(datetime).format('MMMM, Do YYYY HH:mm '),
      });
    } else {
      this.setState({
        isVisible: false,
        chosenCheckOutDateTime: moment(datetime).format('MMMM, Do YYYY HH:mm '),
      });
    }
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  showPicker = param => {
    this.setState({
      isVisible: true,
      whichPicker: param,
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/parkwayRegistration.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.registrationDetails}>
          <View style={styles.search_header}>
            <View style={styles.search_input_box}>
              <Icon name="ios-search" style={styles.search_icon} />
              <TextInput
                placeholder="Search by pincode, city or address"
                style={styles.input}
              />
            </View>
          </View>

          {/* checkIn and checkout input boxes */}
          {/*  <View style={styles.search_check_in_check_out_container}>
              <View style={styles.search_check_in_check_out_sub_container}>
                <TextInput placeholder="Check-In" style={styles.input} />
                <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                />
              </View> */}

          <View>
            {/* to show selected date and time in the field */}

            <TouchableOpacity
              onPress={() => this.showPicker('checkin')}
              style={styles.search_date_time_button}>
              <Text>{this.state.chosenCheckInDateTime || 'Check-in'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.showPicker('checkout')}
              style={styles.search_date_time_button}>
              <Text>{this.state.chosenCheckOutDateTime || 'Check-out'}</Text>
            </TouchableOpacity>

            <DateTimePicker
              isVisible={this.state.isVisible}
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
              mode={'datetime'}
              is24Hour={true}
            />
          </View>

          <Button
            title="Search Parking"
            onPress={() => this.props.navigation.navigate('booking')}
            //onPress={() => this.props.navigation.navigate('tabScreen')}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  registrationDetails: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255,255,255,.7)',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  search_header: {
    height: '30%',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  search_input_box: {
    height: '100%',
    backgroundColor: 'rgba(255,255,255,.7)',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  search_icon: {
    fontSize: 30,
  },

  search_check_in_check_out_container: {
    height: '10%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,.7)',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  search_check_in_check_out_sub_container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    opacity: 80,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'rgba(69,145,130,10)',
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(69,145,130,10)',
  },
  search_date_time_button: {
    width: '50%',
    height: '30%',
    textAlign: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(69,145,130,10)',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Search;
