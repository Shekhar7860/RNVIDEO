import React, { Component } from 'react';
import {View,Text , TouchableOpacity} from 'react-native'
export default class Login extends Component {
	
	takeMe = () => {
		this.props.navigation.navigate('Home')
	}
 render () {
		return (<View
			 style={{flex:1}}><Text style={{marginTop:40, fontSize : 19, textAlign:"center" }}>Welcome To Modicare Help{"\n"}(Modicare मदद मे आपका स्वागत है </Text>
                <Text  style={{marginTop:20, fontSize : 19, textAlign:"center", margin:5 }}>Here You Can Know Everything About Modicare such as modicare products, check modicare product demos, their price list, join modicare etc (यहाँ आप Modicare के बारे में सब कुछ जान सकते हैं जैसे कि modicare उत्पाद, modicare उत्पाद डेमो की जाँच करें, उनकी मूल्य सूची, joinicicare आदि।)</Text>
                <Text  style={{marginTop:20, fontSize : 19, textAlign:"center", margin:5 }}> So, If you want to know more about modicare or join modicare - click on this button below(तो, यदि आप modicare के बारे में अधिक जानना चाहते हैं या modicare में शामिल होना चाहते हैं - तो नीचे दिए गए इस बटन पर क्लिक करें) </Text>
                <TouchableOpacity onPress={() => this.takeMe()}style={{marginTop : 20, backgroundColor : "#2ecc71", borderRadius : 10, width:"90%", alignSelf :"center", height : 50, justifyContent : "center"}}><Text style={{textAlign :"center", color : "white", fontSize : 20}}>Lets Start (चलो शुरू करते हैं)</Text></TouchableOpacity>
			 	</View>)
	}
}