import { Text, View, Image } from 'react-native'
import orderListStyle from '../styles/orderListStyle'

const OrdersProducts = ( {order} ) => {
  return (
    <View style={orderListStyle.orderContainer}>
      <View style={orderListStyle.orderHeader}>
        <Text style={orderListStyle.orderTitle}>Pedido #{order.createdAt}</Text>
        <Text style={orderListStyle.orderDate}>{
          new Date(order.createdAt).toLocaleDateString().concat(' ', new Date(order.createdAt).toLocaleTimeString())
        }</Text>
      </View>
      {
        order.cartItems.map( (product, index) => (
          <View style={orderListStyle.orderListContainer} key={index}>
            <View style={orderListStyle.orderListImageContainer}>
              <Image source={{uri: product.imagen}} style={orderListStyle.orderListImage} />
            </View>
            <View style={orderListStyle.orderListDetails}>
              <Text style={orderListStyle.orderListTitle}>{product.nombre}</Text>
              <View style={orderListStyle.orderListPriceContainer}>
                <Text style={orderListStyle.orderListPrice}>${product.precio}</Text>
                <Text style={orderListStyle.orderListSubtitle}> x {product.quantity}</Text>
              </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default OrdersProducts;