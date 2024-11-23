import { Text, View, Image, Pressable } from 'react-native'
import cartProductStyle from '../styles/cartProductStyle'
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
    <View style={cartProductStyle.productCartContainer}>
      <View style={cartProductStyle.productCartImageContainer}>
        <Image source={ {uri: product.imagen} } style={cartProductStyle.productCartImage} />
      </View>
      <View style={cartProductStyle.productCartDetails}>
        <Text style={cartProductStyle.productCartTitle}>{product.nombre}</Text>
        <Text style={cartProductStyle.productCartSubtitle}>{product.descripcion}</Text>
        <View style={cartProductStyle.productCartPriceContainer}>
          <Text style={cartProductStyle.productCartPrice}>
            {
              new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.precio*product.quantity)
            }
          </Text>
        </View>
      </View>
      <View style={cartProductStyle.productCartButtons}>
        <Pressable style={cartProductStyle.cartButton} onPress={ removeQuantityProduct }>
          <Text style={cartProductStyle.cartButtonText}>-</Text>
        </Pressable>
        <Text style={cartProductStyle.cartQuantity}>{product.quantity}</Text>
        <Pressable style={cartProductStyle.cartButton} onPress={ addQuantityProduct }>
          <Text style={cartProductStyle.cartButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartProduct