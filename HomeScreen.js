import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';

const HomeScreen = () => {
    //Constante dos anos
    const [openAno, setOpenAno] = useState(false);
    const [valueAno, setValueAno] = useState(null);
    const [itemsAno, setItemsAno] = useState([
        { label: '2022', value: '2022' },
        { label: '2023', value: '2023' },]);
    //Constante dos meses
    const [openMes, setOpenMes] = useState(false);
    const [valueMes, setValueMes] = useState(null);
    const [itemsMes, setItemsMes] = useState([
        { label: 'Janeiro', value: 'janeiro' },
        { label: 'Fevereiro', value: 'fevereiro' },
        { label: 'Março', value: 'marco' },
        { label: 'Abril', value: 'abril' },
        { label: 'Maio', value: 'maio' },
        { label: 'Junho', value: 'junho' },
        { label: 'Julho', value: 'julho' },
        { label: 'Agosto', value: 'agosto' },
        { label: 'Setembro', value: 'setembro' },
        { label: 'Outubro', value: 'outubro' },
        { label: 'Novembro', value: 'novembro' },
        { label: 'Dezembro', value: 'dezembro' },]);
    return (
        <View style={styles.screenHome}>
            <View style={styles.containerDropDown}>
                <Text>Selecione o ano:</Text>
                <DropDownPicker
                    placeholder={'Selecione'}
                    open={openAno}
                    value={valueAno}
                    items={itemsAno}
                    setOpen={setOpenAno}
                    setValue={setValueAno}
                    setItems={setItemsAno}
                    zIndex={1}
                    containerStyle={{
                        width: '50%',
                    }} />

                <Text style={{ marginTop: 10 }}>Selecione o mês:</Text>
                <DropDownPicker
                    placeholder={'Selecione'}
                    open={openMes}
                    value={valueMes}
                    items={itemsMes}
                    setOpen={setOpenMes}
                    setValue={setValueMes}
                    setItems={setItemsMes}
                    zIndex={0}
                    containerStyle={{
                        width: '50%',
                    }} />
            </View>
        </View>
    );
};

export default HomeScreen;