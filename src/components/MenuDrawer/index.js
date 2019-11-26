import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

class MenuDrawer extends Component {
  state = {
    user: {
      nome: '',
    },
  };

  navLink(nav, text) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  async componentDidMount() {}

  logout() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <View style={styles.toplinks}>
            <View style={styles.profile}>
              <View style={styles.profileText}>
                <Text style={styles.name}>{this.state.user.nome}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLinks}>{this.navLink('Main', 'Home')}</View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => this.logout()}>
            <View style={styles.logout}>
              <Text style={styles.textLogout}>Sair</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.version}>v0.1.1</Text>
        </View>
      </View>
    );
  }
}

export default MenuDrawer;
