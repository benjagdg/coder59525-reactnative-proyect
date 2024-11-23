import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/appColors'

const OrdersScreen = () => {
  return (
    <>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.sectionTitle}>No tienes ordenes pendientes</Text>
      </View>
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
})