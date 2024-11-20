import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HeaderComponent from "../components/HeaderComponent"

import { CartScreen } from "../screens/cart"
const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={ {
        header: ({route}) => <HeaderComponent sectionTitle={route.name} />
      } }
    >
      <Stack.Screen name="Mi Carrito" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator