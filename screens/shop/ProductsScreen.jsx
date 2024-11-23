import { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, ActivityIndicator, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import ProductListCard from '../../components/ProductListCard';
import colors from '../../styles/appColors'
import { useGetProductsByCategoryQuery } from '../../services/shopService'; 
import { setProductId } from '../../features/shop/shopSlice';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProductsScreen = ( {navigation} ) => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.shopReducer.value.categorySelected)
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data: productsByCategory, error, isLoading } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if(productsByCategory && productsByCategory.length > 0)
      setFilteredProducts(productsByCategory)
    if(search)
      setFilteredProducts(productsByCategory.filter(product => product.nombre.toLowerCase().includes(search.toLowerCase())))
  },[search, productsByCategory])

  useEffect(() => {
    if(category === '') navigation.navigate('Inicio')
  }, [])

  const renderProducts = ({item, index}) => {
    return (
      <ProductListCard
        product = {item}
        key = {item.id}
        onPress = { () => { 
          dispatch(setProductId(item.id))
          navigation.navigate('Producto')
        } }
      />
    )
  }

  return (
    <> 
      <View >
        <View style={styles.sectionHeader}>
          <Pressable onPress={() => navigation.navigate('Inicio')} style={styles.backButton}>
            <Icon name="arrow-back" size={30} color={colors.textWhite} />
          </Pressable>
          <Text style={ styles.productsTitle }>Productos en "{category}"</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Icon name="search" size={30} color={colors.textDark} />
          <TextInput 
            placeholder="Busca tu producto"
            onChangeText={(text)=>setSearch(text)}
            style={styles.searchInput}
          />
        </View>
      </View>
      <ScrollView style={styles.productsContainer}>
        <View style={styles.productContainer}>
          {
            isLoading ? <ActivityIndicator size="large" /> : 
            error ? <Text>Ocurrió un error, vuelva a intentarlo</Text> : 
            filteredProducts.length === 0 ? <Text style={styles.productsEmpty}>0 productos encontrados...</Text> :
            filteredProducts.map((item, index) => renderProducts({item, index}))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  searchInput:{
    width: '90%',
    backgroundColor: colors.lightBackground,
    padding: 10,
    borderRadius: 10,
    marginEnd: 10,
  },
  productsTitle:{
    color: colors.textPrimary, 
    fontSize: 16, 
    fontFamily: 'Poppins-Light', 
    marginVertical: 10,
    marginStart:15 
  },
  productsContainer: {
    width: '100%'
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sectionHeader:{
    backgroundColor: colors.primary,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButton: {
    backgroundColor: colors.lightBlue,
    borderRadius: 50,
  },
  productsEmpty:{
    color: colors.textPrimary,
    fontSize: 18,
    fontFamily: 'Poppins-Black',
    paddingVertical: 40,
    
  }
})