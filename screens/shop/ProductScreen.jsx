import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductByIdQuery } from '../../services/shopService'
import colors from '../../styles/appColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { setProductsVisited } from '../../features/shop/shopSlice'
import { addItemToCart } from '../../features/cart/cartSlice'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'

const ProductScreen = ( {navigation} ) => {
  const dispatch = useDispatch();
  const productId = useSelector(state => state.shopReducer.value.productId)
  const productsVisited = useSelector(state => state.shopReducer.value.productsVisited)
  
  const {data: product, error, isLoading} = useGetProductByIdQuery(productId);
  useEffect(() => {
    if(product)
      if(!productsVisited.some(item => item[0] === product.id))
        dispatch(setProductsVisited([...productsVisited, [product.id, product.nombre, product.descripcion, product.imagen]]));
  }, [product])

  const addProductToCart = () => {
    try {
      dispatch(addItemToCart({...product}));
      showToast('success', 'Producto agregado al carrito');
    } catch (error) {
      showToast('error', 'Límite de stock alcanzado');
    }
  }

  const showToast = (type, message) => {
    Toast.show({
        type: type,
        text1: message,
        visibilityTime: 2000,
        position: 'bottom',
        bottomOffset: 100
    });
  };

  return (
    <> 
      <View style={styles.sectionHeader}>
        <Pressable onPress={() => navigation.navigate('Productos')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color={colors.textWhite} />
        </Pressable>
        <Text style={ styles.sectionTitle }>Ficha del Producto</Text>
      </View>
      <View style={styles.productContainer}>
        {
          isLoading ? <ActivityIndicator size="large" />  : 
          error ? <Text>Ocurrió un error, vuelva a intentarlo</Text> :
          product.length === 0 ? <Text style={styles.productEmpty}>El producto seleccionado ya no existe.</Text> :
          
          <View style={styles.productProfile}>
            <Text style={styles.productTitle}>{product.nombre}</Text>
            <Image source={{ uri: product.imagen }} style={styles.productImage} />
            <Text style={styles.productDescription}>{product.descripcion}</Text>
            <View style={styles.productDetails}>
              <Text style={styles.productPrice}>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.precio)}</Text>
              <Text style={styles.productStock}>Stock: {product.stock}</Text>
            </View>
            <Pressable style={styles.cartButton} onPress={ addProductToCart }>
              <Text style={styles.cartButtonText}><Icon name="add-shopping-cart" size={20} /></Text>
              <Text style={styles.cartButtonText}> Agregar al carrito</Text>
            </Pressable>
          </View>
        }
      </View>
    </>
  )
}

export default ProductScreen

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
  productEmpty: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: colors.textPrimary,
    marginTop: 10
  },
  productContainer: {
    width: '100%',
    alignItems: 'center'
  },  
  productProfile: {
    width: '100%',
    backgroundColor: colors.lightGray,
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-start'
  },
  productTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Black',
    color: colors.darkBlue,
    marginTop: 5
  },
  productImage: {
    width: "100%",
    height: 220,
    resizeMode: 'cover',
    borderRadius: 20
  },
  productDescription: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary,
    marginTop: 5
  },
  productDetails: {
    flexDirection: 'row',
    marginVertical: 15
  },
  productPrice: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: 20,
    fontFamily: 'Poppins-Black',
    color: colors.lightBlueColor
  },
  productStock: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: colors.textPrimary
  },
  cartButton: {
    width: '100%',
    height: 40,
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  cartButtonText: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: colors.textWhite,
  }

})