import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import Colors from '../../styles/colors';
import {encurtarTexto} from '../../utils/str';

export default class index extends Component {
  render() {
    const {
      title,
      room,
      author,
      description,
      id,
      tags,
      answers,
    } = this.props.dados;
    return (
      <View style={styles.card}>
        {/* <Icon type="material" name="android" size={18} color={Colors.gold} /> */}
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{encurtarTexto(description, 50)}</Text>
        {answers > 0 && <Text style={styles.answers}>{answers} respostas</Text>}
        <Button
          style={styles.btnGo}
          containerStyle={styles.btnGo}
          onPress={this.props.toGo}
          title={'Acessar'}
        />
      </View>
    );
  }
}
