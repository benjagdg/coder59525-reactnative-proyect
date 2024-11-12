import { StyleSheet } from "react-native";
import colors from "./appColors";

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    color: colors.textPrimary,
  },
  subtitle:{
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: colors.textPrimary,
  },
  formTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 24,
    color: colors.textWhite,
    textAlign: 'center',
  },
  mt20: {
    marginTop: 20
  },
  mb20: {
    marginBottom: 20
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    paddingVertical: 40
  },
  textInput: {
    backgroundColor: colors.lightBackground,
    fontFamily: 'Poppins-Regular',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  labelInput: {
    color: colors.textSecondary,
    fontFamily: 'Poppins-Regular',
    marginBottom: 5
  },
  btnPrimary: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: colors.lightBlue,
    padding: 15,
    borderRadius: 5
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    color: colors.textWhite,
    textAlign: 'center',
    fontSize: 16
  },
  textSignUp: {
    color: colors.textWhite,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  }
});

export default authStyles;