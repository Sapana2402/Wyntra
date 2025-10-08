import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Color';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/slices';
import { useEffect } from 'react';

function LoginScreen() {
  const dispatch = useDispatch();
  const {token,loading,error } = useSelector(state => state.auth)

 useEffect(() => {
        console.log("tokennnn", token, loading, error);
    }, [token, loading, error]);
    
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          dispatch(loginUser({ username: 'emilys', password: 'emilyspass' }));
        }}
      >
        <Text style={styles.btnText}>Login</Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.common.gray,
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
  },
});
