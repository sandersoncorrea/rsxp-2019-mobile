import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default (styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 10,
    color: colors.white,
  },
  menuEllipsis: {
    marginRight: 10,
    color: colors.white,
    position: 'absolute',
    right: 0,
  },
  textHeader: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 3,
    alignSelf: 'center',
    marginLeft: 5,
  },
  menuContent: {
    color: '#000',
    fontWeight: 'normal',
    padding: 2,
    fontSize: 12,
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
}));
