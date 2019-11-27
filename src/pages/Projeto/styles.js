import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  padding: 3px;
`;

const Card = styled.View`
  background-color: ${Colors.raizinblack};
  margin: 5px;
  padding: 6px;
`;

const Coments = styled.View`
  background-color: ${Colors.raizinblack};
  margin: 5px;
  padding: 6px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

const Description = styled.Text`
  font-size: 15px;
  color: #eee;
  text-align: justify;
`;

const Author = styled.Text`
  font-size: 12px;
  color: ${Colors.gold};
  text-transform: uppercase;
`;

const Comentario = styled.Text`
  font-size: 10px;
  color: #eee;
`;

export {Container, Card, Coments, Title, Description, Author, Comentario};
