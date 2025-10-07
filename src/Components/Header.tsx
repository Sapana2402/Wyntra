import { Image, StyleSheet, Text, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../Assets/Color";

const Header = () => {
    return ( 
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
            <Image source={require('../Assets/Images/Icon.png')}/>
            <Text style={styles.mainText}>Wyntra</Text>
            </View>
            <View style={styles.innerContainer}>
             <Feather name={'search'} size={30} color={Colors.common.black} />
             <Ionicons name={'person-circle'} size={30} color={Colors.common.black} />
             </View>
        </View>
     );
}

export default Header;

const styles = StyleSheet.create({
    mainContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    mainText:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:10
    }
})