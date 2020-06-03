import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Button} from 'react-native';

class Personaldetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsedata: '',
      isLoading: false,
      firstName: '',
    };
  }
  // componentDidMount(){
  //   this.getapidata()
  // }
  // async getapidata(){
  //   let resp=await Axios.get('http://parkwayapi-env-2.eba-xgm5ffvk.us-east-2.elasticbeanstalk.com/profile_details/userID')
  // console.warn(resp.data)
  // }

  componentDidMount() {
    fetch(
      'http://parkwayapi-env-2.eba-xgm5ffvk.us-east-2.elasticbeanstalk.com/profile_details/11',
    )
      .then(response => response.json())
      .then(Responsejson => {
        this.setState({responsedata: Responsejson});
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  renderCheck() {
    return this.state.responsedata.map(data => {
      return (
        <View>
          <Text> {data.Name}</Text>
        </View>
      );
    });
  }

  /* async componentDidMount() {
    // GET request using fetch with async/await
    fetch(
      'http://parkwayapi-env-2.eba-xgm5ffvk.us-east-2.elasticbeanstalk.com/profile_details/11',
    )
      .then(response => response.json())
      .then(Responsejson => {
        this.setState({
          data: Responsejson,
        });
      });
  } */

  render() {
    const {responsedata, isLoading} = this.state;

    if (!responsedata) {
      return <Text>Loading</Text>;
    }

    const results = JSON.parse(responsedata.result);

    console.log('Actual Response from api: ', results);

    /* var {responsedata = []} = this.state;
    var {isLoading} = this.state; */
    //console.log('Result of api: ', responsedata);

    //result = JSON.parse(responsedata.result);

    //console.log('this ', results[0]);

    //const results = JSON.parse([responsedata]);

    return (
      <View style={styles.registrationDetails}>
        <Text style={styles.item}>Name:{results[0].Name} </Text>
        <Text style={styles.item}>EmailID:{results[0].EmailID} </Text>
        <Text style={styles.item}>Username:{results[0].Username} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    opacity: 80,
  },
  item: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,.7)',
    fontSize: 24,
    flexDirection: 'column',
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

export default Personaldetails;