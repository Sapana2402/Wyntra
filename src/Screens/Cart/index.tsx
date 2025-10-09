import { useEffect } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromCart } from '../../Store/slices/CratSlice';

const Cart = () => {
  const dispatch = useDispatch();
  //   const { user } = useSelector(state => state.auth);
  const items = useSelector(state => state.carts?.items);

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
      >
        <Image
          source={{ uri: item.images[0] }}
          style={{ height: 100, width: 50 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ textDecorationLine: 'line-through' }}>
              {item.price}
            </Text>
            <Text>{item.discountPercentage}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

export default Cart;
