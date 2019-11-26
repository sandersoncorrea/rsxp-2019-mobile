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
        title: 'Como iniciar RN',
        description: 'Como faço para iniciar um projeto em React Native?',
        author: 'Fulano',
        answers: 3,
      },
      {
        id: 2,
        title: 'Como iniciar Python',
        description: 'Como faço para iniciar um projeto em Python?',
        author: 'Sicrano',
        answers: 19,
      },
      {
        id: 3,
        title: 'Como iniciar RN',
        description: 'Como faço para iniciar um projeto em React Native?',
        author: 'Fulano',
        answers: 0,
      },
      {
        id: 4,
        title: 'Como iniciar Python',
        description:
          'Pelo livro que estou estudando, em alguns momentos o autor utiliza __init__ como sendo uma primeira função de uma classe. Esta função (e outras) sempre possuem self como uma das variáveis (coisa que também ainda não compreendi o porquê). Quando devo (e por quê) utilizar funções __init__ dentro de (algumas) classes?',
        author: 'Sicrano',
        answers: 1,
      },
    ];
    return (
      <Container>
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
