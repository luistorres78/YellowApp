import React from 'react';
import { StyleSheet, View, Text, Image, Component, TouchableOpacity } from 'react-native';
import { createStackNavigator, SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import GridView from 'react-native-super-grid';
import { Icon, SearchBar } from 'react-native-elements';
import { Content, Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import firebase from 'firebase';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import LinearGradient from 'react-native-linear-gradient';

// import the different screens
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

// Drawer menu
import drawerMenu from './drawerMenu';

// Impresion de anuncio
import showPosting from './postings';

// Publicacion de anuncio
import publish from './Publish';

// Prueba listado
import ListItem from './ListItems';

// Categorias
const items = [
  { name: 'MASCOTAS', code: '#1abc9c' }, { name: 'BIENES_RAICES', code: '#2ecc71' },
  { name: 'AUTOS', code: '#3498db' }, { name: 'ENSERES', code: '#9b59b6' },
  { name: 'MUEBLES', code: '#34495e' }, { name: 'ARTICULOS', code: '#16a085' },
  { name: 'ELECTRONICOS', code: '#FFA07A' }, { name: 'EMPLEOS', code: '#F0E68C' }, { name: 'LIBROS', code: '#1abc9c' }
];

class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,

  };

  render() {

    return (
  //<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
      <Container style={{ flexDirection: 'column', flex: 1 }}>
        
        <Header>
        
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Drawer')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('Loading')}>
              <Icon name="user" type="evilicon" />
            </Button>
          </Right>
          
        </Header>
        
        <SearchBar
          round lightTheme
          /* onChangeText={someMethod}
          onClear={someMethod} */
          placeholder='¡Encuéntrelo!' />

        <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={item => (

            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.name)}>
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

      </Container>
      //</LinearGradient>
    );
  }
}

// Clase para mostrar subcategorias
class subcategory extends React.Component {
  render() {

    return (

      <Button block onPress={() => this.props.navigation.navigate("ANUNCIO")}>
        <Text>
          lol
              </Text>
      </Button>

    );
  }

}

class Mascotas extends React.Component {
  render() {
    // Por ahora se transfiere a la pagina de postings para mostrar auncios como 
    // Se supone mientras se arregla lo visual
    const subMascotas = [{ "name": "perros" }, { "name": "gatos" }, { "name": "aves" },
    { "name": "reptiles" }, { "name": "peces" }, { "name": "todos" }];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => this.props.navigation.navigate('POST')}><Text>Aqui van los anuncios de mascotas</Text></Button>
      </View>
    );
  }
}
// Bienes raices
class BienesRaices extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aqui van los anuncios de bienes raices</Text>
      </View>
    );
  }
}

class Autos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aqui van los anuncios de autos</Text>
      </View>
    );
  }
}

class Enseres extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aqui van los anuncios de enseres</Text>
      </View>
    );
  }
}

class Muebles extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aqui van los anuncios de muebles</Text>
      </View>
    );
  }
}

class Articulos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aqui van los anuncios de articulos</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(

  {

    Loading: { screen: Loading },
    SignUp,
    Login,
    Main,
    Home: HomeScreen,
    MASCOTAS: ListItem, // <= PENDIENTE A ESTE CAMBIO
    AUTOS: Autos,
    ENSERES: Enseres,
    MUEBLES: Muebles,
    ARTICULOS: Articulos,
    BIENES_RAICES: BienesRaices,
    //ANUNCIO: Anuncios,
    Drawer: drawerMenu,
    POST: showPosting,
    Publish: publish,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  titulo_anuncio: {
    fontWeight: 'bold',
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },

  containerAnuncio: {
    padding: 10,
    flexDirection: 'row',
    height: 150,
    width: wp('100%'),
    borderWidth: 1,
    borderColor: '#000000',

  },
  textWrapper: {
    padding: 10,
    height: 130,
    width: wp('60%'),
  },
  containerImage: {
    borderWidth: 1,
    borderRadius: 10,
    height: 130,
    width: wp('40%'),
    backgroundColor: '#F08080'
  },

  catButton: {
    justifyContent: 'flex-start',
    backgroundColor: '#DAF7A6',
    padding: 20,
    borderWidth: 0.7,
  }

});

export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBvnVs3EpbaDP5hJO28y2aaQR_SDPjBNjA",
      authDomain: "appdevproject01.firebaseapp.com",
      databaseURL: "https://appdevproject01.firebaseio.com",
      projectId: "appdevproject01",
      storageBucket: "",
      messagingSenderId: "65258386281"
    };
    firebase.initializeApp(config);
    

    firebase.database().ref("advertisements").orderByChild("category").equalTo('Mascotas').on("child_added", function(snapshot) {
    console.log(snapshot.val().category);
    });
    }

  render() {

    return (

      <RootStack />


    );
  }
}
