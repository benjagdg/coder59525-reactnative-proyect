import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import { useEffect } from "react"
import { setUser } from "../features/auth/authSlice"
import { fetchSession } from "../services/sqlite"
import Toast from "react-native-toast-message"
import { useSelector } from "react-redux"

const MainNavigator = () => {

  const user = useSelector(state=>state.authReducer.value.user)
  console.log('Usuario ', user);
  useEffect(()=>{
    if(!user){
      (async ()=>{
        try{
          const session = await fetchSession()
          console.log('Sessiones: ', session);
          if(session.length){
            dispatch(setUser(session[0]))
          }
        }catch(error){
          showToast('error', 'Error al cargar la sesión');
        }    
      })()
    }else{
      (async ()=>{
        try{
          const session = await fetchSession()
          console.log('Sessiones 2: ', session);
        }catch(error){
          showToast('error', 'Error al cargar la sesión');
        }    
      })()
    }
  },[user])

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
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator