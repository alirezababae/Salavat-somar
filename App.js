
import React  from 'react';
import {StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';

export default class App extends React.Component{
constructor(props){
super(props)
this.plaus = this.plaus.bind(this);
this.refres = this.refres.bind(this);
this.state={
count:0

}

}






plaus(){

this.setState((prevState) =>{

return{
count:prevState.count+1

}

})

}




refres(){


  this.setState((prevState) => {
    return{
    count:prevState.count=0

    }


    })


}


render(){

return(

<View style={styleapp.bod} >

<Text style={styleapp.show}>
  تعداد صلوات:
{this.state.count}
  </Text>


<View style={styleapp.Viewcontoler}>


 <TouchableOpacity style={styleapp.btn}activeOpacity={0.6} onPress={this.plaus}>
                        <Text style={styleapp.tb}>صلوات</Text>
                    </TouchableOpacity>

 <TouchableOpacity style={styleapp.btn}activeOpacity={0.6} onPress={this.refres}>
                        <Text style={styleapp.tb}>بازگردانی</Text>
                    </TouchableOpacity>

  </View>

  </View>

);


}


}

const styleapp = StyleSheet.create({
bod:{
textAlign:'center',
alignItems:'center',



},
text:{
fontSize:23,
marginTop: 30,
color:'firebrick',
},
btn:{
 textAlign:'center',
  alignItems:'center',
  backgroundColor:'#1e90ff',
  width:300,
  height:60,
  borderRadius:30,
 // justifyContent:'center',
 // alignItems:'center',

  marginRight:'3%',
  marginTop:' 10%',
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

      },
      tb:{
        color:'#ffffff',
        fontSize:24,
        textAlign:'center',



            },
            Viewcontoler:{

marginTop:'50%'


            },
            show:{
fontSize:25,
width:300,
height:50,
backgroundColor:'burlywood',
marginTop: '10%',
borderRadius:10,
textAlign:'center'
            }



});
