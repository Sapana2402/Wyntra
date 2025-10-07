import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../../Components/Header';
import { Colors } from '../../Assets/Color';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Product from '../../Components/Product';

interface Categories {
  name: String;
  url: String;
}

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/categories');
      const categoryList = res.data;

      const cat = await Promise.all(
        categoryList.map(async (cat: any) => {
          const productRes = await axios.get(cat.url);
          const details = {
            ...cat,
            image: productRes.data.products[0].thumbnail,
          };
          return details;
        }),
      );

      setCategories(cat);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const getProductDetails = () => {
    const res  = axios.post('')
  }

  const fetchAllProducts = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    const shuffledProducts = res.data.products.sort(() => Math.random() - 0.5);
    setAllProducts(shuffledProducts);
  };
  const renderItem = ({ item }: any) => {
    return (
      <Pressable style={styles.categoriesContainer}>
        <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }} />
        <Text>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        <Header />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
      <ScrollView>
        <View>
          <Image
            source={require('../../Assets/Images/clothsImage.png')}
            style={styles.poster}
          />
          <FastImage
            style={{ width: '100%', height: 50 }}
            source={{
              uri: 'https://stylehut.vercel.app/assets/Payments-D-xdL-BY.gif',
              priority: FastImage.priority.normal,
            }}
          />
          <Image
            source={{
              uri: 'https://stylehut.vercel.app/assets/coupons-Dxg4FCVa.png',
            }}
            style={{ width: '100%', height: 40 }}
          />
          <FlashList
            horizontal
            style={styles.subConatinerView}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={renderItem}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={{
                marginHorizontal: 16,
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 10,
              }}
            >
              All Products
            </Text>
            <Pressable>
              <Text
                style={{
                  marginHorizontal: 16,
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 10,
                  color: Colors.common.pink,
                }}
              >
                View All
              </Text>
            </Pressable>
          </View>
          <FlatList
            numColumns={2}
            style={styles.subConatinerView}
            showsHorizontalScrollIndicator={false}
            // data={allProducts}
            data={allProducts.slice(0, 20)}
             renderItem={({ item }) => <Product item={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#D3D3D3',
    elevation: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 25,
    paddingTop: 10,
  },

  textInput: {
    borderWidth: 1,
    borderColor: Colors.common.black,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingRight: 15,
    alignItems: 'center',
  },
  subConatinerView: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  poster: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
});
