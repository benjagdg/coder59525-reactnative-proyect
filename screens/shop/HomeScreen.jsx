import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import colors from '../../styles/appColors'

const categories = [
  { title: 'Ropa', image: 'https://wabit.cl/coder_app/2.png' },
  { title: 'Electrónica', image: 'https://wabit.cl/coder_app/1.png' },
  { title: 'Hogar', image: 'https://wabit.cl/coder_app/3.png' },
  { title: 'Ropa', image: 'https://wabit.cl/coder_app/2.png' },
  { title: 'Electrónica', image: 'https://wabit.cl/coder_app/1.png' },
  { title: 'Hogar', image: 'https://wabit.cl/coder_app/3.png' },
  { title: 'Ropa', image: 'https://wabit.cl/coder_app/2.png' },
  { title: 'Electrónica', image: 'https://wabit.cl/coder_app/1.png' },
  { title: 'Hogar', image: 'https://wabit.cl/coder_app/3.png' },
];

const HomeScreen = () => {
  return (
    <>
      <Text style={ styles.categoryTitle }>Buscar por categoría</Text>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              onPress={() => alert(`Seleccionaste: ${category.title}`)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categoryTitle:{
    color: colors.textPrimary, 
    fontSize: 22, 
    fontFamily: 'Poppins-Light', 
    marginTop: 10,
    marginStart:15 
  }
})