// Main.js
import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'firebase'
import { Content, Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { Icon } from 'react-native-elements';
export default class Main extends React.Component {
    static navigationOptions = {
        header: null,

    };

    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
        
    }

    handleLogout = () => {
        firebase
             .auth()
             .signOut()
             .then(() => this.props.navigation.navigate('Home'))
        }

    render() {
        const { currentUser } = this.state

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name='chevron-left' type="evilicon" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>User</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.handleLogout}>
                            <Icon name="gear" type="evilicon" />
                        </Button>
                    </Right>
                </Header>

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar}
                            source={require('./images/user-image-with-black-background.png')} />
                        <Text style={styles.userInfo}>{currentUser && currentUser.email}</Text>
                    </View>
                </View>

                <View style={styles.Body}>
                    <Button transparent onPress={() => this.props.navigation.navigate('Publish')}>
                        <Icon name="star" type="evilicon" />
                        <Text> Publica un anuncio </Text>
                    </Button>
                </View>

                
            </Container >
        );
    

    }
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DCDCDC",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: "#778899",
        fontWeight: '600',
    },
    body: {
        backgroundColor: "#778899",
        height: 500,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    iconContent: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 20,
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: "#FFFFFF",
    }
});