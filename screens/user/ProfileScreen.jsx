import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import { setProfilePicture } from '../../features/auth/authSlice';
import { usePutUserPictureMutation } from '../../services/userService';
import colors from '../../styles/appColors';
import HeaderComponent from '../../components/HeaderComponent';

const ProfileScreen = ( {navigation} ) => {

  const user = useSelector(state=>state.authReducer.value.user)
  const userImage = useSelector(state=>state.authReducer.value.profilePicture)
  const localId = useSelector(state=>state.authReducer.value.localId)
  
  const dispatch = useDispatch()

  const [triggerPutProfilePicture, result] = usePutUserPictureMutation()

  const checkCameraPermissions = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted) return false
      return true
  }

  const useCameraHandler = async () =>{
    const hasPermission = await checkCameraPermissions()
    if(hasPermission){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1,1],
        base64: true,
        quality: 0.7
      })
      if(!result.canceled){
        dispatch(setProfilePicture(`data:image/jpeg;base64,${result.assets[0].base64}`))
        triggerPutProfilePicture({image: `data:image/jpeg;base64,${result.assets[0].base64}`,localId})
      }
    }else{
      showToast('error', 'No se concedieron permisos para la cámara');
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
      <HeaderComponent />
      <View style={styles.sectionHeader}>
        <Pressable onPress={() => navigation.navigate('Inicio')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color={colors.textWhite} />
        </Pressable>
        <Text style={ styles.productsTitle }>Perfil del Usuario</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageProfileContainer}>
          {
            userImage!= '' ? 
            <Image source={ {uri: userImage} } style={styles.imageProfile} />
            :
            <Text style={styles.textImagePlaceholder}> { user.charAt(0).toUpperCase() } </Text>
          }
          <Pressable onPress={ useCameraHandler } style={styles.profileUseCamera}>
            <View style={styles.profileCameraIcon}>
              <Icon name="camera-alt" size={20} color="white" />
            </View>
          </Pressable>
        </View>
        <Text style={styles.textProfile}>Correo: {user}</Text>
      </View>
    </> 
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  productsTitle:{
    color: colors.textPrimary, 
    fontSize: 16, 
    fontFamily: 'Poppins-Light', 
    marginVertical: 10,
    marginStart:15 
  },
  sectionHeader:{
    backgroundColor: colors.primary,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButton: {
    backgroundColor: colors.lightBlue,
    borderRadius: 50,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageProfileContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  textImagePlaceholder: {
    fontSize: 40,
    color: 'white'
  },
  profileUseCamera: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textProfile: {
    fontSize: 20,
    marginTop: 20
  }
})