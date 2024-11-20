import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../styles/appColors'
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderComponent = ({sectionTitle}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo_wabit.png')} style={{width: 50, height: 30}} />
        <Text style={styles.headerTitle}> Wabit Store</Text>
      </View>
      <View style={{flex:1, alignItems:"flex-end"}}>
        <Text style={styles.sectionTitle}> {sectionTitle}</Text>
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
  sectionTitle:{
    fontSize: 16,
    fontFamily: "Poppins-Light"
  }

})