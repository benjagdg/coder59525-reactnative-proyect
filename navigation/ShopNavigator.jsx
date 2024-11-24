import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, ProductsScreen, ProductScreen } from "../screens/shop"
import HeaderComponent from "../components/HeaderComponent"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={ {
        header: () => <HeaderComponent/>
      } }
    >
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Productos" component={ProductsScreen} />
      <Stack.Screen name="Producto" component={ProductScreen} />
    </Stack.Navigator>
  )
}

export default ShopNavigator
