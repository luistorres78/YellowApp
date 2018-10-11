import React from 'react'
import Drawer from 'react-native-drawer-menu';
import {Easing, View, StyleSheet, Text} from 'react-native'; // Customize easing function (Optional)

export default class drawerMenu extends React.Component{
render() {
    // prepare your drawer content
    var drawerContent = (<View >
      <View />
      <View >
        <View><Text>Drawer Content </Text></View>
      </View>
    </View>);
    // customize drawer's style (Optional)
    var customStyles = {
      drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10
      },
      //mask: {}, // style of mask if it is enabled
      //main: {} // style of main board
    };
    return (
 
      <Drawer
        //style={styles.container}
        drawerWidth={300}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
        //customStyles={{drawer: styles.drawer}}
        drawerPosition={Drawer.positions.Right}
        onDrawerOpen={() => {console.log('Drawer is opened');}}
        onDrawerClose={() => {console.log('Drawer is closed')}}
        easingFunc={Easing.ease}
      >
        <View>
          
          {/* <Text>{Object.values(Drawer.positions).join(' ')}</Text>
          <Text>{Object.values(Drawer.types).join(' ')}</Text> */}
        </View>
      </Drawer>

    );
  }
}

const styles = StyleSheet.create({
  leftTop: {
    padding: 10,
  },
  container: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  content: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
  },
});