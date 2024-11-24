import { StyleSheet } from "react-native";
import colors from "./appColors";

const orderListStyle = StyleSheet.create({
  orderContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 12,
    backgroundColor: colors.whiteColor,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.textDark,
    paddingBottom: 2
  },
  orderTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    color: colors.textPrimary
  },
  orderDate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.textDark
  },
  orderListContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    
  },
  orderListImageContainer: {
    flex: 1
  },
  orderListImage: {
    width: 50,
    height: 50
  },
  orderListDetails: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginStart: 10
  },
  orderListTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary
  },
  orderListPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  orderListPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.textPrimary
  },
  orderListSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: colors.textDark
  }
});

export default orderListStyle;