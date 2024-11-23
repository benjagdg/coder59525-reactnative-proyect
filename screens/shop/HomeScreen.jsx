import { ScrollView, View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import colors from '../../styles/appColors'
import { useGetCategoriesQuery } from '../../services/shopService';
import { setCategory } from '../../features/shop/shopSlice';
import ProductRecentCard from '../../components/ProductRecentCard';
import { setProductId } from '../../features/shop/shopSlice';

const HomeScreen = ( {navigation} ) => {
  const dispatch = useDispatch();
  const productsVisited = useSelector(state => state.shopReducer.value.productsVisited)
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  const renderCategories = ({item, index}) => {
    return (
      <CategoryCard
        title={item.title}
        image={item.image}
        key = {item.id}
        onPress={ () => { 
          dispatch(setCategory(item.title))
          navigation.navigate('Productos')
        } }
      />
    )
  }

  const renderRecentProducts = ({item, index}) => {
    return (
      <ProductRecentCard
        productName = {item.item[1]}
        productDescription = {item.item[2]}
        productImagen = {item.item[3]}
        key = {item.indexindex}
        onPress = { () => { 
          dispatch(setProductId(item.item[0]))
          navigation.navigate('Producto')
        } }
      />
    )
  }

  return (
    <ScrollView vertical bounces={false} > 
      {
        productsVisited.length > 0 ?
        <View>
          <Text style={ styles.categoryTitle }>Productos visitados recientemente</Text>
            <ScrollView horizontal bounces={false} >
              <FlatList data={productsVisited} numColumns={5} renderItem={(item, index) => (renderRecentProducts({item, index})) } />
            </ScrollView>
        </View>:
        null
      }
      <Text style={ styles.categoryTitle }>Nuestras categorías</Text>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {
            isLoading ? <ActivityIndicator size="large" /> : 
            error ? <Text>Ocurrió un error</Text> : 
            categories.map((item, index) => renderCategories({item, index}))
          }
        </View>
      </ScrollView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categoryTitle:{
    color: colors.lightBlue, 
    fontSize: 16, 
    fontFamily: 'Poppins-Regular', 
    marginTop: 10,
    marginStart:15 
  },
})