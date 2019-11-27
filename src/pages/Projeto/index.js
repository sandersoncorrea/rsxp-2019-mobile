import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';
import MenuButton from '../../components/MenuButton';

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const curso = {
      id: 1,
      title: 'Realidade aumentada - Química',
      description:
        'Desejo usar realidade aumentada nas aulas de química para ver as células',
      author: 'Pr. Utônio',
      answers: 3,
    };

    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Header title="3005-A" />
        <View>
          <Text>{curso.title}</Text>
          <Text>{curso.description}</Text>
        </View>
        <View>
          <Text>Comentários</Text>
        </View>
      </Container>
    );
  }
}
