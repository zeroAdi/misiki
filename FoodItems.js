//fetching the api with the fetch ---the change is "the fech is being replaced with the axios api"

import React , { Component } from 'react' ;
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class FoodItems extends Component {
 
   
    increment=() => {
      
      this.setState({
         no_of_items :this.state.no_of_items + 1,
      }
      
      );
    };
    decrement=() => {
      
      this.setState({
         no_of_items :this.state.no_of_items - 1,
                 }
      );
    };

    render() {
      const id= this.state._id;
      const img= "https://www.misiki.in/images"+this.state.img;
      const name = this.state.name;
      const rate = this.state.rate * this.state.no_of_items;
      const restaurant = this.state.restaurant;
      const stock = this.state.stock;
      const time = this.state.time;
      const type = this.state.type;
      
      
        return (
          
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               
               <Image style={styles.image1} source={{uri: img}} resizeMode='contain'/>
               <Text>{name}</Text>
               <Text>{rate}</Text>
         <View style={styles.top1}>
                        <Text style={styles.slugStyle}>
                          {restaurant}
                        </Text>
                        <Text style={styles.stockStyle}>
                            Only {stock} left
                          </Text>
                        
              </View>
               
               <Text>{time}</Text>
               <Text>{type}</Text>
                             
                <TouchableOpacity style={styles.inc_style} onPress={this.increment} >
                      <Icon name={'add'}  size={20}  /> 
               </TouchableOpacity>
                
                <Text>no of items={this.state.no_of_items}</Text>

                {this.state.no_of_items > 0 ? <TouchableOpacity style={styles.dec_style} onPress={this.decrement}>
                     <Icon name={'remove'}  size={20}  />
               </TouchableOpacity> : null }
                
                
           
      
                                       
          </View>
        );
            }

            constructor(props)
            {
              super(props);
             
              this.arrayholder = [];
              this.state = {
                no_of_items: 1,
                first_name: '',
                last_name: '',
                qr_no: '',
                isLoading: true,
                search: '',
                
              };
         
                                 
              
            }
          
          

          componentDidMount() {
            const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
                              
                   
                          axios.get(`https://www.misiki.in/api/foods/${itemId}`)
                .then((response) => {
                 
                  this.setState({
                    isLoading: false,
                  _id: response.data["_id"],
                  img: response.data["img"],
                  name: response.data["name"],
                  rate: response.data["rate"],
                  restaurant: response.data["restaurant"],
                  stock: response.data["stock"],
                  time: response.data["time"],
                  type: response.data["type"],
                         })
                        
                      })
                   
                   .catch((error) => {
                     console.error(error);
                   });

                 
               }

               

    }
  
    const AppStackNavigator = createStackNavigator({
        
        FoodItems: { screen: FoodItems}
      },
     );
    
      

const styles = StyleSheet.create({
    TextStyle: {
      fontSize: 25,
      textAlign: 'center'
    },
 top1:{
    height:'10%',
    width:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'grey',
  },
    image1:{
      height: 300,
      width: '100%',
        },
  slugStyle:{
    
      fontSize:18,
      padding:20,
      textAlign:"left",
      color:'red',
      
    
  },
 stockStyle:{
    fontSize:15,
    padding:20,
    textAlign:"right",
     alignItems:"flex-end",
  },
    inc_style: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'flex-end',
        
        justifyContent:'center',
        width:30,
        height:30,
        backgroundColor:'#fff',
        borderRadius:50,
        },
      dec_style: {
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
         
          justifyContent:'center',
          width:30,
          height:30,
          backgroundColor:'#fff',
          borderRadius:50,
          },

});

