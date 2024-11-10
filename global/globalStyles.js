import { StyleSheet } from "react-native";
import globalColors from "./globalColors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    color: globalColors.primary,
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
  },
  lightText: {
    fontFamily: 'Poppins-Thin',
    fontSize: 14,
  },
  generalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  textCenter:{
    textAlign: 'center',
  }
});

export default globalStyles;