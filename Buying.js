
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput,  Share,  Image, StatusBar, TouchableHighlight} from 'react-native';

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { ScrollView } from 'react-native-gesture-handler';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert2 = firebase.admob().rewarded('ca-app-pub-3476542526287283/6764449550')
const advert = firebase.admob().interstitial('ca-app-pub-3476542526287283/5644855290')
const request = new AdRequest();
request.addKeyword('foobar');
export default class Buying extends Component {
    constructor(props){
        super(props);
        this.state = {
         mobile : '',
         name : '', 
         location : ''
        };
       
     }
  componentDidMount = () => {
  
  }
  static navigationOptions = {
    title: "Buying Modicare Products (Modicare उत्पाद खरीदना)"
  }
  goToProducts = () => {
    // AdSettings.addTestDevice(AdSettings.currentDeviceHash);
    // InterstitialAdManager.showAd("434555400602082_434557547268534")
    // .then(didClick => {
    //   console.log('working')
    // })
    // .catch(error => {
    //   console.log(error, 'fb add rror')
    // });
         advert.loadAd(request.build());
    advert2.loadAd(request.build())

    advert2.on('onAdLoaded', () => {
       console.log('Advert2 ready to show.')
    })
    
    advert2.show()

advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});

setTimeout(() => {
  if (advert.isLoaded()) {
    console.log('working')
    advert.show();
  } else {
    console.log('error occured')
  }
}, 1000);
    this.props.navigation.navigate('ScreenOne' )
  }
  share = () => {
    Share.share({
      message: 'Checkout Modicare Products - https://play.google.com/store/apps/details?id=com.newadd',
      url: 'https://play.google.com/store/apps/details?id=com.newadd',
      title: 'Start Your Own Business'
    }, {
      // Android only:
      dialogTitle: 'Share the app',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  setName = (name) => {
  this.setState ({name : name})
  }

  setMobile = (mobile) => {
    this.setState ({mobile : mobile})
    }

    setLocation = (location) => {
        this.setState ({location : location})
        }

        submit = () => {
            if(this.state.name && this.state.mobile && this.state.location && this.state.mobile.length == 6)
            {
              firebase.database().ref('requests')
              .once('value')
              .then((snapshot) => {
                console.log(snapshot.numChildren(), 'fkkfkfk')
                if(snapshot.numChildren() < 50)
                {
                  firebase.database().ref('requests').push({
                  "name": this.state.name,
                  "mobile" : this.state.mobile,
                  "location" : this.state.location
                 
                    }).then((data)=>{
                  this.setState ({name : ""})
                  this.setState ({mobile : ""})
                  this.setState ({location : ""})
                  alert("data received..you will receive call/message shortly (डेटा प्राप्त हुआ आपको शीघ्र ही कॉल / संदेश प्राप्त होगा)")
                  
                    }).catch((error)=>{
                        //error callback
                        console.log('error ' , error)
                    })
                }
                else{
                  alert("an error occured! please try again after some time ")
                }
                
              })
              .catch((error) => { } );
             
               
            console.log('name', this.state.name, 'mobile', this.state.mobile.length, 'location', this.state.location)
            }
            else
            {
                alert("please enter valid details")
            }
        }
  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.mainContainer}>
        
                <View style={styles.content}>
                 <ScrollView>
 
                    <View style={styles.messageBox}>
                       
                            <Text style={styles.topText}>Want to buy Modicare Products? (Modicare उत्पाद खरीदना चाहते हैं)?</Text>
                       
                            <Text style={styles.messageBoxBodyText}>Fill Details</Text>
                            <TextInput multiline ={true} style={{...styles.textInputWidth, height : 100, textAlignVertical: 'top'}} placeholder="Enter Products With Quantity (उमात्रा के साथ उत्पाद दर्ज करें)" value={this.state.name} onChangeText={(text)=>
                    this.setName(text)}   keyboardType='default'></TextInput>
                    <TextInput style={styles.textInputWidth} placeholder="Enter Pin Code" value={this.state.mobile} onChangeText={(text)=>
                    this.setMobile(text)} keyboardType='numeric' maxLength={6}></TextInput>
                     <TextInput style={styles.textInputWidth} placeholder="Enter Location" value={this.state.location} onChangeText={(text)=>
                    this.setLocation(text)}></TextInput>
                            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.submit()}>
            <Text style={styles.fullWidthButtonText}>Submit</Text>
            </TouchableHighlight>
            <Text style={styles.messageBoxBodyText2}>if you want to place your order by call,  call on  +917626879728 (
अगर आप कॉल करके अपना ऑर्डर देना चाहते हैं, तो कॉल करें - +917626879728)</Text>
                    </View>
                    </ScrollView>
                </View>
                
                {/* <View style={styles.footer}> */}
       <Banner
       style={{alignSelf:'center'}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-3476542526287283/6867217875"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
  {/* </View> */}
            </View>
            
    );
  }
};
const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    mainContainer:{
      flex:1                  //Step 1
  },
  content:{
      backgroundColor:'#ebeef0',
      flex:1                //Step 2
  },
  messageBox:{
    alignItems : 'center',
    width:'100%'
  },
  messageBoxBodyText:{
    margin:10,
    fontSize:18
  },
  messageBoxBodyText2:{
    margin:10,
    fontSize:18,
    fontWeight : 'bold'
  },
  topText:{
    fontSize:25,
    marginTop : 10,
    fontWeight : 'bold',
    textAlign : 'center'
  },
  topText2:{
    fontSize:20,
    marginTop : 10,
    marginLeft:10
  },
  inputsContainer: {
    flex: 1,
    alignItems : 'center'
  },
  textInputWidth : {
      width : '80%',
      borderWidth:1,
      borderRadius:20,
      marginBottom:10
  }, 
  fullWidthButton: {
    backgroundColor: 'blue',
    height:50,
    width:'80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  },
  footer:{
    position:'absolute',
    bottom : 10,
    width : '100%'
  }
  });

