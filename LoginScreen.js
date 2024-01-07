// Importações necessárias
import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from './styles';
import logo from './elements/images/logo.png';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setError('Por favor, preencha o e-mail');
      setModalVisible(true);
      return;
    }
    if (!password) {
      setError('Por favor, preencha sua senha.');
      setModalVisible(true);
      return;
    }

    // Validação do Login
    if (email !== 'email') {
      setError('E-mail não encontrado!');
      setModalVisible(true);
      return;
    }
    if (password !== '123') {
      setError('Senha incorreta!');
      setModalVisible(true);
      return;
    }

    // Limpar os campos e a mensagem de erro após o login
    setEmail('');
    setPassword('');
    setError('');

    // Navegar para a tela Home após um login bem-sucedido
    navigation.navigate('Home');
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={loginStyles.screenLogin}>
      <Image source={logo} style={loginStyles.logo} />
      <TextInput
        style={loginStyles.input}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
          setError('');
        }}
        value={email}
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          setError('');
        }}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={loginStyles.modalContainer}>
          <View style={loginStyles.modalContent}>
            <Text style={loginStyles.error}>{error}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={loginStyles.modalButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;