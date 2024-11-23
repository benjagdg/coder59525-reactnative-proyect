import { Text, StyleSheet, TouchableOpacity, Dimensions, Image, Pressable } from 'react-native'
import colors from '../styles/appColors'

const productCardWidth = Dimensions.get('window').width / 2 - 20

const ProductRecentCard = ({ productName,  productDescription, productImagen, onPress }) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <Image source={{ uri: productImagen }} style={styles.productImage} />
      <Text style={styles.productTitle}>{productName}</Text>
      <Text style={styles.productDescription}>{productDescription}</Text>
      <Pressable style={styles.productButton} onPress={onPress}><Text style={styles.productButtonText}>Ver producto</Text></Pressable>
    </TouchableOpacity>
  ) 
}

export default ProductRecentCard

const styles = StyleSheet.create({
  productCard: {
   width: productCardWidth,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "#fff",
    padding: 2,
  },
  productImage: {
    maxWidth: productCardWidth,
    height: productCardWidth/1.5,
    resizeMode: 'cover',
    borderRadius: 10
  },
  productTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    color: colors.darkBlue,
    marginTop: 5,
    paddingHorizontal:5,
    height: 20,
    maxHeight: 20,
    minHeight: 20
  },
  productDescription: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary,
    marginTop: 5,
    paddingHorizontal:5,
    height: 60,
    maxHeight: 60,
    minHeight: 60
  },
  productButton: {
    width: '100%',
    height: 30,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  productButtonText: {
    color: colors.textWhite,
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  }


})