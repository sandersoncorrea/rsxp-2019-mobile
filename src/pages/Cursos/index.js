import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';
import MenuButton from '../../components/MenuButton';
import CardCurso from '../../components/CardCurso';

export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cursos = [
      {
        id: 1,
        name: 'Python',
        description: 'Usado em toda SP',
      },
      {
        id: 2,
        name: 'Delphi',
        description: 'Não presta',
      },
      {
        id: 3,
        name: 'C#',
        description: 'O Rodrigo Hilbert das Linguagens',
      },
    ];
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Header title="3005-A" />
        <Text>Cursos</Text>
        {cursos.map(c => {
          return <CardCurso key={c.id} dados={c} />;
        })}
      </Container>
    );
  }
}
