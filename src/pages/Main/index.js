import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Container} from './styles';
import Header from '../../components/Header';
import CardAsk from '../../components/CardAsk';
import MenuButton from '../../components/MenuButton';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        id: 1,
        title: 'Realidade aumentada - Química',
        description:
          'Desejo usar realidade aumentada nas aulas de química para ver as células',
        author: 'Pr. Utônio',
        answers: 3,
      },
      {
        id: 2,
        title: 'Teste de Reações Qúimicas',
        description:
          'Como não temos um laboratório, preciso de fazer experimentos químicos pelo celular',
        author: 'Pr. Carvalho',
        answers: 19,
      },
      {
        id: 3,
        title: 'Trabalho em grupo',
        description: 'Preciso de um APP pra juntar os trabalhos',
        author: 'Pr. Strange',
        answers: 0,
      },
    ];

    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Header title="3005-A" />
        <ScrollView>
          {data.map(d => {
            return <CardAsk key={d.id} dados={d} />;
          })}
        </ScrollView>
      </Container>
    );
  }
}

export default Main;
