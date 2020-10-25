import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';
export default class Homescreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ListData:[],
            url:'http://localhost:5000/'
        }
        
    }
    componentDidMount(){
        this.getPlanets();
    }
    getPlanets=()=>{
        const {url}=this.state;
        axios
        .get(url)
        .then(response=>{
            return this.setState({
                ListData:response.data.data 
            })
        })
        .catch(error=>{alert(error.message)})
    }
    renderItem=({item,index})=>(
        <ListItem
        key={index}
        title={'planet:${item,name}'}
        subtitle={'distancefromearth:${item.distance_from_earth}'}
        bottomDivider
        chevron
        onPress={()=>{this.props.navigation.navigate('details',{planet_name:item.name})}}
        />
    )
    keyExtractor=(item,index)=>index.toString();
   render(){
       const {ListData}=this.state;
       if(ListData.length===0){
           return(
               <View>
                   <Text>
                       loading
                   </Text>
               </View>
           )
       }
       else{
       return(
<View>
    <SafeAreaView></SafeAreaView>
    <View>
    <Text>
        Planets world
    </Text>
    </View>
    <View>
        <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.ListData}
        renderItem={this.renderItem}
        ></FlatList>
    </View>
</View>
       )
   }
}
}