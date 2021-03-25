
import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import UserComment from './UserComment'

const FullItem = props => {

    const starImages={
        full: require('../assets/fullStar.png'),
        empty: require('../assets/emptyStar.png'),
    };


	return(

		<View style={styles.container}>

			<View style={styles.food}>
				<Text>{props.name}</Text>
			</View>


			<TouchableOpacity style={styles.rating}>
                <Image style={styles.starImageStyle} source = {props.stars[0]?starImages.full:starImages.empty} />
                <Image style={styles.starImageStyle} source = {props.stars[1]?starImages.full:starImages.empty} />
                <Image style={styles.starImageStyle} source = {props.stars[2]?starImages.full:starImages.empty} />
                <Image style={styles.starImageStyle} source = {props.stars[3]?starImages.full:starImages.empty} />
                <Image style={styles.starImageStyle} source = {props.stars[4]?starImages.full:starImages.empty} />
				<Text>{'('+props.timesRated+')'}</Text> 
			</TouchableOpacity>
		

			<View style={styles.desc}>
				<Text>It is made with basmati rice, spices and goat meat. Popular variations use chicken instead of goat meat. There are various forms of Hyderabadi biryani. </Text>
			</View>


			<View style={styles.notification}>
				<Button style={styles.notiButton} title='Tap here to get notification later' color="#FF9933"/>
			</View>

			
			<ScrollView style={styles.comments}>
                <View>
                    {props.userInfo.map((listItem) => (
                        <View key={listItem.name} >
                            <UserComment name={listItem.name} comment={listItem.comment} date={listItem.date}/>
                        </View>
                    ))}
                </View>
			</ScrollView>
			
		</View>
	

	);

}

export default FullItem;

const styles = StyleSheet.create({

	container: {
	  backgroundColor: 'white',
	  flex: 1.5,
	},

	food:{
		flex: 1,
	},

	rating:{
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingHorizontal: 100,
		
	},

	starImageStyle: {
		width: 30,
		height: 30,
		resizeMode: 'cover',
	},

	desc:{
		flex: 0.25,
		alignItems: 'center',
		padding: 10,
	},

	notification:{
		flex: 0.2,
		justifyContent: 'space-evenly',
		padding: 10,

	},

	notiButton:{
		borderRadius: 100,
	},

	comments:{
		flex: 1.5,
	},
	
  });