import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import colors from '../../styles/appColors'
import { useGetCategoriesQuery } from '../../services/shopService';
import { setCategory } from '../../features/shop/shopSlice';

const HomeScreen = ( {navigation} ) => {
  const dispatch = useDispatch();

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

  return (
    <>
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
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categoryTitle:{
    color: colors.textPrimary, 
    fontSize: 18, 
    fontFamily: 'Poppins-Light', 
    marginTop: 10,
    marginStart:15 
  }
})