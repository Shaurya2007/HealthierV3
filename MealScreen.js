import React,{Component} from 'react'
import {View,TouchableOpacity,Text,StyleSheet,FlatList} from 'react-native'
import MyHeader from '../Component/MyHeader'
import firebase from 'firebase'
import db from '../config'

export default class MealScreen extends Component{
    constructor(){
        super()
        this.state={
        meal:[],
        }
    }
    readMeal=()=>{
        var mm = []
        db.collection("Meals").get()
        .then((querySnapshot)=>
        { 
            querySnapshot.forEach((doc)=>
             { 
                 mm.push(doc.data())
            console.log(mm)
            }); 
            this.setState({ 
                meal:mm
                }) 
        })
    }
    
    componentDidMount(){
        this.readMeal()
    }
    render(){
        return(
            <View style={{flex:1}}>
                {this.state.meal.map(meals=>(
                    <Text>{meals.morningMeal}</Text>
                ))}  
        
            </View>
        )
    }
}