import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import ProductListCard from '../../components/ProductListCard';
import colors from '../../styles/appColors'
import { useGetProductsByCategoryQuery } from '../../services/shopService'; 
import { setProduct } from '../../features/shop/shopSlice';

const ProductsScreen = ( {navigation} ) => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.shopReducer.value.categorySelected)

  const { data: productsByCategory, error, isLoading } = useGetProductsByCategoryQuery(category);
  const renderProducts = ({item, index}) => {
    return (
      <ProductListCard
        product = {item}
        key = {item.id}
        onPress = { () => { 
          dispatch(setProduct(item.nombre))
          navigation.navigate('Producto')
        } }
      />
    )
  }

  return (
    <>
      <Text style={ styles.productsTitle }>Productos en "{category}"</Text>
      <ScrollView style={styles.productsContainer}>
        <View style={styles.productContainer}>
          {
            isLoading ? <Text>Cargando...</Text> : 
            error ? <Text>Ocurrió un error, vuelva a intentarlo</Text> : 
            productsByCategory.map((item, index) => renderProducts({item, index}))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
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
    alignItems: 'flex-start'
  }
})