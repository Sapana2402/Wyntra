import { Button, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/slices";

const Profile = () => {
    const dispatch = useDispatch()
    return ( 
        <View>
            <Button title="Logout" onPress={()=>{
                dispatch(logout())
            }} />
        </View>
     );
}

export default Profile;