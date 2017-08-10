/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

// put your serverless url here
// you will see it when you run ./deplyAPI.sh in the api dir
let apiURL = 'https://yourLambdaUri.amazonaws.com/dev/hello-world'

export default class RNServerless extends Component {
  state = {response: ''}

  componentDidMount() {
    console.log('componentDidMount')
    this.callServer()
  }
  
  callServer = () => {
    this.setState({response: 'calling serverless api...'})
    fetch(apiURL)
    .then((resp) => resp.json())
    .then(data => {
      console.log('RESPONSE', data)
      this.setState({response: data.message})
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.response}
        </Text>
        <Text style={styles.instructions}>
          You now have folder name
            <Text style={{fontWeight: 'bold', fontSize: 20}}> api </Text>
          in your React Native project for microservice code!
        </Text>
        <Text style={[styles.instructions, {fontStyle: 'italic'}]}>
          powered by AWS Lambda
        </Text>
        <Button title='call the service again!' onPress={()=>this.callServer()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 45,
    marginTop: 25,
    marginBottom: 25
  },
})

AppRegistry.registerComponent('RNServerless', () => RNServerless)
