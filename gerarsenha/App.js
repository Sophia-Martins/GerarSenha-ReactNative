import { Text, SafeAreaView, StyleSheet, Button, TouchableOpacity, View, Modal,} from 'react-native';
import React, {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

  function App () {
  const Separator = () => <View style={styles.separator} />;
  const [count, setCount] = useState(0);
  const [countt, setCountt] = useState(0);
  const [counttt, setCounttt] = React.useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const Modal1 = () =>{
    setModalVisible(true);
    setCount(count + 1);
  }

   const Modal2 = () =>{
    setModalVisible2(true);
    setCountt(countt + 1);
  }

   const Modal3 = () =>{
    setModalVisible3(true);
    setCounttt(counttt + 1);
  }

  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.quadrado}>
    <Text style={styles.titulo}>Gerador de Senhas</Text>
      <View style={styles.div}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.text}>Sua Senha é:</Text>{"\n"}<Text style={styles.senha}>N0{count}</Text>
              <Separator />
              <Button title="Atualizar Senha" color ="#2E8C03" onPress={() => setCount(count + 1)} />
              <Separator />
              <Button title="Fechar" color="#1C818C" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
          <Button title="Normal" color="#1C818C" onPress={Modal1} />
      </View>
        
      <Separator />

      <View style={styles.div2}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => setModalVisible2(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.text}>Sua Senha é:</Text>{"\n"}<Text style={styles.senha}>P0{countt}</Text>
              <Separator />
              <Button title="Atualizar Senha" color ="#2E8C03" onPress={() => setCountt(countt + 1)} />
              <Separator />
              <Button title="Fechar" color="#1C818C" onPress={() => setModalVisible2(false)} 
              />
            </View>
          </View>
        </Modal>
          <Button title="Prioritário" color="#1C818C" onPress ={Modal2} />
      </View>

      <Separator />
      
      <View style={styles.div3}>
         <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => setModalVisible3(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              {counttt < 10 ?(
            <Text  style={styles.text}>Sua Senha é:</Text>,<Text style={styles.senha}>AP00{counttt}</Text>
          ) : (
             <Text  style={styles.text}>Sua Senha é:</Text>,<Text style={styles.senha}>AP0{counttt}</Text>
          )}
        <Separator />
              <Button title="Atualizar Senha" color ="#2E8C03" onPress={() => setCounttt(counttt + 1)} />
              <Separator />
              <TouchableOpacity>
              <Button style={styles.btn}title="Fechar"  color="#1C818C"  onPress={() => setModalVisible3(false)} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
          <Button title="Alta Prioridade" color="#1C818C" onPress={Modal3} />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B8D3D9',
    padding: 8,
    alignItems: 'center',
  },

  quadrado:{
    height: 800,
    width: '80%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    borderRadius: 15,

  },

    separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

div: {
  width: '80%',
},

div2: {
  width: '80%',
},

div3: {
  width: '80%',
},


 modalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },

  modal: {
    width: 300, 
    padding: 20,
    backgroundColor: 'white', 
    borderRadius: 10,
    alignItems: 'center', 
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  senha: {
    fontSize: 17,
  },

  titulo: {
    color: '#034159',
    fontSize: 60,
    textAlign: 'center',
    padding: 30,
    fontFamily:'Arial',
    fontWeight: 'bold'
  }
});
export default App;
