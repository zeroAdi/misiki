import React , { Component } from 'react' ;
import {YellowBox, Button, Platform,  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
//import FoodList1 from './FoodList1';
import FoodList from './FoodList';
import Taxi from './Taxi';
//import Login from './Login';
import RegisterAsChef from './RegisterAsChef';
import FoodItems from './FoodItems';


export class Test extends Component {
  static navigationOptions = {
    title: "Misiki",
    headerRight: (
      <Button
        onPress={() => alert('Currently unavailable feature')}
        title='Login'
        /*icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />}*/
      />
    ),
    headerStyle: {
      backgroundColor: "#f44336"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25
    }
  };  
  render () {
        return (
          <View style={{flex: 1}}>
            <View style={styles.container1}>
              <TouchableOpacity style = {styles.button} onPress={() => this.props.navigation.navigate(`FoodList`)}>
               
                <View  
                    style={styles.buttonText1}>
                    <Icon
                      name='cutlery'
                      size={20}
                      color='white'
                      style={{height:25,width:25}}/>
                      <View>
                      <Text style={styles.buttonText1}>Food Order</Text>
                      <Text style={styles.buttonText2}>Misiki Food Delivery</Text>
                      </View>
                      </View>
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <TouchableOpacity style = {styles.button2} onPress={() => this.props.navigation.navigate(`Taxi`)}>
               
                <View  
                    style={styles.buttonText1}>
                    <Icon
                      name='taxi'
                      size={20}
                      color='white'
                      style={{height:25,width:25}}/>
                      <View>
                      <Text style={styles.buttonText1}>Book a Taxi</Text>
                      <Text style={styles.buttonText2}>Misiki Taxi</Text>
                      </View>
                      </View>
              </TouchableOpacity>
            </View>
            
            <View style={styles.container3}>
              <TouchableOpacity style = {styles.button3} onPress={() => this.props.navigation.navigate(`RegisterAsChef`)}>
               
                <View  
                    style={styles.buttonText3}>
                    <Icon
                      name='bell'
                      size={20}
                      color='white'
                      style={{height:25,width:25}}/>
                      
                      <Text style={styles.buttonText3}>Get started as Chef (in 30 seconds)</Text>
                      
                      </View>
              </TouchableOpacity>
            </View>

            <View style={styles.container4}>
            <TouchableOpacity style = {styles.button4} >        
                <View style={styles.buttonText4}>
                     <Text style={styles.buttonText4}>Note: Delivery only to Sunabeda</Text>
                </View>
              </TouchableOpacity>
            </View>

            </View>
            ) 
           }
}

const AppStackNavigator = createStackNavigator({
  Test: { screen: Test },
  RegisterAsChef: {screen: RegisterAsChef},
  //Login: {screen: Login},
  FoodList : { screen: FoodList },
  //FoodList1 : { screen: FoodList1 },
  Taxi: { screen: Taxi},
  FoodItems : { screen: FoodItems },

});
const App = createAppContainer(AppStackNavigator);
export default App;

/*YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);*/


const styles = StyleSheet.create({
  
  button: {
    backgroundColor: '#2196f3',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 8,
    textAlign:'center',
  },
  button2: {
    backgroundColor: '#f44336',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 8,
    textAlign:'center',
  },
  button3: {
   
    backgroundColor: 'green',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 8,
    textAlign:'right',
  },
  button4: {
    width: '100%',
    backgroundColor: '#fff55e',
    //borderRadius: 12,
    overflow: 'hidden',
    padding: 8,
    //textAlign:'right',
  },
  buttonText1:{
    color: 'white',
    fontSize: 27,
             
    padding: 8,
    textAlign:'center'
  },
  buttonText2: {
    color: 'white',
    fontSize: 17,
    overflow: 'hidden',
    textAlign:'center',
  },
  buttonText3: {
    flexDirection: 'row', 
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    overflow: 'hidden',
    textAlign:'right',
    padding: 8
  },
  buttonText4: {
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
    overflow: 'hidden',
    textAlign:'center',
    padding: 5
  },
  container1: {
    aspectRatio: 1,
    alignItems: 'flex-start',
    position: 'absolute',
    top: '4%',
    left: '3%'
  },
  container2: {
    aspectRatio: 1,
    alignItems: 'flex-start',
    position: 'absolute',
    top: '4%',
    right: '3%'
  },
  container3: {
    aspectRatio: 1,
    alignItems: 'flex-start',
    position: 'absolute',
    top: '26%',
    left: '3%'
  },
  container4: {
    aspectRatio: 1,
    width: '100%',
    alignItems: 'flex-start',
    position: 'relative',
    top: '46%',
    left: '0%'
  },

});