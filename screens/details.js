import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class DetailScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            details:{},
            imagePath:'',
            url:'http://localhost:5000/planet?name=${this.props.navigation.getParam('planet_name')}'
        }
    }
    ComponentDidMount(){
        this.getDetails();
    }
    getDetails=()=>{
        const {url}=this.state;
        axios
        .get(url)
        .then(response=>{
           this.setDetails(response.data.data);

        })
        .catch(error=>{alert(error.message)})
    }
    setDetails=planetDetails=>{
        
    }
    render(){
        return(
 <View>
     <Text>
         DetailScreen
     </Text>
 </View>
        )
    }
 }