import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  screenLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDropDown: {
    alignItems: 'baseline',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  sucess: {
    color: 'green',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 10,
    color: 'blue',
  },
});

export default loginStyles;