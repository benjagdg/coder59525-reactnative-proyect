import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '../styles/appColors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { clearUser } from '../features/auth/authSlice';
import { useEffect } from 'react';
import { clearSessions } from '../services/sqlite'

const HeaderComponent = () => {
  const userMail = useSelector(state => state.authReducer.value.user);
  useEffect(() => {
  },[userMail])
    
  const dispatch = useDispatch();
  
  const userLogout = () => {
    dispatch(clearUser());
    clearSessions().then().catch(()=>console.log('Error al eliminar sesiones'));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo_wabit.png')} style={{width: 50, height: 30}} />
        <Text style={styles.headerTitle}> Wabit Store</Text>
      </View>
      <View style={{flex:1, alignItems:"flex-end"}}>
        {
          userMail ? 
            <Pressable style={styles.userLogoutPressable} onPress={ () => {userLogout()} }>
              <Text style={styles.userLogoutText}>Cerrar sesión</Text>
              <Text style={styles.userLogoutIcon}><Icon name="logout" size={18} color={colors.textWhite} /></Text>
            </Pressable> 
          : null
        }
      </View>
    </SafeAreaView>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container:{
    height: 80,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBlue
  },
  logoContainer:{
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle:{
    fontSize: 20,
    fontFamily: "Poppins-Black",
    marginTop: 2
  },
  userLogoutPressable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.lightPurple,
    borderRadius: 15
  },
  userLogoutIcon:{
    marginLeft: 5
  },
  userLogoutText:{
    color: colors.textWhite
  }

})