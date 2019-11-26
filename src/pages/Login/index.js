import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Container, Form} from './styles';
import {withNavigation} from 'react-navigation';
import Colors from '../../styles/colors';
class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  componentDidMount() {}

  handleSignInPress = e => {
    e.preventDefault();
    this.resetNagivateToMain();
  };

  resetNagivateToMain = () => {
    const {navigation} = this.props;
    navigation.navigate('Main');
  };

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={'black'}
          barStyle={'light-content'}
          translucent={false}
        />
        <Form>
          <Input
            placeholder="Email"
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholderTextColor={Colors.gray}
          />
          <Input
            placeholder="Senha"
            autoCapitalize={false}
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={Colors.gray}
          />
          <Button
            containerStyle={{
              width: '90%',
              marginTop: 20,
            }}
            buttonStyle={{
              backgroundColor: '#000',
            }}
            title="ENTRAR"
            onPress={this.handleSignInPress}
          />
        </Form>
      </Container>
    );
  }
}

export default withNavigation(Login);
