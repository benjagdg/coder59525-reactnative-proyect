import { Text, View, TextInput, Pressable, Image } from 'react-native'
import authStyles from '../../styles/authStyles'

import { useState } from 'react'

const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
        <Pressable style={[authStyles.btnPrimary, authStyles.mb20]}><Text style={authStyles.btnText}>Iniciar sesión</Text></Pressable>
        <Text style={authStyles.textSignUp}>¿No tienes una cuenta? Regístrate aquí</Text>
        <Text style={authStyles.textSignUp}>o</Text>
        <Text style={authStyles.textSignUp}>ingresa como invitado</Text>
      </View>
    </View>
  )
}

export default LoginScreen