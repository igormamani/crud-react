import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Table, Row, Rows } from 'react-native-table-component';
import { TextInput,Button } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       padding:16
       },
       containerforms: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
        },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff' 
    },
    text: {
        margin: 6,
        textAlign:'center',
        fontSize:15
     },
    // input: {
    //     margin:20,
    //     width:'60%',
    //     backgroundColor:'',
    //     borderWidth: 3, 
    //     borderRadius:20   
    // },
    inputContainer: {
        padding: 20,
        width: '60%',
        // backgroundColor:'red',
      
      },
    forms: {
        padding: 3,
        width: '60%',
        height:'85%',
        backgroundColor:'',
        borderWidth: 3, 
        borderRadius:20,
        // backgroundColor:'gray'
      
      },
    inputforms: {
        padding: 8,
        width: '100%',
        // backgroundColor:'blue',
      
      },
    h1: {
        textAlign:'center',
        // backgroundColor:'blue',
        width:'100%',
        height:'10%',
        paddingTop:10,
        marginTop:0,
        fontSize:25,
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 1.5 },
        textShadowRadius: 1.5
    }

  });

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Número Beneficario', 'Nome','Endereço', 'Telefone', 'Doenças Prévias','Uso Continuo'],
          tableData: [
            ['', '', '', '','',''],
            ['', '', '', '','',''],
            ['', '', '', '','',''],
            ['', '', '', '','',''],
            ['', '', '', '','','']
          ]
        }
      }

  render() {
    const state = this.state;

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Tabela de Pacientes</Text>
            <Table borderStyle={{borderWidth: 3, borderColor: 'rgba(44, 45, 45, 1)'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
        </View>   
    );
  }
}

function EditarScreen() {
  const MyComponent = () => {
    const [] = React.useState("");
    return (
      <View style={styles.forms}>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Número Beneficario"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Nome"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Endereço"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Telefone"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Doenças Prévias"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40,marginBottom:20}}
        mode="outlined"
        label="Uso Continuo"
        underlineColor="transparent"
      />
      </View>
      <Button style={{width:'80%',marginLeft:'10%' }}
              icon="content-save-check"
              mode="contained"
              onPress={() => console.log('Clicado')}>
        Salvar
      </Button>
      </View>
    );
  }

  return (
    <View style={styles.containerforms}>
      <Text style={styles.h1}>Editar Paciente</Text>
      <MyComponent/>
    </View>
  );
}

function CadastrarScreen() {
  const MyComponent = () => {
    const [] = React.useState("");
    return (
      <View style={styles.forms}>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Número Beneficario"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Nome"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Endereço"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Telefone"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40}}
        mode="outlined"
        label="Doenças Prévias"
        underlineColor="transparent"
      />
      </View>
      <View style={styles.inputforms}>
      <TextInput
        style={{ height:40,marginBottom:20}}
        mode="outlined"
        label="Uso Continuo"
        underlineColor="transparent"
      />
      </View>
      <Button style={{width:'80%',marginLeft:'10%' }}
              icon="content-save-check"
              mode="contained"
              onPress={() => console.log('Clicado')}>
        Salvar
      </Button>
      </View>
    );
  }

  return (
    <View style={styles.containerforms}>
      <Text style={styles.h1}>Cadastrar Paciente</Text>
      <MyComponent/>
    </View>
  );
}


function DeletarScreen() {
    const MyComponent = () => {
      const [text, setText] = React.useState("");
      return (
        <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Número Beneficario"
          onChangeText={text => setText(text)}
          value={text}
          underlineColor="transparent"
        />
        </View>
      );
    }
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.h1}>Excluir Paciente</Text>
        <MyComponent/>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconTab;

          if (route.name === 'Home') {
            iconTab = focused ? 'eye' : 'eye-outline';
          } else if (route.name === 'Editar') {
            iconTab = focused ? 'pencil-remove' : 'pencil-remove-outline';
          } else if (route.name === 'Cadastrar') {
            iconTab = focused ? 'account-multiple-plus' : 'account-multiple-plus-outline';
          } else if (route.name === 'Deletar') {
            iconTab = focused ? 'account-multiple-remove' : 'account-multiple-remove-outline';
          }

          return <MaterialCommunityIcons name={iconTab} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(31, 143, 255, 1)',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        options={{
          title: '',
          headerTransparent: true,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          headerTransparent: true,
        }}
        name="Editar"
        component={EditarScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          headerTransparent: true,
        }}
        name="Cadastrar"
        component={CadastrarScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          headerTransparent: true,
        }}
        name="Deletar"
        component={DeletarScreen}
      />
    </Tab.Navigator>
  );
}
