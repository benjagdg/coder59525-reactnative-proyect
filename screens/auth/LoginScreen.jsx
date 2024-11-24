import { Text, View, TextInput, Pressable, Image, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'

import authStyles from '../../styles/authStyles'
import { useUserLoginMutation } from '../../services/authService'
import { setUser } from '../../features/auth/authSlice'
import { insertSession, clearSessions } from '../../services/sqlite'
import { setCartRedirect } from '../../features/cart/cartSlice'

const LoginScreen = ( {navigation} ) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const cartRedirect = useSelector(state => state.cartReducer.value.cartRedirect);

  const [triggerLogin, result] = useUserLoginMutation()

  const submitLogin = () => {
    if(email === '' || password === ''){
      showToast('error', 'Debes completar todos los campos')
      return
    }
    triggerLogin({email, password})
  }

  useEffect( () => {
    if (result.isSuccess) {
      dispatch(setUser(result.data));
      clearSessions().then(res => console.log("Sesiones eliminadas", res)).catch(error => console.log("Error al eliminar sesiones", error));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      }).then(res => console.log("Usuario insertado con éxito", res)).catch(error => console.log("Error al insertar usuario", error));
      console.log(result.data);
      if(cartRedirect === true){
        dispatch(setCartRedirect());
        navigation.navigate('Cart');
      }else{
        navigation.navigate('Inicio');
      }
      showToast('success', 'Inicio de sesión exitoso');
    }else if (result.isError) {
      showToast('error', 'Error al iniciar sesión, vuelva a intentarlo');
    }
  }, [result])

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
    <View style={authStyles.container}>
      <Image source={require('../../assets/logo_wabit.png')} style={{width: 150, height: 100}} />
      <Text style={authStyles.title}>Wabit Store</Text>
      <Text style={[authStyles.subtitle, authStyles.mb20]}>Tu mundo digital, más cerca que nunca</Text>
      <View style={authStyles.formContainer}>
        <Text style={[authStyles.formTitle, authStyles.mb20]}>Ingresa con tu cuenta</Text>
        <View style={authStyles.mb20}>
          <Text style={authStyles.labelInput}>Email</Text>
          <TextInput
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor='#111827'
              placeholder='Ingresa tu email'
              style={authStyles.textInput}
          />
          <Text style={authStyles.labelInput}>Contraseña</Text>
          <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor='#111827'
              placeholder='Ingresa tu contraseña'
              style={authStyles.textInput}
              secureTextEntry
          />
        </View>
        {
          result.isLoading ? 
            <ActivityIndicator size="large" />
          : 
          <Pressable style={[authStyles.btnPrimary, authStyles.mb20]} onPress={submitLogin}>
            <Text style={authStyles.btnText}>Iniciar sesión</Text>
          </Pressable>
        }
        
        <Pressable onPress={ () => navigation.navigate('Signup') } style={authStyles.signUpPressable}>
          <Text style={authStyles.textSignUp}>¿No tienes una cuenta? </Text>
          <Text style={ {...authStyles.textSignUp , ...authStyles.textUnderline}}>Regístrate aquí</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen