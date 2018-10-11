import React from 'react';
import { Content, Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, View, Text, Image, Component, TouchableOpacity } from 'react-native';

/* const mascotas = [{ titulo: "Perro01", descripcion: "Jugueton", usuario: "juanDelPueblo23" },
{ titulo: "Perro02", descripcion: "Juguetona y cariñosa", usuario: "juanaDelMar54" } 


];*/

export default class showPosting extends React.Component {

    componentWillMount(){
        firebase.database().ref("advertisements");
        // Find all dinosaurs whose height is exactly 25 meters.

        ref.orderByChild("category").equalTo('Mascotas').on("child_added", function(snapshot) {
        console.log(snapshot.key);
});
    }

    Todos() {
        return mascotas.map(function (anuncio, i) {
            return (

                <View style={styles.containerAnuncio}>
                    <View style={styles.containerImage}>
                        <Text> Dummy Image </Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.titulo_anuncio}> {anuncio.titulo} </Text>
                        <Text> {anuncio.descripcion} </Text>
                        <Text> {anuncio.usuario} </Text>
                        <Text> Posted: n-time ago </Text>
                    </View>
                </View>
            );
    });
}


render() {
    return (
        <View>
            {this.Todos()}
        </View>
    );
}
}




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