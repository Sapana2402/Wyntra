import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Assets/Color';

const Product = ({ item }: any) => {
  return (
    <View style={styles.allProductMainContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <View style={styles.subViewContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.mainSubView}>
          <View style={styles.ratingView}>
            <AntDesign name={'star'} size={15} color={Colors.common.yellow} />
            <Text>{item.rating}</Text>
          </View>
          <View style={styles.direction}>
            <Text style={styles.discountPrice}>{item.discountPercentage}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  allProductMainContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: Colors.common.lightGray,
    elevation: 10,
  },
  productImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  subViewContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  mainSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  direction: {
    flexDirection: 'row',
  },
  discountPrice: {
    color: Colors.common.green,
    fontWeight: 'bold',
  },
  price: {
    textDecorationLine: 'line-through',
    marginLeft: 3,
  },
});
