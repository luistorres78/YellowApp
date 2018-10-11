import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firebase from 'firebase';

export default class ItemComponent extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };
    username = null;

    render() {
        
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index}>
                            
                            <View style={styles.containerAnuncio}>
                                <View style={styles.containerImage}>
                                    <Text> Dummy Image </Text>
                                </View>
                                <View style={styles.textWrapper}>
                                    <Text style={styles.titulo_anuncio}> {item.title} </Text>
                                    <Text> {item.description} </Text>
                                    <Text> {item.author}</Text>
                                    <Text> Posted: n-time ago </Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
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