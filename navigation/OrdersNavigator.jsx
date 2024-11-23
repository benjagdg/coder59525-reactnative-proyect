import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HeaderComponent from "../components/HeaderComponent"

import { OrdersScreen } from "../screens/cart"
const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={ {
        header: ({route}) => <HeaderComponent sectionTitle={route.name} />
      } }
    >
      <Stack.Screen name="Tus compras" component={OrdersScreen} />
    </Stack.Navigator>
  )
}

export default OrdersNavigator