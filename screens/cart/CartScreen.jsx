import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cartReducer.value.cartItems)
  const cartTotal = useSelector(state => state.cartReducer.value.cartTotal)
  const cartLength = useSelector(state => state.cartReducer.value.cartLength)

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})