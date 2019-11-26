import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class MenuButton extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <View style={styles.container}>
          <Icon
            name="bars"
            size={30}
            style={styles.menuIcon}
            onPress={() => this.props.navigation.toggleDrawer()}
          />
          <View style={{flexDirection: 'row'}}>
            {/* <Image
              source={require("../../images/logo-branco-horizontal.png")}
              resizeMode={"contain"}
              style={{ width: 100, height: 30 }}
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

export default MenuButton;
