import { Image, StyleSheet, Text, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
    return ( 
        <View>
            <Image source={require('../Assets/Images/Icon.png')}/>
            <Text style={styles.mainText}>Wyntra</Text>
             <Feather name={'search'} size={30} color={'#900'} />
        </View>
     );
}

export default Header;

const styles = StyleSheet.create({
    mainText:{
        fontWeight:'bold'
    }
})