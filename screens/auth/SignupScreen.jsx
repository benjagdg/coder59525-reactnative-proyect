import { Text, View, TextInput, Pressable, Image, ActivityIndicator } from 'react-native'
import authStyles from '../../styles/authStyles'
import Toast from 'react-native-toast-message'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useUserSignupMutation } from '../../services/authService'
import { setCartRedirect } from '../../features/cart/cartSlice'
import { setUser } from '../../features/auth/authSlice'
import { insertSession, clearSessions } from '../../services/sqlite'

const SignupScreen = ( {navigation} ) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const cartRedirect = useSelector(state => state.cartReducer.value.cartRedirect);

  const [triggerSignup, result] = useUserSignupMutation()

  const submitLogin = () => {
    if(email === '' || password === ''){
      showToast('error', 'Debes completar todos los campos')
      return
    }

    if(password.length < 6){
      showToast('error', 'La contraseña debe tener al menos 6 caracteres')
      return
    }

    if(password !== confirmPassword){
      showToast('error', 'Las contraseñas no coinciden')
      return
    }
    
    triggerSignup({email, password})
  }

  useEffect( () => {
    if (result.isSuccess) {
      dispatch(setUser(result.data));
      clearSessions().then().catch(error => console.log("Error al eliminar sesiones", error));
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      }).then().catch(error => console.log("Error al insertar usuario", error));
      if(cartRedirect === true){
        dispatch(setCartRedirect());
        navigation.navigate('Cart');
      }else{
        navigation.navigate('Inicio');
      }
      showToast('success', 'La cuenta ha sido creada con éxito');
    }else if (result.isError) {
      showToast('error', 'Error: '+ result.error.data.error.message);
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
      <View style={authStyles.formContainer}>
        <Text style={[authStyles.formTitle, authStyles.mb20]}>¡Crea tu cuenta!</Text>
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
          <Text style={authStyles.labelInput}>Confirma tu contraseña</Text>
          <TextInput
              onChangeText={(text) => setConfirmPassword(text)}
              placeholderTextColor='#111827'
              placeholder='Confirma tu contraseña'
              style={authStyles.textInput}
              secureTextEntry
          />
        </View>
        {
          result.isLoading ? 
            <ActivityIndicator size="large" />
          : 
          <Pressable style={[authStyles.btnPrimary, authStyles.mb20]} onPress={submitLogin}>
            <Text style={authStyles.btnText}>Crear cuenta</Text>
          </Pressable>
        }
        <Pressable onPress={ () => navigation.navigate('Login') } style={authStyles.signUpPressable}>
          <Text style={authStyles.textSignUp}>¿Ya tienes cuenta? </Text>
          <Text style={ {...authStyles.textSignUp , ...authStyles.textUnderline}}>Ingresa aquí</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignupScreen
