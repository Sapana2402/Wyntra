import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from '../../Assets/Color';

const ProductDetails = ({ navigation, route }) => {
  const { itemId } = route.params;
  const [details, setDetails] = useState();
  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${itemId}`);
    if (res.data) {
      setDetails(res.data);
    }
  };
  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.productImage} />;
  };

  const renderItemAllImages = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.productImage2} />;
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        data={details?.images}
        renderItem={renderItem}
      />
      <FlatList
        horizontal
        style={styles.list}
        data={details?.images}
        renderItem={renderItemAllImages}
      />
      <View style={styles.subViewContainer}>
        <Text style={styles.category}>{details?.category}</Text>
        <Text style={styles.title}>{details?.title}</Text>
      </View>

      <View style={styles.btnContainer}>
        <Pressable style={styles.addToCart}>
          <Text style={styles.text}>Add To Cart</Text>
        </Pressable>
        <Pressable style={styles.buyNow}>
          <Text style={styles.text}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  productImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  productImage2: {
    width: 50,
    height: 60,
    marginLeft: 10,
    borderColor: Colors.common.black,
    borderWidth: 0.5,
  },
  list: {
    marginVertical: 10,
  },
  category: {
    color: Colors.common.darkGray,
    fontSize: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
  },
  subViewContainer: {
    paddingHorizontal: 16,
  },
  addToCart: {
    flex: 1,
    borderColor: Colors.common.pink,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buyNow: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.common.pink,
    marginLeft:10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop:10
  },
  text: {
    textAlign: 'center',
  },
});
