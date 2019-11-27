import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Colors from '../../styles/colors';

export default class HeaderComponent extends Component {
  goBack() {
    this.props.navigation.navigate('Login');
  }
  render() {
    const {title, navigation} = this.props;
    return (
      <Fragment>
        <Header
          containerStyle={{
            backgroundColor: Colors.black,
            justifyContent: 'space-around',
            paddingBottom: 5,
          }}
          leftComponent={{
            icon: 'arrow-back',
            color: Colors.white,
            onPress: () => this.props.navigation.navigate('Login'),
          }}
          centerComponent={{
            text: `${title}`,
            style: {color: Colors.white, fontSize: 20},
          }}
        />
      </Fragment>
    );
  }
}
