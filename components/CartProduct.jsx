import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '../styles/appColors'
import { useDispatch } from 'react-redux'
import { addItemQuantityToCart, removeItemQuantityFromCart } from '../features/cart/cartSlice'
import Toast from 'react-native-toast-message'

const CartProduct = ( {product} ) => {
  const dispatch = useDispatch()

  const addQuantityProduct = () => {
    try {
      dispatch(addItemQuantityToCart(product.id))
      showToast('success', 'Producto agregado al carrito');
    } catch (error) {
      showToast('error', 'Stock insuficiente');
    }
    
  }

  const removeQuantityProduct = () => {
    dispatch(removeItemQuantityFromCart(product.id))
  }

  const showToast = (type, message) => {
    Toast.show({
        type: type,
        text1: message,
        visibilityTime: 2000,
        position: 'bottom',
        bottomOffset: 100
    });
  };

  return (
    <View style={styles.productCartContainer}>
      <View style={styles.productCartImageContainer}>
        <Image source={ {uri: product.imagen} } style={styles.productCartImage} />
      </View>
      <View style={styles.productCartDetails}>
        <Text style={styles.productCartTitle}>{product.nombre}</Text>
        <Text style={styles.productCartSubtitle}>{product.descripcion}</Text>
        <View style={styles.productCartPriceContainer}>
          <Text style={styles.productCartPrice}>
            {
              new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.precio*product.quantity)
            }
          </Text>
        </View>
      </View>
      <View style={styles.productCartButtons}>
        <Pressable style={styles.cartButton} onPress={ removeQuantityProduct }>
          <Text style={styles.cartButtonText}>-</Text>
        </Pressable>
        <Text style={styles.cartQuantity}>{product.quantity}</Text>
        <Pressable style={styles.cartButton} onPress={ addQuantityProduct }>
          <Text style={styles.cartButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartProduct

const styles = StyleSheet.create({
  productCartContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.lightBackground,
    padding: 5,
    borderRadius: 15,
    marginVertical: 5
  },
  productCartImageContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCartImage: {
    width: 80,
    height: 50,
    borderRadius: 10,
  },
  productCartDetails: {
    width: '60%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10

  },
  productCartTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary
  },
  productCartPriceContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5  
  },
  productCartPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.lightBlue,
    borderColor: colors.lightBlue,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingTop: 5,
    textAlign: 'center',
  },
  productCartSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.textPrimary,
    paddingHorizontal: 2
  },
  productCartButtons: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  cartButton: {
    backgroundColor: colors.lightBlue,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButtonText: {
    fontSize: 20,
    color: colors.textWhite,
    fontFamily: 'Poppins-Regular'
  },
  cartQuantity: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: colors.textPrimary,
    width: 30,
    textAlign: 'center'
  }
})