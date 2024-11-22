import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Pressable } from 'react-native'
import colors from '../styles/appColors'

const productCardWidth = Dimensions.get('window').width / 2 - 20

const ProductListCard = ({ product, onPress }) => {
  const precioFormat = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.precio)
  let productStock = product.stock
  let stockStyle = styles.stockHigh

  /* Stock high > 10, stock available 5 <= stock >=10  stock low < 5 */
  if (productStock < 5) {
    stockStyle = styles.stockLow
  }
  if (productStock === 0) {
    stockStyle = styles.stockEmpty
    productStock = '0'
  }
  if (productStock >= 5 && productStock <= 10) {
    stockStyle = styles.stockAvailable
  }
  if (productStock > 10) {
    stockStyle = styles.stockHigh
    productStock = '+10'
  }



  return (
    /* Make a product card, for a list of products. With a image on top, below that a title with descripción, price, stock and a button to view the product details */
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <Image source={{ uri: product.imagen }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.nombre}</Text>
      <Text style={styles.productDescription}>{product.descripcion}</Text>
      <View style={styles.productDetails}>
        <Text style={styles.productPrice}>{precioFormat}</Text>
        <Text style={[styles.productStock]}>Stock: <Text style={stockStyle}>{productStock}</Text></Text>
      </View>
      <Pressable style={styles.productButton} onPress={onPress}><Text style={styles.productButtonText}>Ver detalles</Text></Pressable>
    </TouchableOpacity>
  ) 
}

export default ProductListCard

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
    fontSize: 16  ,
    fontFamily: 'Poppins-Black',
    color: colors.darkBlue,
    marginTop: 5,
    paddingHorizontal:5
  },
  productDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary,
    marginTop: 5,
    paddingHorizontal:5
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal:5
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    color: colors.lightBlueColor
  },
  productStock: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary
  },
  stockLow: {
    color: colors.yellowColor
  },
  stockEmpty: {
    color: colors.redColor
  },
  stockAvailable: {
    color: colors.lightBlueColor
  },
  stockHigh: {
    color: colors.greenColor
  },
  productButton: {
    width: '100%',
    height: 40,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  productButtonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  }


})