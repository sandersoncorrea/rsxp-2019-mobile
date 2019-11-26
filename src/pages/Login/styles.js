import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.dark};
`;

const Form = styled.View`
  align-items: center;
  width: 90%;
`;

export {Container, Form};
