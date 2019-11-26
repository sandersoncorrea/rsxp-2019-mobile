import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Colors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';

export default class HeaderComponent extends Component {
  goBack() {
    this.props.navigation.navigate('Login');
  }
  render() {
    const {title} = this.props;
    return (
      <Header
        containerStyle={{
          backgroundColor: Colors.dark,
          justifyContent: 'space-around',
          paddingBottom: 5,
        }}
        // leftComponent={{
        //   icon: 'arrow-back',
        //   color: Colors.white,
        //   onPress: () => this.goBack(),
        // }}
        leftComponent={<MenuButton />}
        centerComponent={{
          text: `${title}`,
          style: {color: Colors.white, fontSize: 20},
        }}
      />
    );
  }
}
