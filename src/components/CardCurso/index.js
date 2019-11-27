import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {encurtarTexto} from '../../utils/str';

export default class CardCurso extends Component {
  render() {
    const {name, description, id, link} = this.props.dados;
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{encurtarTexto(description, 50)}</Text>
        <Text style={styles.link}>Acesse: {link}</Text>
      </View>
    );
  }
}
