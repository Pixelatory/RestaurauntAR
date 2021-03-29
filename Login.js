import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
export default class Login extends Component {
	render() {
		return (
			<View style={{flex:1, justifyContent:"center", alignItems:"center"}}>        
				<LoginButton onLoginFinished={(error, result) => {
					if (error) {
						console.log("login has error: " + error);
					}
					else if (result.isCancelled) {
						console.log("login is cancelled.");
					} else {
						AccessToken.getCurrentAccessToken().then((data) => {console.log(data.accessToken.toString())})
					}
				}}
			    onLogoutFinished={() => console.log("logout.")} />
		  </View>
		);
	}
};