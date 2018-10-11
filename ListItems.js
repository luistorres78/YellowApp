import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ItemComponent from './ItemComponent';

import firebase from 'firebase';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
  })
 var itemsRef;

export default class ListItem extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        firebase.database().ref("advertisements").orderByChild("category")
        .equalTo('Mascotas').on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}