import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../styles/appColors'
import CartProduct from '../../components/CartProduct'
import { useCreateOrderMutation } from '../../services/orderService'
import { cleanCart, setCartRedirect } from '../../features/cart/cartSlice'

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const userMail = useSelector(state => state.authReducer.value.user);
  const cartItems = useSelector(state => state.cartReducer.value.cartItems);
  const cartTotal = useSelector(state => state.cartReducer.value.cartTotal);
  const cartLength = useSelector(state => state.cartReducer.value.cartLength);

  const [createOrder] = useCreateOrderMutation();

  const renderCartProducts = ({item, index}) => {
    return (
      <CartProduct
        product = {item}
        key = {item.id}
      />
    )
  }

  const cartOrderProcess = () => {
    createOrder({cartItems, cartTotal, createdAt: Date.now(), userMail})
    dispatch(cleanCart())
    navigation.navigate('Orders')
  }

  const makeLoginFirst = () => {
    dispatch(setCartRedirect())
    navigation.navigate('Profile')
  }

  return (
    <>
      <View style={styles.sectionHeader}>
        <Pressable onPress={() => navigation.navigate('Productos')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color={colors.textWhite} />
        </Pressable>
        <Text style={ styles.sectionTitle }>Tu Carrito</Text>
      </View>
      {
        cartLength === 0 ? 
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.sectionTitle}>Tu carrito está vacío</Text>
        </View> :

        <View style={styles.cartContainer}>
          <FlatList
            data={cartItems}
            renderItem={renderCartProducts}
            keyExtractor={item => item.id}
          />
          <View style={styles.cartTotal}>
            <Text style={styles.cartTotalText}>Total: {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(cartTotal)}</Text>
            {
              userMail ?
              <Pressable 
                style={styles.cartButton} 
                onPress={ ()=>{ cartOrderProcess() } }>
                <Text style={styles.cartButtonText}>Confirmar Compra</Text>
                <Text style={styles.cartButtonText}><Icon name="shopping-cart-checkout" size={22} color={colors.textWhite} /></Text>
              </Pressable>
              :
              <Pressable 
                style={styles.cartButton} 
                onPress={ ()=>{ makeLoginFirst() } }>
                <Text style={styles.cartButtonText}>Inicia Sesión para Continuar</Text>
                <Text style={styles.cartButtonText}><Icon name="login" size={22} color={colors.textWhite} /></Text>
              </Pressable>
            }
          </View>
        </View>
      }
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  backButton: {
    backgroundColor: colors.lightBlue,
    borderRadius: 50,
  },
  sectionTitle:{
    color: colors.textPrimary, 
    fontSize: 16, 
    fontFamily: 'Poppins-Light', 
    marginVertical: 10,
    marginStart:15 
  },
  cartContainer: {
    flex: 1,
    padding: 10
  },
  cartTotal: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  cartTotalText: {
    fontSize: 16,
    fontFamily: 'Poppins-Black',
    color: colors.textPrimary
  },
  cartButton: {
    backgroundColor: colors.greenColor,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  cartButtonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    paddingHorizontal: 5
  }

})