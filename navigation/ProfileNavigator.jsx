import AuthNavigator from "./AuthNavigator"
import ProfileScreen from "../screens/user/ProfileScreen"
import { useSelector } from "react-redux"

const ProfileNavigator = () => {
  const user = useSelector(state => state.authReducer.value.user)  
  return (
    user ? 
    <ProfileScreen /> 
    :
    <AuthNavigator />

  )
}

export default ProfileNavigator