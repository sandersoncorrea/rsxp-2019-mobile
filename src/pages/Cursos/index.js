import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';
import MenuButton from '../../components/MenuButton';
import CardCurso from '../../components/CardCurso';
import Colors from '../../styles/colors';

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
        description:
          'Python é uma linguagem de programação de altp nível, interpretada, de script, imperativa, orientada à objetos, funcional, de tipagem dinâmica e forte.',
        link: 'https://www.udemy.com/python',
      },
      {
        id: 2,
        name: 'MySQL',
        description:
          'O MySQL é um sistema de gerenciamento de banco de dados (SGBD) que utiliza a linguagem SQL como interface.',
        link: 'https://www.udemy.com/mysql',
      },
      {
        id: 3,
        name: 'C#',
        description:
          'C# é uma linguagem de programação multiparadigma, de tipagem fote desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objeto foi baseada no C++.',
        link: 'https://www.udemy.com/c#',
      },
    ];
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Header title="3005-A" />
        <Text style={{color: Colors.white}}>Cursos</Text>
        {cursos.map(c => {
          return <CardCurso key={c.id} dados={c} />;
        })}
      </Container>
    );
  }
}
