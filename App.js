import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';

class RedButton extends Component {
  render() {
    return (
      <View style={{padding:40}}>
        <Button 
          color={this.props.color}
          title={this.props.title}
          onPress={()=>{
            const str=this.props.title;
            if(str=="Sound1")
              alert("Sound1 Encountered! ");
            else if(str=="Sound2")
              alert("Sound2 Encountered! ");
            else if(str=="Sound3")
              alert("Sound3 Encountered! ");
            else           
              alert("Sound4 Encountered! ");     
          }}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 40, backgroundColor: '#000000' }}>
        <RedButton color="cyan" title="Sound1"/>
        <RedButton color="magenta" title="Sound2" />
        <RedButton color="red" title="Sound3" />
        <RedButton color="blue" title="Sound4" />
        <Text>My First React Component</Text>
      </View>
    );
  }
}
