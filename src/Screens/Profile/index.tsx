import { Button, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../Store/slices';
import { Colors } from '../../Assets/Color';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
      }}
    >
      <Pressable onPress={() => dispatch(logout())} style={{backgroundColor: Colors.common.pink,paddingHorizontal:16,paddingVertical: 10,borderRadius: 10}}>
        <Text style={{color:'white'}}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
