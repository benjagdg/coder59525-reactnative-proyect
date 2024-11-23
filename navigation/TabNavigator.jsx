import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import OrdersNavigator from './OrdersNavigator'
import ProfileNavigator from './ProfileNavigator'
import colors from '../styles/appColors'
import { useSelector } from 'react-redux'
const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  const cartLength = useSelector(state => state.cartReducer.value.cartLength)
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions = { {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F3F4F6',
          height: 60
        }
      } }
    >
      <Tab.Screen 
        name="Shop" 
        component={ShopNavigator} 
        options={{
          tabBarIcon: ({focused}) => (<Icon name="home-filled" size={32} color={focused?colors.lightBlue:colors.textSecondary} />)
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartNavigator} 
        options={{
          tabBarIcon: ({focused})=>(<Icon name="shopping-cart" size={32} color={focused?colors.lightBlue:colors.textSecondary} />),
          tabBarBadge: cartLength > 0 ? cartLength : 0
        }}
      />
      <Tab.Screen 
        name="Orders" 
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({focused})=>(<Icon name="local-shipping" size={32} color={focused?colors.lightBlue:colors.textSecondary} />)
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused})=>(<Icon name="account-circle" size={32} color={focused?colors.lightBlue:colors.textSecondary} />)
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})