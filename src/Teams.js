import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'gray',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 12,
          marginBottom: 8,
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity onPress={this.props.goBack}>
          <Image
            source={require('../back.png')}
            style={{
              width: 32,
              height: 32,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              margin: 4,
              fontSize: 20,
            }}
          >
            TEAMS:
          </Text>
        </View>
      </View>
    );
  }
}

class Team extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          alignItems: 'center',
          flex: 2,
          flexDirection: 'row',
          marginHorizontal: 8,
          marginBottom: 8,
        }}
      >
        <Text
          style={{ color: 'white', marginStart: 12, fontSize: 20, flex: 1 }}
        >
          {this.props.text}
        </Text>
        <View
          style={{
            flex: 2,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FlatList
            data={this.props.data}
            renderItem={({ item }) => (
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginVertical: 4,
                  alignSelf: 'center',
                }}
              >
                {item}
              </Text>
            )}
          />
        </View>
      </View>
    );
  }
}

export default class Teams extends React.Component {
  render() {
    redData = this.props.navigation.state.params.redData;
    blueData = this.props.navigation.state.params.blueData;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Header
          goBack={() =>
            this.props.navigation.reset([
              NavigationActions.navigate({ routeName: 'Main' }),
            ])
          }
        />
        <Team color={'red'} text={'RED:'} data={redData} />
        <Team color={'blue'} text={'BLUE:'} data={blueData} />
      </View>
    );
  }
}
