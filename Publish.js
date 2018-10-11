import React, {Component} from 'react';
import { StyleSheet, TextInput, Platform, Image, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import firebase from 'firebase'
import { Content, Container, Header, Left, Body, Right, Title } from 'native-base';
import { Icon } from 'react-native-elements';


export default class publish extends React.Component {
    state = { title: '', description: '', price: '', category: '', author: null};
    

    handlePublishing = () => {

        // Get current user uid
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // Set advertisement 
                firebase.database().ref().child("advertisements").push()
                    .set({
                        title: this.state.title,
                        description: this.state.description,
                        price: this.state.price,
                        author: user.uid,
                        category: this.state.category
                    });
            }
        });

        () => this.props.navigation.navigate('Main')
    }
   

    handlePicture = () => {
        alert('clicked');
        }


    render() {
        return (
            <View style={styles.container}>
                <Button title = "Take photo" onPress= {this.handlePicture}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Titulo"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Descripcion"
                    onChangeText={description => this.setState({ description })}
                    value={this.state.description}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Categoria"
                    onChangeText={category => this.setState({ category })}
                    value={this.state.category}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Precio"
                    onChangeText={price => this.setState({ price })}
                    value={this.state.price}
                />
                <Button title="Publish advertisement" onPress={this.handlePublishing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})