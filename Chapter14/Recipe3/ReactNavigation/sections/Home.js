// Dependencies
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Styles
import styles from './sectionStyles';

class Home extends Component {
  // Here we specify the icon we want to render
  // in the menu for this option
  static navigationOptions = {
    drawerIcon: () => (
      <Image
        style={styles.iconsItem}
        source={require('../assets/home.png')}
      />
    )
  }

  render() {
    return(
      <View style={styles.container}>
        {/* Hamburger menu */}
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={styles.iconMenu}>
          <Image
            style={styles.menu}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>

        {/* Here is the content of the component */}
        <Text style={styles.titleText}>I'm the home section</Text>
      </View>
    );
  }
}

export default Home;
