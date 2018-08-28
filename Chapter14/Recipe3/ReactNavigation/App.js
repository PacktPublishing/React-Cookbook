// Dependencies
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

// React Navigation
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

// Components
import Home from './sections/Home';
import Configuration from './sections/Configuration';

// Custom Drawer Component
// Here we are displaying the menu options and customizing our drawer
const CustomDrawerComponent = props => (
  <View style={styles.area}>
    <View style={styles.drawer}>
      <Image
        source={require('./assets/codejobs.jpeg')}
        style={styles.logo}>
      </Image>
    </View>

    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);

// The left Drawer navigation
// The first object are the components that we want to display
// in the Drawer Navigation.
const AppDrawerNavigator = createDrawerNavigator({
  Home,
  Configuration
},
{
  contentComponent: CustomDrawerComponent
});

class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

// Styles for left Drawer
const styles = StyleSheet.create({
  area: {
    flex: 1
  },
  drawer: {
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60
  }
});

export default App;
