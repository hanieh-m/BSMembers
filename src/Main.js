import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  CheckBox,
} from 'react-native';

// Edit members here
members = ['Member 1', 'Member 2', 'Member 3', 'Member 4'];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'lightblue',
          alignItems: 'center',
          margin: 4,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TextInput
          style={{ backgroundColor: 'white', flex: 8, margin: 8 }}
          onChangeText={text => this.setState({ text: text })}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            marginVertical: 8,
            marginEnd: 8,
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
          }}
          onPress={() => this.props.addNewMember(this.state.text)}
        >
          <Text style={{ margin: 4 }}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'lightgray',
          margin: 4,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ padding: 12, flex: 8 }}> {this.props.item} </Text>
        <CheckBox
          style={{ padding: 4 }}
          onValueChange={value => this.select(value)}
          value={this.state.value}
        />
      </View>
    );
  }

  select = value => {
    this.setState({ value: !this.state.value });
    value
      ? this.props.addMember(this.props.item)
      : this.props.removeMember(this.props.item);
  };
}

class Footer extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
        onPress={this.props.onPress}
      >
        <Text>Go!</Text>
      </TouchableOpacity>
    );
  }
}

export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { selectedMembers: [] };
  }

  render() {
    return (
      <View
        style={{ justifyContent: 'flex-start', alignItems: 'stretch', flex: 1 }}
      >
        <Header addNewMember={this.addNewMember} />
        <FlatList
          data={members}
          renderItem={({ item }) => (
            <Members
              item={item}
              addMember={this.addMember}
              removeMember={this.removeMember}
            />
          )}
        />
        <Footer onPress={() => this.go()} />
      </View>
    );
  }

  addNewMember = member => {
    members.push(member);
  };

  addMember = member => {
    let sm = this.state.selectedMembers;
    sm.push(member);
    this.setState({ selectedMembers: sm });
  };

  removeMember = member => {
    let sm = this.state.selectedMembers;
    sm = sm.filter(item => item !== member);
    this.setState({ selectedMembers: sm });
  };

  go = () => {
    let red = [],
      blue = [],
      color = true;
    let selMem = this.state.selectedMembers;
    let len = this.state.selectedMembers.length;
    for (let i = 0; i < len; i++) {
      index = Math.floor(Math.random() * selMem.length);
      color ? red.push(selMem[index]) : blue.push(selMem[index]);
      selMem.splice(index, 1);
      color = !color;
    }
    this.props.navigation.navigate('Teams', { redData: red, blueData: blue });
  };
}
