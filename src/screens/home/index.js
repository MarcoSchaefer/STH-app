import React, { Component } from "react";
import axios from 'axios';
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Input, Form, Item, Label, Content } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");


class Home extends Component {
  constructor() {
    super();
    this.state = {
      email : "",
      password : ""
      }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    axios({
        method: 'post',
        url: '/session/login',
        data: data
    })
    .then(function(response) {
        //localStorage.setItem("token",response.data.token);
        //localStorage.setItem("permissions",JSON.stringify(response.data.permissions));
        //window.location.replace('/#/home');
    })
    .catch(function(error) {
        //swal("Oops!", error.response.data.error, "error");
    })
  }


  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>


            <Content>
              <View>
                <Form>
                  <Item floatingLabel last style={{marginLeft: 15, marginRight: 15}}>
                    <Label style={{color: '#FFFFFF'}}>Email</Label>
                    <Input style={{color: "#FFFFFF"}} name="email" value={this.state.email} onChangeText={(email) => this.setState({email})}/>
                  </Item>
                  <Item floatingLabel last style={{marginLeft: 15, marginRight: 15}}>
                    <Label style={{color: '#FFFFFF'}}>Senha</Label>
                    <Input secureTextEntry style={{color: "#FFFFFF"}} name="password" value={this.state.password} onChangeText={(password) => this.setState({password})}/>
                  </Item>
                </Form>
                <Button block light style={{ margin: 15, marginTop: 50 }} onPress={()=>this.handleSubmit()}>
                  <Text>Entrar</Text>
                </Button>
              </View>
            </Content>



        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
