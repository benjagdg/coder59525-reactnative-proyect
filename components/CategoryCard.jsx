import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import colors from '../styles/appColors'

const categoryCardWidth = Dimensions.get('window').width / 2 - 20

const CategoryCard = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}  >
      <ImageBackground source={{ uri: image }} style={styles.categoryImageBackground} imageStyle={styles.categoryImage}>
        <View style={styles.categoryCardOverlay}>
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  categoryCard: {
    width: categoryCardWidth,
    height: categoryCardWidth/1.7,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5
  },
  categoryImageBackground: {
    flex: 1,
    justifyContent: 'center'
  },
  categoryImage: {
    borderRadius: 10,
  },
  categoryCardOverlay: {
    flex: 1,
    backgroundColor: colors.semiTransparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10
  },
})