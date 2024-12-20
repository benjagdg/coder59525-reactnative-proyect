import { StyleSheet, Text, View, Pressable, FlatList, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../styles/appColors'
import OrdersProducts from '../../components/OrdersProducts'
import { useGetOrdersByCustomerQuery } from '../../services/shopService'
import { useState, useEffect, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'


const OrdersScreen = ( {navigation} ) => {
  const userMail = useSelector(state => state.authReducer.value.user);
  const { data, error, isLoading, refetch } = useGetOrdersByCustomerQuery(userMail);
  const [orderByCustomer, setOrderByCustomer] = useState([]);

  const renderOrdersProducts = ({item, index}) => {
    return (
      <OrdersProducts order = {item} key = {index} />
    )
  }
  useEffect(() => {
    if (data) {
      setOrderByCustomer(data);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  return (
    <>
      <View style={styles.sectionHeader}>
        <Pressable onPress={() => navigation.navigate('Inicio')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color={colors.textWhite} />
        </Pressable>
        <Text style={ styles.sectionTitle }>Mis compras</Text>
      </View>
      {
        <View style={styles.cartContainer}>
          {
            isLoading ? <ActivityIndicator size="large" /> : 
            error ? <Text>Ocurrió un error, vuelva a intentarlo</Text> :
            <FlatList
              data={orderByCustomer}
              renderItem={renderOrdersProducts}
              keyExtractor={(item, index) => index.toString()}
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