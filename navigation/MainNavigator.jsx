import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import { useEffect } from "react"
import { setUser } from "../features/auth/authSlice"
import { fetchSession } from "../services/sqlite"
import Toast from "react-native-toast-message"
import { useSelector, useDispatch } from "react-redux"
import { useGetUserPictureQuery } from "../services/userService"
import { setProfilePicture } from "../features/auth/authSlice"

const MainNavigator = () => {
  const dispatch = useDispatch()
  
  const user = useSelector(state=>state.authReducer.value.user)
  const localId = useSelector(state=>state.authReducer.value.localId)
  const {data: userPicture, isLoading, error } = useGetUserPictureQuery(localId)

  useEffect(()=>{
    if(!user){
      (async ()=>{
        try{
          const session = await fetchSession()
          if(session.length > 0){
            dispatch(setUser(session[0]))
          }
        }catch(error){
          showToast('error', 'Error al cargar la sesión');
        }    
      })()
    }
  },[user])

  useEffect(()=>{
    if(userPicture){
      dispatch(setProfilePicture(userPicture.image))
    }
  }, [userPicture])

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