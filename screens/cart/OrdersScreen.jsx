import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../styles/appColors'
import OrdersProducts from '../../components/OrdersProducts'
import { useGetOrdersByCustomerQuery } from '../../services/shopService'

const OrdersScreen = ( {navigation} ) => {
  const userMail = useSelector(state => state.authReducer.value.user);
  const { data: orderByCustomer, error, isLoading } = useGetOrdersByCustomerQuery(userMail);

  const renderOrdersProducts = ({item, index}) => {
    return (
      <OrdersProducts
        order = {item}
        key = {index}
      />
    )
  }

  return (
    <>
      <View style={styles.sectionHeader}>
        <Pressable onPress={() => navigation.navigate('Inicio')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color={colors.textWhite} />
        </Pressable>
        <Text style={ styles.sectionTitle }>Mis compras</Text>
      </View>
      {
        !orderByCustomer ? 
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.sectionTitle}>No tienes compras registradas</Text>
        </View> :

        <View style={styles.cartContainer}>
          {
            isLoading ? <ActivityIndicator size="large" /> : 
            error ? <Text>Ocurrió un error, vuelva a intentarlo</Text> : 
            <FlatList
              data={orderByCustomer}
              renderItem={renderOrdersProducts}
              keyExtractor={item => item.id}
            />
          }
        </View>
      }
    </>
  )
}

export default OrdersScreen

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