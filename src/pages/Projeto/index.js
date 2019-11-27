import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Title,
  Description,
  Author,
  Card,
  Coments,
  Comentario,
} from './styles';
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
    const comentarios = [
      {
        id: 1,
        text: 'Poderiamos usar um projeto OpenSource da Google',
      },
      {id: 2, text: 'Posso ajudar no projeto'},
      {id: 3, text: 'Posso ajudar no projeto também'},
    ];

    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <Header title="3005-A" />
        <Card>
          <Title>{curso.title}</Title>
          <Author>{curso.author}</Author>
          <Description>{curso.description}</Description>
        </Card>
        <Coments>
          <Author>Comentários</Author>
          {comentarios.map(c => {
            return (
              <Comentario key={c.id}>
                {c.id}. {c.text}
              </Comentario>
            );
          })}
        </Coments>
      </Container>
    );
  }
}
