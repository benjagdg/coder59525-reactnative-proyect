import { StyleSheet } from "react-native";
import colors from "./appColors";

const cartProductStyle = StyleSheet.create({
  productCartContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.lightBackground,
    padding: 5,
    borderRadius: 15,
    marginVertical: 5
  },
  productCartImageContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCartImage: {
    width: 80,
    height: 50,
    borderRadius: 10,
  },
  productCartDetails: {
    width: '60%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10

  },
  productCartTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary
  },
  productCartPriceContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5  
  },
  productCartPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.lightBlue,
    borderColor: colors.lightBlue,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingTop: 5,
    textAlign: 'center',
  },
  productCartSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.textPrimary,
    paddingHorizontal: 2
  },
  productCartButtons: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  cartButton: {
    backgroundColor: colors.lightBlue,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButtonText: {
    fontSize: 20,
    color: colors.textWhite,
    fontFamily: 'Poppins-Regular'
  },
  cartQuantity: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: colors.textPrimary,
    width: 30,
    textAlign: 'center'
  },
  
});

export default cartProductStyle;