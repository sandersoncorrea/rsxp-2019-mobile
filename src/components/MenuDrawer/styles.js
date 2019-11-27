import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gold,
  },
  scroller: {
    flex: 1,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    color: Colors.white,
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'left',
    color: Colors.white,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  toplinks: {},
  bottomLinks: {
    flex: 1,
    paddingTop: 10,
    color: Colors.white,
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  logout: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textLogout: {
    marginLeft: 7,
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
}));
