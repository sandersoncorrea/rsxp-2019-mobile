import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
